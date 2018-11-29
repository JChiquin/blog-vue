<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex md8>
        <v-layout align-center justify-center wrap>
          <v-flex xs4>
            <v-subheader class="title">Title</v-subheader>
          </v-flex>
          <v-flex xs8>
              <v-text-field name="input-1-3" single-line v-model="post.title"/>
          </v-flex>
          <v-flex xs4>
            <v-subheader class="title">Content</v-subheader>
          </v-flex>
          <v-flex xs8>
              <v-text-field name="input-1-4" textarea v-model="post.content"/>
          </v-flex>
          <v-flex xs4>
            <v-subheader class="title">Author</v-subheader>
          </v-flex>
          <v-flex xs8>
              <v-text-field name="input-1-5" single-line v-model="post.author"/>
          </v-flex>
          <v-btn fab dark color="indigo" @click="config.edit?deletePost():reset()">
            <v-icon dark>{{ config.btn1 }}</v-icon>
          </v-btn>
          <v-spacer/>
          <v-btn fab dark color="indigo" @click="config.edit?editPost():addPost()">
            <v-icon dark>{{ config.btn2 }}</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'New',
  props: {
    config: {
      type: Object,
    },
    id: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    reset() {
      this.$store.dispatch('resetPost');
    },
    addPost() {
      this.$store.dispatch('addPost', this.post);
      this.$router.push({ name: 'Lists', params: { alert: { message: 'Post has been added', type: 'success', value: true } } });
    },
    deletePost() {
      this.$store.dispatch('deletePost', this.id);
      this.$router.push({ name: 'Lists', params: { alert: { message: 'Post has been deleted', type: 'success', value: true } } });
    },
    editPost() {
      this.$store.dispatch('editPost', { id: this.id, post: this.post });
      this.$router.push({ name: 'Lists', params: { alert: { message: 'Post has been edited', type: 'success', value: true } } });
    },
  },
  computed: {
    post() {
      return this.$store.getters.post(this.id);
    },
  },
};
</script>

<style>

</style>
