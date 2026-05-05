import { createApp } from "./bootstrap";

const bootstrap = async () => {
  const app = await createApp();

  await app.listen(process.env.PORT ?? 8081);
};

bootstrap();
