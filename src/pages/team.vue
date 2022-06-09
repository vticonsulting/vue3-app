<script lang="ts">
// Don't repeat yourself
import { defineComponent, ref } from 'vue'

export default defineComponent({
  metaInfo: {
    title: 'Team',
  },
  setup() {
    const team = ref([
      ['Amy', 'Gibson'],
      ['Andrew', 'Ford'],
      ['Brad', 'Hancock'],
      ['Carlos', 'Canet'],
      ['Carter', 'Edge'],
      ['Catharine', 'Chapman'],
      ['Cristina', 'Vielhaber'],
      ['David', 'McCampbell'],
      ['David', 'Rose'],
      ['Don', 'Domaine'],
      ['Dylan', 'Lant'],
      ['Jasmine', 'Jackson-Ford'],
      ['Jeff', 'Hall'],
      ['Joseph', 'Ernest'],
      ['Joshua', 'Balderson'],
      ['Justin', 'Owens'],
      ['Karl', 'Ludwigsen'],
      ['Karthikeyan', 'Dharmarajan'],
      ['Lori', 'Puentes'],
      ['Michael', 'Dennis'],
      ['Michael', 'Houser'],
      ['Monica', 'Ariza'],
      ['Noah', 'Rich'],
      ['Ray', 'Tant'],
      ['Richard', 'Tasker'],
      ['Sarita', 'Viswanadham', 'Sarita.Viswanadham@core10.io'],
      ['Tedron', 'Branford'],
      ['Terry', 'Williams'],
      ['Tom', 'Basiliere'],
      ['Victor', 'Tolbert'],
    ])

    return {
      team,
      username: ref(''),
    }
  },
})
</script>

<template>
  <main class="flex flex-1 text-sm">
    <aside class="hidden sm:block w-80">
      <section class="px-8 mt-8">
        <h2 class="pb-2 font-bold border-b border-primary-500">
          Team
        </h2>

        <ul class="mt-4 list-disc list-inside">
          <li>{{ team[0][0] }} {{ team[0][1] }}</li>
          <li>{{ team[1][0] }} {{ team[1][1] }}</li>
          <li>{{ team[2][0] }} {{ team[2][1] }}</li>
          <li>{{ team[3][0] }} {{ team[3][1] }}</li>
          <li>{{ team[4][0] }} {{ team[4][1] }}</li>
          <li>{{ team[5][0] }} {{ team[5][1] }}</li>
          <li>{{ team[6][0] }} {{ team[6][1] }}</li>
          <li>{{ team[7][0] }} {{ team[7][1] }}</li>
          <li>{{ team[8][0] }} {{ team[8][1] }}</li>
          <li>{{ team[9][0] }} {{ team[9][1] }}</li>
          <li>{{ team[10][0] }} {{ team[10][1] }}</li>
          <li>{{ team[11][0] }} {{ team[11][1] }}</li>
          <li>{{ team[12][0] }} {{ team[12][1] }}</li>
          <li>{{ team[13][0] }} {{ team[13][1] }}</li>
          <li>{{ team[14][0] }} {{ team[14][1] }}</li>
          <li>{{ team[15][0] }} {{ team[15][1] }}</li>
          <li>{{ team[16][0] }} {{ team[16][1] }}</li>
          <li>{{ team[17][0] }} {{ team[17][1] }}</li>
          <li>{{ team[18][0] }} {{ team[18][1] }}</li>
          <li>{{ team[19][0] }} {{ team[19][1] }}</li>
          <li>{{ team[20][0] }} {{ team[20][1] }}</li>
          <li>{{ team[21][0] }} {{ team[21][1] }}</li>
          <li>{{ team[22][0] }} {{ team[22][1] }}</li>
          <li>{{ team[23][0] }} {{ team[23][1] }}</li>
          <li>{{ team[24][0] }} {{ team[24][1] }}</li>
          <li>{{ team[25][0] }} {{ team[25][1] }}</li>
          <li>{{ team[26][0] }} {{ team[26][1] }}</li>
          <li>{{ team[27][0] }} {{ team[27][1] }}</li>
          <li>{{ team[28][0] }} {{ team[28][1] }}</li>
          <li>{{ team[29][0] }} {{ team[29][1] }}</li>
        </ul>
      </section>
    </aside>

    <article class="flex-1 p-8">
      <section class="max-w-sm">
        <!-- <custom-input v-slot="{ error }" :min="5" :max="10" :value="username">
          <div>
            <label>Username</label>
            <input v-model="username" type="text">
            <div v-if="error" class="mt-1 error">
              {{ error }}
            </div>
          </div>
        </custom-input> -->
      </section>
    </article>
  </main>
</template>

<style>
.error {
  color: red;
}
</style>
