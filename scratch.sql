SELECT
  [GroupBy1].[A1] AS [C1]
FROM
  (
    SELECT
      COUNT(1) AS [A1]
    FROM
      (
        SELECT
          [vwProjectListPerformance].[ProjectNumber] AS [ProjectNumber],
          [vwProjectListPerformance].[Id] AS [Id],
          [vwProjectListPerformance].[AdjusterId] AS [AdjusterId],
          [vwProjectListPerformance].[InsuranceAdjuster] AS [InsuranceAdjuster],
          [vwProjectListPerformance].[ServiceTech] AS [ServiceTech],
          [vwProjectListPerformance].[Date] AS [Date],
          [vwProjectListPerformance].[StartTime] AS [StartTime],
          [vwProjectListPerformance].[EndDate] AS [EndDate],
          [vwProjectListPerformance].[Duration] AS [Duration],
          [vwProjectListPerformance].[InsuranceCompany] AS [InsuranceCompany],
          [vwProjectListPerformance].[RequiresHAAG] AS [RequiresHAAG],
          [vwProjectListPerformance].[ClaimNumber] AS [ClaimNumber],
          [vwProjectListPerformance].[City] AS [City],
          [vwProjectListPerformance].[ServiceType] AS [ServiceType],
          [vwProjectListPerformance].[State] AS [State],
          [vwProjectListPerformance].[ServiceRegion] AS [ServiceRegion],
          [vwProjectListPerformance].[ServiceArea] AS [ServiceArea],
          [vwProjectListPerformance].[Status] AS [Status],
          [vwProjectListPerformance].[PostalCode] AS [PostalCode],
          [vwProjectListPerformance].[CreatedOn] AS [CreatedOn],
          [vwProjectListPerformance].[StatusId] AS [StatusId],
          [vwProjectListPerformance].[StreetAddress1] AS [StreetAddress1],
          [vwProjectListPerformance].[InsuredLastName] AS [InsuredLastName],
          [vwProjectListPerformance].[RegionLead] AS [RegionLead],
          [vwProjectListPerformance].[InsuranceCompanyId] AS [InsuranceCompanyId],
          [vwProjectListPerformance].[FlaggedBy] AS [FlaggedBy],
          [vwProjectListPerformance].[ProjectFlaggedBy] AS [ProjectFlaggedBy],
          [vwProjectListPerformance].[FlaggedByInitials] AS [FlaggedByInitials],
          [vwProjectListPerformance].[IsEscalation] AS [IsEscalation],
          [vwProjectListPerformance].[IsReschedule] AS [IsReschedule],
          [vwProjectListPerformance].[PastDueNotComplete] AS [PastDueNotComplete],
          [vwProjectListPerformance].[PastDueComplete] AS [PastDueComplete],
          [vwProjectListPerformance].[IsToday] AS [IsToday],
          [vwProjectListPerformance].[IsTomorrow] AS [IsTomorrow],
          [vwProjectListPerformance].[IsRecentClosed] AS [IsRecentClosed],
          [vwProjectListPerformance].[IsRecentCreated] AS [IsRecentCreated]
        FROM
          [dbo].[vwProjectListPerformance] AS [vwProjectListPerformance]
      ) AS [Extent1]
    WHERE
      (
        ([Extent1].[ProjectNumber] LIKE '%049113682%')
        OR ([Extent1].[InsuranceAdjuster] LIKE '%049113682%')
        OR ([Extent1].[ServiceTech] LIKE '%049113682%')
        OR ([Extent1].[InsuranceCompany] LIKE '%049113682%')
        OR ([Extent1].[ClaimNumber] LIKE '%049113682%')
        OR ([Extent1].[City] LIKE '%049113682%')
        OR ([Extent1].[ServiceType] LIKE N'%049113682%')
        OR ([Extent1].[State] LIKE '%049113682%')
        OR ([Extent1].[ServiceRegion] LIKE '%049113682%')
        OR ([Extent1].[ServiceArea] LIKE '%049113682%')
        OR ([Extent1].[Status] LIKE '%049113682%')
        OR ([Extent1].[PostalCode] LIKE '%049113682%')
        OR ([Extent1].[StreetAddress1] LIKE '%049113682%')
        OR ([Extent1].[InsuredLastName] LIKE '%049113682%')
        OR ([Extent1].[ProjectFlaggedBy] LIKE '%049113682%')
        OR ([Extent1].[FlaggedByInitials] LIKE '%049113682%')
      )
      AND (
        EXISTS (
          SELECT
            1 AS [C1]
          FROM
            (
              SELECT
                1 AS X
            ) AS [SingleRowTable1]
          WHERE
            [Extent1].[StatusId] = 10
        )
      )
  ) AS [GroupBy1]
