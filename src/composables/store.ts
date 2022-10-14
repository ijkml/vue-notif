import { ref } from 'vue';
import type { NotificationId, VnNotificationOptionsWithID } from '@/types';

// main notifications queue
const mainQ = ref<VnNotificationOptionsWithID[]>([]);
// temp notifications queue
const tempQ = ref<VnNotificationOptionsWithID[]>([]);

// is main notification queue busy/idle
const isBusy = ref<boolean>(false);

// define max stack
const maxStack = 3;

// simple, efficient and cheap id store
const vnID = ref(8);

// generate new id on demand
function genId(): NotificationId {
  vnID.value += 3;
  return `vn-notif-${vnID.value}`;
}

export { mainQ, tempQ, isBusy, maxStack, genId };
