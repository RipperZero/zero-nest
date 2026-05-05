"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const platform_express_1 = require("@nestjs/platform-express");
const bootstrap_1 = require("../src/bootstrap");
let cachedHandler;
const getHandler = async () => {
    if (cachedHandler) {
        return cachedHandler;
    }
    const adapter = new platform_express_1.ExpressAdapter();
    await (0, bootstrap_1.createApp)(adapter);
    cachedHandler = adapter.getInstance();
    return cachedHandler;
};
async function handler(req, res) {
    const appHandler = await getHandler();
    return appHandler(req, res);
}
//# sourceMappingURL=index.js.map