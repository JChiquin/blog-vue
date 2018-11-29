<template>
  <v-container>
   <v-alert
      :type="alert.type"
      :value="alert.value"
      transition="scale-transition"
    >
      {{ alert.message }}
    </v-alert>
    <v-layout align-center justify-center>
      <v-flex md8>
        <v-list three-line>
          <template v-for="(item, i) in posts">
            <v-list-tile avatar :key="i" @click="() => false">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.author"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-btn fab dark color="indigo" @click="clickEdit(i)">
                <v-icon dark>edit</v-icon>
              </v-btn>
            </v-list-tile>
              <v-divider v-if="i+1<=posts.length" :key="`divider+${i}`" class = "indigo"/>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Lists',
  data() {
    return {
      config: {
        btn1: 'delete', btn2: 'save', edit: true,
      },
    };
  },
  props: {
    alert: {
      type: Object,
      default() {
        return { value: false };
      },
    },
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    clickEdit(i) {
      this.$router.push({ name: 'Edit', params: { config: this.config, id: i } });
    },
  },
};
</script>

<style>

</style>
