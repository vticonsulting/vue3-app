# Database Notes

[[toc]]

## Archive Support

["Karl recovering assets for incident #46921 - Winston Persaud v. Citizens Property Insurance"](https://hancockclaimsconsultants-my.sharepoint.com/:v:/g/personal/kludwigsen_hancockclaims_com/EaPdwOip7UpHgjSulPwpVloBstwoY4QRLBgrV5IOO5jIzQ)

SQL Query used:

[restoreProjectQueries.sql](/.attachments/restoreProjectQueries-907e33a2-12db-45f1-be7c-6035f17ffce3.sql)

:::tip Note
Replace all project ids/numbers/etc with yours
:::

### 1. Check Archive table for the project number

```sql
SELECT Id AS ProjectId,
  ProjectNumber,
  ClaimId,
  StreetAddress1,
  City,
  CompanyId,
  CreatedOn
FROM _ArchivedProject
WHERE ProjectNumber = '1804300006'
```

### 2. Confirm project is Archived- if the project isn't, then you are done.

```sql
SELECT Id [ProjectId], ClaimId, ProjectNumber, CompanyId
FROM Project
WHERE ClaimId = 714224
SELECT Id [ProjectId], ClaimId, ProjectNumber, CompanyId
FROM _ArchivedProject
WHERE ClaimId=714224
```

### 3. Unarchive project

   1. Run `EXEC spRestoreProjectFromArchive '1804300006'`
   1. Check if `AssetLogItem` is overflowing:

```sql
SELECT * FROM AssetLogItem
WHERE ActionId IN (1, 3, 4)
AND AssetId in (
  SELECT Id
  FROM Asset
  WHERE ProjectId = 788067
)
```

   1. If `AssetLogItem` is overflowing, run:

```sql
BEGIN TRAN
DELETE FROM AssetLogItem
WHERE ActionId IN (1,3,4)
AND AssetId in (SELECT Id FROM Asset WHERE ProjectId=788067)
--COMMIT
--ROLLBACK
```

### 4. Verify PIF Exists - if it doesn't exist, create one from PIFA

```sql
SELECT * FROM PropertyInspectionForm
WHERE ProjectId = (SELECT Id FROM Project WHERE ProjectNumber = '1804300006')
```

### 5. Check for assets

```sql
SELECT AssetTypeId, * FROM Asset
WHERE ProjectId = 788067
ORDER BY 1 DESC
```

### 6. Update assets with either the PIF Id from step 4 or your new PIF id if you created one

```sql
BEGIN TRAN
UPDATE Asset
SET PropertyInspectionFormId = p.Id
FROM PropertyInspectionForm p
JOIN Asset a on a.ProjectId=p.ProjectId
WHERE a.ProjectId=788067
COMMIT
```

### 7. Update old asset types- this isn't exact, but works decently. Look at the assets from this claim and check to make sure this will work with your assets. `MasterAssetField` table will show the deliverable assets that they are likely looking for.

```sql
BEGIN TRAN
UPDATE Asset
SET HasMetaData = 0,
    IsDeleted = 0,
    AssetTypeId =
        CASE
            WHEN AssetName LIKE '%Diagram.pdf%' THEN 12
            WHEN AssetName LIKE '%.esx%' THEN 13
            WHEN AssetName LIKE '%Photos.pdf%' THEN 5
            WHEN AssetName LIKE '%.jpg' THEN 3
            WHEN AssetName LIKE '%.eml' THEN 2
            WHEN AssetName LIKE '%.msg' THEN 2
            ELSE 7
        END
WHERE  ProjectId = 788067

COMMIT
```

### 8. Let the user know that the project has been restored.
