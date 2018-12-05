import { configure, addDecorator, getStorybook } from '@storybook/vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import './fonts.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#607d8b',
    secondary: '#795548',
    accent: '#82B1FF',
    error: '#e57373',
    info: '#81d4fa',
    success: '#66bb6a',
    warning: '#f57f17',
  },
  iconfont: 'md',
});

const req = require.context('../../src/', true, /.stories.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
