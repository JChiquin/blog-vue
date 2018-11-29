import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/components/Blog';
import New from '@/components/New';
import Lists from '@/components/Lists';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'blog',
      component: Blog,
      props: true,
    },
    {
      path: '/posts/new',
      name: 'New',
      component: New,
      props: true,
    },
    {
      path: '/posts/edit/:id',
      name: 'Edit',
      component: New,
      props: true,
    },
    {
      path: '/posts/Lists',
      name: 'Lists',
      component: Lists,
      props: true,
    },

  ],
});
