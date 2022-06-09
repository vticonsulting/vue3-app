<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Report Details',
  },
})
</script>

<template>
  <article id="report-details" class="max-w-screen-md px-8">
    <h1 class="mt-8 text-2xl font-bold text-primary-500">
      Report Details
    </h1>

    <!-- Roof Observations -->
    <section id="roof-observations-section">
      <h2 class="mt-4 text-lg font-semibold">
        Roof Observations
      </h2>
      <section id="roof-observations-container" class="Section">
        <p class="mt-2">
          The risk assessed consists of a
          <span class="font-bold">1 story structure</span>
          with a
          <span class="font-bold">Flat style roof</span>
          with the following predominant pitches:
        </p>
        <ul class="pl-8 mt-2 list-disc">
          <li>Front Pitch: N/A</li>
          <li>Left Pitch: N/A</li>
          <li>Back Pitch: N/A</li>
          <li>Right Pitch: N/A</li>
        </ul>
        <p class="mt-2">
          The roof was comprised of a
          <span class="font-bold">20 Year Comp. shingle system</span>
          with and the following roof accessories:
        </p>
        <ul class="pl-8 mt-2 list-disc">
          <li>Hvac Vent 4 Inch</li>
        </ul>
        <p class="mt-2">
          A walk-around of the structure was conducted examining the siding, windows,
          window screens, fascia, gutters, and downspouts. This examination yielded the
          following damage:
        </p>
        <ul class="pl-8 mt-2 list-disc">
          <li>Fascia Damage</li>
        </ul>
        <p class="mt-2">
          The entirety of the roof system was inspected for wind related damages finding
          no damages. Hail test squares were conducted on each directional slope finding
          no hail strikes within nor to any other field shingles. No prior repairs were
          observed. Other areas of concern if any are noted in the additional summary.
        </p>
      </section>
      <section id="roof-observations-container">
        <p class="mt-2">
          The risk assessed consists of a 2 story structure with a Flat style roof with
          the following predominant pitches:
        </p>
        <ul class="pl-8 mt-2 list-disc">
          <li>Front Pitch: 1/12</li>
          <li>Left Pitch: 2/12</li>
          <li>Back Pitch: 3/12</li>
          <li>Right Pitch: 4/12</li>
        </ul>
        <p class="mt-2">
          The roof was comprised of a Laminate 30 Year shingle system with and the
          following roof accessories:
        </p>
        <ul class="pl-8 mt-2 list-disc">
          <li>Hvac Vent 6 Inch</li>
        </ul>
        <p class="mt-2">
          A walk-around of the structure was conducted examining the siding, windows,
          window screens, fascia, gutters, and downspouts.
        </p>
        <p class="mt-2">
          No sudden loss created damages. The entirety of the roof system was inspected
          for wind related damages finding no damages.
        </p>
        <p class="mt-2">
          Hail test squares were conducted on each directional slope finding no hail
          strikes within nor to any other field shingles.
        </p>
        <p class="mt-2">
          No prior repairs were observed. Other areas of concern if any are noted in the
          additional summary.
        </p>
      </section>
    </section>

    <!--  -->
    <section id="storm-info-section">
      <h2 class="mt-4 text-lg font-semibold">
        Storm Info
      </h2>
      <p class="mt-2">
        NA
      </p>
    </section>

    <!--  -->
    <section id="non-storm-related-damage-section">
      <h2 class="mt-4 text-lg font-semibold">
        Non Storm Related Damage
      </h2>
      <p class="mt-2" />
    </section>

    <!-- Roof - Hail Section -->
    <section id="roof-hail-section" class="hidden">
      <h2 class="mt-4 text-lg font-semibold">
        Roof - Hail
      </h2>
      <p class="mt-2">
        Hail damage to a composition shingle roof system consists of bruising or
        fracturing of the shingle mat. Bruising is most common at unsupported locations
        and usually requires manual examination to confirm that damage has occurred to the
        shingle mat. Fracturing typically occurs at unsupported locations and is readily
        evident. These conditions can promote the absorption of moisture and subsequent
        deterioration of a shingle. Hail damage to a roof is quantified by the analysis of
        "test squares" (10' x 10' Area). The purpose of the test squares is to determine
        the amount of hail damage in a representative area of the roof. The test square
        results are then applied to individual roof fields, or the roof as a whole, to
        estimate the total damage incurred. Protocol calls for the examination of four (4)
        test squares – One (1) facing each direction. Larger and/or more complex roofs
        typically require additional test squares at the discretion of the adjuster.
        Additionally, a cursory overview of the remainder of each field is conducted to
        confirm the findings of the test squares.
      </p>
    </section>

    <!-- Roof - Wind Section -->
    <section id="roof-wind-section" class="hidden">
      <h2 class="mt-4 text-lg font-semibold">
        Roof - Wind
      </h2>
      <p class="mt-2">
        Wind damage to an asphalt composition shingle consists of; creasing, tearing,
        complete detachment, and impacts from wind driven objects. Wind damage totals are
        acquired on a shingle damaged per slope basis. If wind damage is present a
        brittleness "repairability" test is performed on each slope that sustained damage.
        A brittleness test is performed by detaching a shingle at the tar strip and
        lifting approximately three inches or a 40-degree angle. This would be the
        necessary shingle manipulation required to feather and replace a damaged shingle.
      </p>
    </section>

    <!-- Roof - Metal Accessory Items Section -->
    <section id="roof-metal-accessory-items-section" class="hidden">
      <h2 class="mt-4 text-lg font-semibold">
        Roof - Metal Accessory Items
      </h2>
      <p class="mt-2">
        Metal roof accessory items rarely suffer functional damage from hail impact.
        However, hail may cause aesthetic damage in the form of indentations. Rooftop
        penetrations can offer clear and permanent indications of hailstone impacts,
        including hail size and direction of the hail fall. Light gauge metal items will
        often suffer indentations even when the roofing material escapes damage.
      </p>
    </section>

    <!-- Out Building Damage Section -->
    <section id="out-building-damage-section" class="hidden">
      <h2 class="mt-4 text-lg font-semibold">
        Out Building Damage
      </h2>
      <p class="mt-2">
        This is information the outbuilding and the damage observed during the inspection.
        Just some random dummy comment to help with the report
      </p>
    </section>

    <!-- Additional Summary -->
    <section id="additional-summary-section">
      <h2 class="mt-4 text-lg font-semibold">
        Additional Summary
      </h2>
      <p class="mt-2">
        This is an additional summary for this property inspection and contains more
        information that provides a better picture of the data collected during the visit
        to the property. This is just some dummy content and probably will not make any
        sense to anyone reading it. I just want to have more text to show up on the report
        as I try to refresh the look and feel for 2022.
      </p>
    </section>
  </article>
</template>
