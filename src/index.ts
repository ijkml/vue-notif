import type { Plugin } from 'vue-demi';
// import VnContainer from '@/components/VnContainer.vue';

const plugin: Plugin = {
  install: (_app, _options) => {
    console.info('Registering');
  },
};

export { plugin as VueNotif, plugin as default };
export { default as VnContainer } from './components/VnContainer.vue';
export { useNotifications } from '@/composables/notifications';
