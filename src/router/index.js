import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import Version from '@/views/version-list';
import Invoke from '@/views/invoke';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/version',
      name: 'version',
      component: Version,
    },
    {
      path: '/invoke',
      name: 'invoke',
      component: Invoke,
    },
  ],
});
