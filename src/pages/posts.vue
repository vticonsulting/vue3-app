<script lang="ts">
import DatabaseService from '@/services/database.service'

export default defineComponent({
  name: 'List',
  data: () => ({
    posts: [],
    database: null,
    subscriptionPosts: undefined,
  }),
  created() {
    const database = new DatabaseService()
    this.database = database.getInstance()
  },
  async mounted() {
    await this.fetchPosts()
    this.subscribePosts()
  },
  unmounted() {
    this.unsubscribePosts()
  },
  methods: {
    async fetchPosts() {
      const { error, data } = await this.database.from('posts').select().order('id')

      if (error) {
        console.error(error)
        return
      }

      this.setPosts(data)
    },
    setPosts(posts) {
      this.posts = posts
    },
    subscribePosts() {
      this.subscriptionPosts = this.database
        .from('posts')
        .on('INSERT', (message) => {
          if (message.new)
            this.posts.push(message.new)
        })
        .subscribe()
    },
    unsubscribePosts() {
      this.database.removeSubscription(this.subscriptionPosts)
    },
  },
})
</script>

<template>
  <main class="flex-1 p-8">
    <section class="p-8 bg-white rounded-lg shadow" style="max-width: 900px">
      <template v-for="(post, index) in posts">
        <list-item
          :id="post.id"
          :key="`post-${index}`"
          :title="post.title"
          :description="post.description"
        />
      </template>
    </section>
  </main>
</template>
