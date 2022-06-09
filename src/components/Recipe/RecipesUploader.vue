<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RecipeUploader',
  data() {
    return {
      file: null,
      isLoading: false,
      recipe: {
        title: null,
        author: null,
        time: 5,
        image: null,
        servings: 1,
        difficulty: 'easy',
        procedure: '',
      } as any,
      errors: {
        title: null,
        author: null,
        image: null,
        procedure: null,
        time: null,
        servings: null,
      } as any,
    }
  },
  watch: {
    file(newFile) {
      this.recipe.image = window.URL.createObjectURL(newFile)
    },
  },
  methods: {
    _validateRecipe() {
      let isValid = true
      for (const key in this.errors) {
        this.errors[key] = null
        if (!this.recipe[key]) {
          this.errors[key] = 'This field cannot be empty'
          isValid = false
        }
        if ((key === 'servings' || key === 'time') && this.recipe[key] < 1) {
          this.errors[key] = 'This field should be at least 1'
          isValid = false
        }
      }
      return isValid
    },
    addRecipe() {
      this.isLoading = true

      if (this._validateRecipe()) {
        setTimeout(() => {
          this.$store.commit('addRecipe', this.recipe)
          this.recipe = {
            title: '',
            author: '',
            time: 5,
            image: null,
            servings: 1,
            difficulty: 'easy',
            procedure: '',
          }
          this.isLoading = false
        }, 2000)
      }
      else {
        this.isLoading = false
      }
    },
  },
})
</script>

<template>
  <form
    class="grid grid-cols-1 gap-4 pb-8 mb-4 rounded md:grid-cols-2 sm:shadow-md sm:px-8 sm:pt-6 text-main"
  >
    <div class="col-start-1 mb-4 md:col-end-3">
      <o-field
        label="Title"
        label-for="name"
        :variant="errors.title ? 'danger' : ''"
        :message="errors.title"
      >
        <o-input
          id="title"
          v-model="recipe.title"
          type="text"
          placeholder="Name of your recipe (e.g. Pizza)"
        />
      </o-field>
    </div>
    <div class="col-start-1 mb-4 md:col-end-3">
      <o-field
        label="Author"
        label-for="author"
        :variant="errors.author ? 'danger' : ''"
        :message="errors.author"
      >
        <o-input
          id="author"
          v-model="recipe.author"
          type="text"
          placeholder="Author name (e.g. Nick Cave)"
        />
      </o-field>
    </div>
    <div class="col-start-1 mb-4">
      <o-field
        label="Time (in minutes)"
        label-for="time"
        :variant="errors.time ? 'danger' : ''"
        :message="errors.time"
      >
        <o-input
          id="time"
          v-model.number="recipe.time"
          type="number"
          placeholder="Time"
          min="1"
        />
      </o-field>
    </div>
    <div class="mb-4">
      <o-field
        label="Servings"
        label-for="servings"
        :variant="errors.servings ? 'danger' : ''"
        :message="errors.servings"
      >
        <o-input
          id="servings"
          v-model.number="recipe.servings"
          type="number"
          placeholder="Servings"
          min="1"
        />
      </o-field>
    </div>
    <div class="flex justify-between col-start-1 mb-4">
      <o-field
        label="Image"
        label-for="image"
        :variant="errors.image ? 'danger' : ''"
        :message="errors.image"
      >
        <o-upload v-model="file">
          <o-button tag="a" variant="primary">
            <o-icon icon="upload" class="mr-4" />
            <span>Click to upload</span>
          </o-button>
        </o-upload>
      </o-field>
      <recipe-image v-if="recipe.image" :src="recipe.image" />
    </div>
    <div class="mb-4">
      <o-field label="Difficulty" class="">
        <div class="flex">
          <o-dropdown
            v-model="recipe.difficulty"
            placeholder="Difficulty"
            aria-role="list"
          >
            <o-button
              slot="trigger"
              variant="primary"
              type="button"
              class="w-32"
            >
              <div class="flex justify-between">
                <span>{{ recipe.difficulty | difficulty }}</span>
                <o-icon icon="caret-down" />
              </div>
            </o-button>
            <o-dropdown-item value="easy">
              <span>Easy</span>
            </o-dropdown-item>
            <o-dropdown-item value="medium">
              <span>Medium</span>
            </o-dropdown-item>
            <o-dropdown-item value="hard">
              <span>Hard</span>
            </o-dropdown-item>
          </o-dropdown>
        </div>
      </o-field>
    </div>
    <div class="col-start-1 mb-4 md:col-end-3">
      <o-field
        label="Procedure"
        label-for="procedure"
        :variant="errors.procedure ? 'danger' : ''"
        :message="errors.procedure"
      >
        <o-input
          id="procedure"
          v-model="recipe.procedure"
          input-class="h-48"
          type="textarea"
          placeholder="How to make your recipe step by step"
        />
      </o-field>
    </div>
    <div class="flex justify-center col-start-1 md:col-end-3">
      <o-button label="Add recipe" native-type="button" @click="addRecipe" />
    </div>
    <p style="position: relative">
      <o-loading v-model:active="isLoading" full-page>
        <o-icon class="text-main dark:text-main-dark" icon="sync-alt" size="large" spin />
      </o-loading>
    </p>
  </form>
</template>
