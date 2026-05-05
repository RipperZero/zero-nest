import { ExpressAdapter } from "@nestjs/platform-express";

import { createApp } from "../src/bootstrap";

let cachedHandler: ((req: any, res: any) => void | Promise<void>) | undefined;

const getHandler = async () => {
  if (cachedHandler) {
    return cachedHandler;
  }

  const adapter = new ExpressAdapter();

  await createApp(adapter);

  cachedHandler = adapter.getInstance();

  return cachedHandler;
};

export default async function handler(req: any, res: any) {
  const appHandler = await getHandler();

  if (!appHandler) {
    throw new Error("Vercel handler bootstrap failed");
  }

  return appHandler(req, res);
}
