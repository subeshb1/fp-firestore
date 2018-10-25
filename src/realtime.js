import {Task} from 'fp-small';
//Realtime
export const snapShot = (ref, options = {}) =>
  new Task((rej, res) => ref.onSnapshot(options, res, rej));