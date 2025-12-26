import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

import chalk from "chalk"

console.log(
  chalk.yellowBright(`
WhatsApp : https://whatsapp.com/channel/0029Vb55cv41nozBTTIw1y07
Youtube  : @darkshadow_zap

@Mr-Supun-Fernando #SUPUN-MD
\n`)
);

const prefix = chalk.blueBright("[BY SUPUN MD]");
const time = () => chalk.redBright(`[${new Date().toLocaleTimeString("id-ID")}]`);
const methods = ["log", "info", "warn", "error", "debug", "trace"];

for (const method of methods) {
  if (typeof console[method] === "function") {
    const original = console[method].bind(console);
    console[method] = (...args) => {
      original(`${prefix} ${time()}`, ...args);
    };
  }
}

//# sourceMappingURL=index.js.map
