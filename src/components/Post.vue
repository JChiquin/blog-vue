<template>
  <v-card hover light raised>
    <v-card-media class="red--text title black">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            {{ post.title }}
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-text>
      {{ post.content }} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </v-card-text>
    <v-card-actions>
    <v-avatar size="36px" slot="activator">
      <img :src="post.avatar">
    </v-avatar>
      {{post.author}}
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn @click="like" icon>
        <v-icon>thumb_up</v-icon>
        {{ post.likes }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  methods: {
    like() {
      this.$store.dispatch('likes', this.post);
    },
  },
};
</script>

<style>

</style>
