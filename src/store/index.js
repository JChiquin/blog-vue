import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    post: { title: '', author: '', content: '', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 },
    status: 'loading',
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    post(state) {
      return (id) => {
        if (id === -1) {
          return state.post;
        }
        return state.posts[id];
      };
    },
    status(state) {
      return state.status;
    },
  },
  mutations: {
    likes(state, post) {
      state.posts[state.posts.indexOf(post)].likes += 1;
    },
    addPost(state, post) {
      state.posts.unshift(post);
    },
    resetPost(state) {
      state.post = { title: '', author: '', content: '', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 };
    },
    deletePost(state, id) {
      state.posts.splice(id, 1);
    },
    editPost(state, payload) {
      state.posts[payload.id] = payload.post;
    },
    updatePosts(state, payload) {
      state.posts = payload.posts;
    },
    updateStatus(state, payload) {
      state.status = payload.status;
    },
  },
  actions: {
    likes({ commit }, post) {
      commit('likes', post);
    },
    addPost({ commit }, post) {
      commit('addPost', post);
      commit('resetPost');
    },
    resetPost({ commit }) {
      commit('resetPost');
    },
    deletePost({ commit }, id) {
      commit('deletePost', id);
      commit('resetPost');
    },
    editPost({ commit }, payload) {
      commit('editPost', payload);
      commit('resetPost');
    },
    fetchPosts(context) {
      api.getPosts()
        .then((resp) => {
          context.commit('updatePosts', { posts: resp.body });
          context.dispatch('updateStatus', { status: 'done' });
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          const postsApi = [
            { id: 1, title: 'Titulo 1', author: 'Jorge Chiquín', content: 'Content 1', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 },
            { id: 2, title: 'Titulo 2', author: 'Jorge Chiquín', content: 'Content 2', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 },
            { id: 3, title: 'Titulo 3', author: 'Jorge Chiquín', content: 'Content 3', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 },
            { id: 4, title: 'Titulo 4', author: 'Jorge Chiquín', content: 'Content 4', avatar: 'https://www.researchgate.net/profile/Maria_Monreal2/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png', likes: 0 },
          ];
          context.commit('updatePosts', { posts: postsApi });
          context.dispatch('updateStatus', { status: 'done' });
        });
    },
    updateStatus({ commit }, payload) {
      commit('updateStatus', payload);
    },
  },
});
