<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Inspection Summary',
  },
})
</script>

<template>
  <article id="inspection-summary" class="px-8 max-w-screen-md">
    <h1 class="mt-8 text-2xl font-bold text-primary-500">
      Inspection Summary
    </h1>

    <section id="roof-section" class="mt-4" style="page-break-before: always !important">
      <!--  Inspection Summary Section -->
      <div class="Section Row">
        <div id="damage-container">
          <table id="damage" class="mt-4 table-data">
            <thead>
              <tr>
                <th class="text-left">
                  Elevation/Direction
                </th>
                <th>Hail Damage +</th>
                <th>Wind Damage</th>
                <th>Other Damage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Front Elevation/North</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Back Elevation/South</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Left Elevation/East</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Right Elevation/West</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Roof Sections -->
      <div id="roof-sections" class="Section Row">
        <!-- Roof Summary Section -->
        <section style="width: 25%" class="Column">
          <div id="roof-summary-container">
            <h2 class="mt-8 text-lg font-medium table-label">
              Roof Summary
            </h2>
            <table id="roof-summary" class="mt-4 table-data">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Roof Type</td>
                  <td>Flat</td>
                </tr>
                <tr>
                  <td>Roof Material</td>
                  <td>20 Year Comp.</td>
                </tr>
                <tr>
                  <td>Ice and Water</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Pitch 0/12-6/12</td>
                  <td />
                </tr>
                <tr>
                  <td>Pitch 7/12-9/12</td>
                  <td />
                </tr>
                <tr>
                  <td>Pitch 10/12-12/12</td>
                  <td />
                </tr>
                <tr>
                  <td>Stories</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>One Story</td>
                  <td />
                </tr>
                <tr>
                  <td>Two Story</td>
                  <td />
                </tr>
                <tr>
                  <td>Valley Type</td>
                  <td>NA</td>
                </tr>
                <tr>
                  <td>Universal Starter</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Rake</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Layers</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Felt Paper</td>
                  <td />
                </tr>
                <tr>
                  <td>Soffit Depth</td>
                  <td>36 (in)</td>
                </tr>
                <tr>
                  <td>Public Adjuster Present</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Insured Present</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Contractor Present</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Roof Components Section -->
        <section style="width: 75%" class="Column">
          <div id="roof-summary-container">
            <h2 class="mt-8 text-lg font-medium table-label">
              Roof Components
            </h2>
            <table id="roof-component" class="mt-4 table-data">
              <thead>
                <tr id="roof-component-header">
                  <th>Roof Component</th>
                  <th>Quantity</th>
                  <th>Qty Dmg</th>
                  <th>Painted</th>
                  <th>Material</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Box Vents</td>
                  <td>3</td>
                  <td>3</td>
                  <td>No</td>
                  <td>Metal</td>
                </tr>
                <tr>
                  <td>Large Chimney Cap</td>
                  <td>1</td>
                  <td>0</td>
                  <td>No</td>
                  <td />
                </tr>
                <tr>
                  <td>Drip Edge Eave</td>
                  <td>3LF</td>
                  <td>0</td>
                  <td>No</td>
                  <td />
                </tr>
                <tr>
                  <td>Hvac Vent 4 Inch</td>
                  <td>1</td>
                  <td>0</td>
                  <td>Yes</td>
                  <td />
                </tr>
                <tr>
                  <td>Satellite Dish</td>
                  <td>1</td>
                  <td>1</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>

    <!-- Other Structures -->
    <section id="other-structures-section" class="w-full">
      <div id="other-structures-container" class="w-1/2">
        <table id="Interior" class="mt-4 table-data">
          <thead>
            <tr>
              <th colspan="2" class="text-center">
                Other Structures - Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 40%">
                Roof
              </td>
              <td style="width: 60%; padding-left: 4px">
                Description
              </td>
            </tr>
            <tr>
              <td style="width: 40%">
                Elevation
              </td>
              <td style="width: 60%; padding-left: 4px">
                Description
              </td>
            </tr>
            <tr>
              <td style="width: 40%">
                Interior
              </td>
              <td style="width: 60%; padding-left: 4px">
                Description
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Non Storm Related Conditions -->
    <section id="non-storm-related-conditions-section" class="w-full">
      <div id="non-storm-related-conditions-container" class="w-1/2">
        <table id="non-storm-related-conditions" class="mt-4 table-data">
          <thead>
            <tr>
              <th colspan="2" class="text-center">
                Non Storm Related Conditions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 40%">
                Blisters
              </td>
              <td style="width: 60%; padding-left: 4px">
                Direction
              </td>
            </tr>
            <tr>
              <td style="width: 40%">
                Thermal Cracking
              </td>
              <td style="width: 60%; padding-left: 4px">
                Direction
              </td>
            </tr>
            <tr>
              <td style="width: 40%">
                Nail Pop
              </td>
              <td style="width: 60%; padding-left: 4px">
                Direction
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Interior Summary Section -->
    <section id="interior-summary-section" class="w-full">
      <div id="interior-container" class="w-1/2">
        <h2 class="mt-8 text-lg font-medium table-label">
          Interior Summary
        </h2>
        <table id="interior" class="mt-4 table-data">
          <thead>
            <tr>
              <th>Location</th>
              <th>SF</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 30%">
                Additional One
              </td>
              <td style="width: 10%">
                3
              </td>
              <td style="width: 60%; text-align: left; padding-left: 4px">
                Water stain hall bathroom
              </td>
            </tr>
            <tr>
              <td style="width: 30%">
                Family Room
              </td>
              <td style="width: 10%">
                3
              </td>
              <td style="width: 60%; text-align: left; padding-left: 4px">
                Water stain on ceiling
              </td>
            </tr>
            <tr>
              <td style="width: 30%">
                Garage
              </td>
              <td style="width: 10%">
                3
              </td>
              <td style="width: 60%; text-align: left; padding-left: 4px">
                Test
              </td>
            </tr>
            <tr>
              <td style="width: 30%">
                Master Bedroom
              </td>
              <td style="width: 10%">
                3
              </td>
              <td style="width: 60%; text-align: left; padding-left: 4px">
                Water stain on master bedroom ceiling
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Collateral Section -->
    <section id="collateral-section">
      <div id="collateral-container" class="w-full">
        <h2 class="mt-8 text-lg font-medium table-label">
          Collateral Section
        </h2>
        <table id="collateral" class="mt-4 table-data">
          <thead>
            <tr>
              <th>Collateral</th>
              <th>Damage</th>
              <th>Damage Amount</th>
              <th>Size</th>
              <th>Material</th>
              <th>Additional Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 16">
              <td>Fascia</td>
              <td>Yes</td>
              <td />
              <td>6 In</td>
              <td>Aluminum</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Notes -->
    <section id="notes">
      <h2 class="mt-8 text-lg font-medium table-label">
        Notes
      </h2>
      <ul class="pl-8 mt-2 list-disc">
        <li>
          For all damages show totals and total amount damaged. IE, if window screens
          damaged, show total present, then total damaged, same for all other components
        </li>
        <li>
          Same for siding and interior, total area amouts and then damages - have to where
          this populates directly to Scope Sheet and have separate Siding scope sheet.
        </li>
        <li>
          If we can include Prior repairs, non storm related conditions, and storm info on
          this sheet we can do away with report sheet.
        </li>
      </ul>
    </section>
  </article>
</template>
