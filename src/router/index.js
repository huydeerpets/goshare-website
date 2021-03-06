import React from 'react';
import Loadable from 'react-loadable';
import LinearQuery from '../components/Progress'

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <LinearQuery />;
  } else {
    return null;
  }
}

export const mainPages = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/home/index'),
      loading: Loading,
      delay: 300,
    }),
    title: '文章'
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () => import('../components/about/About'),
      loading: Loading,
      delay: 300,
    }),
    title: '关于'
  },
];

const subPages = [
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('../components/SignIn'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'signup',
    path: '/signup',
    exact: true,
    component: Loadable({
      loader: () => import('../components/SignUp'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'articleDetail',
    path: '/articleDetail',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Article'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'editor',
    path: '/editor',
    exact: true,
    component: Loadable({
      loader: () => import('../components/editor/Editor'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'test',
    path: '/test',
    exact: true,
    component: Loadable({
      loader: () => import('../components/test'),
      loading: Loading,
      delay: 300,
    }),
  },
]

export default mainPages.concat(subPages)