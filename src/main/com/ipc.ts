// import { ipcMain } from 'electron';
import run from './multi-follow';

// ipcMain.on('ipc-example', async (event, arg) => {});
run()
  // eslint-disable-next-line promise/always-return
  .then(() => {
    // process.exit();
  })
  .catch((e) => {});
