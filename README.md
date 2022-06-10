# Vue 3 App


`<YOUR_CONFIG_URL>/auth/v1/callback`

1. Request a user's GitHub identity

`GET https://github.com/login/oauth/authorize`




Composables are, by far, the best way to organize business logic in your Vue 3 app

They let you extract small pieces of logic into functions that you can easily reuse repeatedly. This makes your code easier to write and read.

Since this way of writing Vue code is relatively new, you might be wondering what the best practices are when writing composables.

First, though, we need to make sure we’re on the same page. So let me take a bit to explain what, exactly, a composable is.

## What is a Composable?

According to the Vue documentation, a composable is “a function that leverages Vue Composition API to encapsulate and reuse stateful logic”.

[More...](https://www.vuemastery.com/courses/coding-better-composables/what-is-a-composable/)

## Features

- Installable as library
- Semantic Versioning
- Automatic Change log / Release Notes
- Deploy Previews
- Backend Agnostic
- Auto imported components, composables, modules, packages, icons
- Example UI patterns: DataTables, Carousels, Dialog, Listbox, Radio Group, Tabs
- [vite](https://www.youtube.com/watch?v=k4_duF1JDes)

```sql
select
  *
from
  ProjectServiceType pst
  left join CompanyServiceType cst on cst.AvailableServiceTypeId = pst.AvailableServiceTypeId
  and pst.CompanyId = cst.CompanyId
where
  1 = 1
  and (
    cst.AvailableServiceTypeId is null
    or cst.CompanyId is null
  )
```
