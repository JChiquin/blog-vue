<template>
  <div>
    <v-progress-circular v-if="status==='loading'" indeterminate :size="100" color="primary"/>
    <v-container v-for="(post,i) in posts" :key="i">
      <v-layout align-center justify-center>
        <v-flex sm9 >
          <post :post="post" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '@/components/Post';

export default {
  name: 'Blog',
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['posts', 'status']),
  },
};
</script>

<style>
</style>

