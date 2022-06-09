<script lang="ts">
/* eslint-disable no-console */
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Home',
  },
  setup() {
    const propertyInspectionFormId = 79572
    const reportType = 3
    const paramsString = `propertyInspectionFormId=${propertyInspectionFormId}&reportType=${reportType}&reportType=5`
    // Search parameters can also be an object
    // let paramsObj = { foo: 'bar', baz: 'bar' };
    const searchParams = new URLSearchParams(paramsString)
    // Iterate the search parameters.
    for (const p of searchParams)
      console.log(p)

    const hasReportType = searchParams.has('reportType') === true
    const getReportType = searchParams.get('reportType')
    const getAllReportTypes = searchParams.getAll('reportType')
    const hasFoo = searchParams.get('foo')
    searchParams.append('reportType', 'webdev')
    console.log({ append1: searchParams })
    const searchParamsAsString = searchParams.toString()
    searchParams.set('reportType', 'More webdev')
    console.log({ append3: searchParamsAsString })
    console.log({
      paramsString,
      hasReportType,
      getReportType,
      getAllReportTypes,
      hasFoo,
      searchParamsAsString,
      searchParams,
    })
  },
})
</script>

<template>
  <main class="mt-4">
    <well-container v-if="false" />

    <!--
        TODO: Add Timestamp
        Now
        Quote
      -->

    <!-- Report Example -->
    <div class="px-8 font-mono text-xs report example">
      <header class="py-2 border-b border-black">
        <div class="grid gap-2 lg:grid-cols-2">
          <!-- Report Title -->
          <div class="flex flex-col gap-2 bg-white sm:items-start sm:flex-row">
            <app-logo class="flex-shrink-0 -ml-3 text-brand-500" />
            <div>
              <h1 class="text-2xl whitespace-nowrap">
                Direct Inspection Report
              </h1>
              <address>
                <span class="font-bold text-red-500 outside-temperature">68&deg;</span>
                123 ABC Street, Atlanta, GA 30303
              </address>
            </div>
          </div>

          <!-- Project Inspection Summary -->
          <div class="">
            <div class="grid gap-2 whitespace-nowrap sm:grid-cols-2">
              <div>
                <div class="flex gap-2">
                  <span>CLAIM</span>
                  <strong>2022-GA-00001</strong>
                </div>
                <div class="flex gap-2">
                  <span>CARRIER</span>
                  <strong>State Farm</strong>
                </div>
                <div class="flex gap-2">
                  <span>ADJUSTER</span>
                  <strong>Mike Jones</strong>
                </div>
              </div>
              <div>
                <div class="flex gap-2">
                  <span>INSURED</span>
                  <strong>Carlos Canet</strong>
                </div>
                <div class="flex gap-2">
                  <span>INSPECTED BY</span>
                  <strong class="whitespace-nowrap">
                    Sarah Duvall
                    <span class="whitespace-nowrap">(770) 123-4567</span>
                  </strong>
                </div>
                <div class="flex gap-2">
                  <span>INSPECTION DATE</span>
                  <strong>2022 - Feb 02</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <article class="max-w-screen-lg">
          <div class="grid gap-8 lg:grid-cols-2">
            <img class="w-full" src="/assets/img/front-of-risk.jpg">
            <!-- Netlify Preview Log Table -->
            <!-- TODO: Popup, SlideOver  -->
            <section class="">
              <div>
                <table class="">
                  <tbody>
                    <tr v-for="n in 2" :key="n">
                      <th class="px-2 py-1 text-xs font-bold align-top">
                        2022-FEB-02 Early AM
                      </th>
                      <td class="px-2 py-1 text-xs align-top">
                        <a
                          class="hover:underline"
                          href="https://helpful-rugelach-208ae6.netlify.app/"
                        >
                          helpful-rugelach-208ae6.netlify.app
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <header class="mt-4 border-b border-black">
            <h2 class="text-xl title">
              Property Overview
            </h2>
          </header>
          <h3 class="mt-4 text-lg subtitle">
            Roof
          </h3>
          The structure accessed was a two story single family dwelling with a thirty year
          laminated shingle on a predominately Pitch . (Then either) Damages to the
          following components were observed: (OR) There were no damages observed

          <h3 class="mt-4 text-lg subtitle">
            Elevation
          </h3>
          A walk around inspection of all elevations was completed revealing the presence
          of hardy plank siding, 5 inch downspouts, (Then either) Damages to the following
          components were observed: (OR) There were no damages observed

          <h3 class="mt-4 text-lg subtitle">
            Interior
          </h3>
          <p>
            An interior inspection was completed and the following areas were documented
            with possible damage: (Then either) Damages to the following components were
            observed: (OR) There were no damages observed Other Structures Other
            Structures inspected included (FILL from PIF descriptors). (Then either)
            Damages were found to: (Fill from PIF) (OR) There were no damages observed
            Video Link
          </p>

          <h4 class="mt-4 font-bold">
            For Example
          </h4>

          <ul class="pl-4 my-4 list-disc list-inside">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolore
            accusantium architecto in atque, eligendi natus? Eaque repudiandae ducimus,
            impedit quae voluptatum doloribus dolores doloremque adipisci ipsam animi!
            Culpa. Lorem ipsum
            <strong class="inline-block px-1 text-white bg-brand-500">dolor sit</strong>
            amet consectetur adipisicing elit. Tenetur corporis impedit, voluptates iure
            vero similique laboriosam sapiente sed aliquam quibusdam, enim quaerat illum
            minima ea eveniet accusamus? Repellendus, voluptatibus natus!
          </p>
          <h3 class="mt-4 text-lg subtitle">
            Subtitle
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolore
            accusantium architecto in atque, eligendi natus? Eaque repudiandae ducimus,
            impedit quae voluptatum doloribus dolores doloremque adipisci ipsam animi!
            Culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            corporis impedit, voluptates iure vero similique laboriosam sapiente sed
            aliquam quibusdam, enim quaerat illum minima ea eveniet accusamus?
            Repellendus, voluptatibus natus!
          </p>

          <section class="grid gap-8">
            <div>
              <header>
                <h3 class="mt-4 text-lg">
                  Roof Summary
                </h3>
              </header>
              <div>
                <table class="min-w-full font-mono table-fixed">
                  <thead class="bg-gray-50">
                    <tr class="divide-x divide-gray-200 print:divide-black">
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-4 text-left text-2xs uppercase font-bold tracking-wider sm:pl-6"
                      >
                        Prop Name
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Values
                      </th>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-4 text-left text-2xs uppercase font-bold tracking-wider sm:pr-6"
                      >
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 print:divide-black">
                    <tr class="divide-x divide-gray-200 print:divide-black">
                      <td
                        style="width: 1cm"
                        class="py-4 pl-4 pr-4 text-sm font-medium sm:pl-6"
                      >
                        size
                      </td>
                      <td style="width: 8cm" class="p-4 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                        optio dolore accusantium architecto in atque, eligendi natus?
                      </td>
                      <td class="p-4 text-sm text-gray-500">
                        string
                      </td>
                      <td class="py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        <code>small</code>
                        ,
                        <code>medium</code>
                        ,
                        <code>large</code>
                      </td>
                      <td />
                    </tr>
                    <tr
                      v-for="n in 25"
                      :key="n"
                      class="divide-x divide-gray-200 print:divide-black"
                    >
                      <td class="py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">
                        size
                      </td>
                      <td class="p-4 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                        optio dolore accusantium architecto in atque, eligendi natus?
                      </td>
                      <td class="p-4 text-sm text-gray-500">
                        string
                      </td>
                      <td class="py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        <code>small</code>
                        ,
                        <code>medium</code>
                        ,
                        <code>large</code>
                      </td>
                      <td />
                    </tr>
                    <!-- More people... -->
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <header>
                <h3>Roof Damaged Items</h3>
              </header>
              <div>
                <table class="min-w-full">
                  <thead class="bg-gray-50">
                    <tr class="divide-x divide-gray-200 print:divide-black">
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-4 text-left text-2xs uppercase font-bold tracking-wider sm:pl-6"
                      >
                        Prop Name
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-2xs uppercase font-bold tracking-wider"
                      >
                        Values
                      </th>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-4 text-left text-2xs uppercase font-bold tracking-wider sm:pr-6"
                      >
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 print:divide-black">
                    <tr
                      v-for="n in 25"
                      :key="n"
                      class="divide-x divide-gray-200 print:divide-black"
                    >
                      <td class="py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">
                        size
                      </td>
                      <td class="p-4 text-sm text-gray-500">
                        Front-end Developer
                      </td>
                      <td class="p-4 text-sm text-gray-500">
                        string
                      </td>
                      <td class="py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        <code>small</code>
                        ,
                        <code>medium</code>
                        ,
                        <code>large</code>
                      </td>
                      <td />
                    </tr>
                    <!-- More people... -->
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>

    <!-- #about-view -->
    <!-- #auth-login-view -->
    <!-- #auto-scheduler-view -->
    <!-- #calendar-view -->
    <!-- #dashboard-view -->
    <!-- #portal-view -->
    <!-- #post-view -->
    <!-- #posts-view -->
    <!-- #projects-view -->
    <!-- #recipes-view -->
    <!-- #reports-view -->
    <!-- - #page / #view -->
    <!-- - #layout -->
    <!-- - #template -->
    <!-- - #pattern -->
    <!-- - #element -->
    <!-- #component -->
    <!-- #token -->

    <!--
      ########################################################
      Layouts
      ########################################################
    -->

    <!-- <billing-invoice-layout /> -->
    <!-- <billing-layout /> -->
    <!-- <create-service-type-layout /> -->
    <!-- <create-user-layout /> -->
    <!-- <create-vehicle-special-layout /> -->
    <!-- <customers-layout /> -->
    <!-- <design-templates-layout /> -->
    <!-- <inspection-admin-layout /> -->
    <!-- <inspection-photos-layout /> -->
    <!-- <inspections-layout /> -->
    <!-- <pricing-disclaimer-details-layout /> -->
    <!-- <projects-layout /> -->
    <!-- <reports-layout /> -->
    <!-- <service-territories-layout /> -->
    <!-- <service-types-layout>Testing</service-types-layout> -->
    <!-- <users-layout /> -->
    <!-- <vehicle-special-layout /> -->

    <!--
      ########################################################
      Components - Templates, Patterns, Elements
      ########################################################
    -->

    <!-- <playground-component /> -->
    <!-- <sandbox-component /> -->
    <!-- <idea-component /> -->
    <!-- <the-welcome /> -->
    <!-- <welcome-component /> -->
    <!-- <hero-layout-component /> -->
    <!-- <users-layout-component />  -->
    <!-- <property-inspection-steps-component /> -->

    <!--
      ########################################################
      Layout Templates
      ########################################################
    -->
    <!-- <users-layout-component /> -->
    <!-- <customers-layout-component /> -->
    <!-- <reports-layout-component /> -->

    <!--
      ########################################################
      Dashboards
      ########################################################
    -->
    <!-- <admin-dashboard /> -->
    <!-- <parent-dashboard /> -->

    <!--
      ########################################################
      Page Headings
      ########################################################
    -->
    <!-- <auto-scheduler-page-heading /> -->
    <!-- <projects-page-heading /> -->
    <!-- <property-inspection-page-heading /> -->
    <!-- <users-page-heading /> -->

    <!--
      ########################################################
      Headers
      ########################################################
    -->

    <!-- <card-header /> -->
    <!-- <what-component /> -->
    <!-- <service-type-card-component /> -->
    <!-- <service-type-grid-component /> -->
    <!-- <service-select-fields /> -->
    <!-- <insurance-company-services-list /> -->
    <!-- <continue-divider /> -->
    <!-- <title-divider /> -->
    <!-- <left-title-divider /> -->
    <!-- <right-button-divider /> -->
    <!-- <button-group-divider /> -->
    <!-- <invoice-placeholder /> -->

    <section class="px-8 mt-8">
      <div class="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
    </section>
  </main>
</template>
