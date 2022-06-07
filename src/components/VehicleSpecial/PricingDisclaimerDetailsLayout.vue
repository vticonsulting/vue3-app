<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const vehicle = ref({})
    const template = ref({})

    return {
      vehicle,
      template,
    }
  },
})
</script>

<template>
  <article class="p-8">
    <create-vehicle-special-page-heading v-if="true" />

    <main class="p-4 mt-4 border-2 border-primary-500">
      <header>
        <h2 class="font-medium">
          Pricing, Disclaimer & Details
        </h2>
        <p>Enter information below for the {{ template.name }}</p>
      </header>

      <section class="mt-4 border-t-2 border-primary-500">
        <!-- Design Template Thumbnail -->
        <div class="grid gap-4 mt-4 lg:grid-cols-2">
          <fieldset class="p-8 border-2 border-primary-600">
            <h3>Vehicle Special Name</h3>
            <label>Name</label>
            <input type="text">
          </fieldset>
          <fieldset class="row-span-3 p-8 border-2 border-primary-600">
            <h3>Details</h3>
            <p>
              Give potential customers two options to choose from within one Vehicle
              Special! Each option can feature three offer types. Select at least one
              option and one offer type.
            </p>

            <div class="field-group">
              <h4 class="flex items-center justify-between">
                <div>
                  Option 1
                  <span>(Required)</span>
                </div>
                <button>Add Another Type</button>
              </h4>
              <p>
                Offer Type 1 -
                <span>Required</span>
              </p>
              <div class="field">
                <label for="option-one-type">Type</label>
                <select id="option-one-type">
                  <option>Special Financing</option>
                </select>
              </div>
              <div class="field">
                <label for="option-one-display-text">Display Text</label>
                <select id="option-one-display-text">
                  <option>APR Financing</option>
                </select>
              </div>
              <div class="field">
                <label for="option-one-rate">Rate</label>
                <input id="option-one-rate" type="text">
              </div>
            </div>

            <div class="field-group">
              <h4>
                Option 2
                <span>(Optional)</span>
              </h4>
              <p>
                Offer Type 2 -
                <span>Optional</span>
              </p>
              <div class="field">
                <label for="option-two-type">Type</label>
                <select id="option-two-type">
                  <option>Select Type</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset class="p-8 border-2 border-primary-600">
            <h3>Pricing Information</h3>
            <p>Enter a purchase price, lease price or both for your vehicle special.</p>

            <div class="grid gap-8 sm:grid-cols-2">
              <div class="field">
                <label>Purchase Price</label>
                <input type="text">
                <p class="help" />
              </div>
              <div>
                <div class="field">
                  <label for="lease-price">Lease Price</label>
                  <input id="lease-price" name="lease-price" type="text">
                  <p class="help">
                    (Per month)
                  </p>
                </div>
                <div class="field">
                  <label for="lease-length">Lease Length</label>
                  <input id="lease-length" name="lease-length" type="text">
                  <p class="help">
                    (Months)
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="p-8 border-2 border-primary-600">
            <h3>Pricing Disclaimer</h3>
            <p>
              Type your own pricing disclaimer or copy and paste one of our generic
              disclaimers and edit as needed.
            </p>
            <label for="pricing-disclaimer">Disclaimer</label>
            <textarea />
            <p>4,000-character limit</p>
          </fieldset>
        </div>
      </section>
    </main>

    <div class="grid gap-8 mt-4 sm:grid-cols-5">
      <button class="py-2 font-bold border-2 border-primary-500">
        Preview
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Save & Publish Later
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Cancel
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Previous
      </button>
      <button class="py-2 font-bold border-2 border-primary-500">
        Next
      </button>
    </div>
  </article>
</template>
