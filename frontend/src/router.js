import Vue from 'vue';
import Router from 'vue-router';
import Messages from './components/Messages';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Messages,
    },
    {
      path: '/new-message',
      component: () => import(/* webpackChunkName: "NewMessage" */'./components/NewMessage'),
    },
    {
      path: '/message-info/:messageId',
      name: 'messageInfo',
      component: () => import(/* webpackChunkName: "Message" */'./components/MessageInfo'),
      props: true,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "Register" */'./components/Register'),
      props: true,
    }
  ],
});