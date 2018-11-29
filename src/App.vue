<template>
  <v-app>
      <v-toolbar>
        <v-container>
            <v-layout align-center justify-center>
              <v-flex md3>
                <v-toolbar-items>
                  <v-btn flat @click="clickPost">Posts</v-btn>
                  <v-btn flat @click="clickLists">Lists</v-btn>
                  <v-btn flat @click="clickNew">New</v-btn>
                </v-toolbar-items>
              </v-flex>
            </v-layout>
        </v-container>
      </v-toolbar>
      <v-container>
        <v-layout>
          <v-flex sm12>
            <v-card>
              <v-card-media
                class="white--text display-1"
                src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox light-blue--text>
                      Jorge Chiquín's Blog
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
               <router-view/>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      config: {
        btn1: 'cached', btn2: 'add', edit: false,
      },
    };
  },
  methods: {
    clickPost() {
      this.$router.push({ name: 'blog' });
    },
    clickNew() {
      this.$router.push({ name: 'New', params: { config: this.config } });
    },
    clickLists() {
      this.$router.push({ name: 'Lists' });
    },
  },
  created() {
    this.$store.dispatch('fetchPosts');
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-image: url("https://vuetifyjs.com/static/doc-images/vbanner.jpg");
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
