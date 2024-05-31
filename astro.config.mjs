import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  site: 'https://openise.github.io',
  //base: '/my-repo',

  integrations: [
    preact(), 
    expressiveCode({
      plugins: [pluginLineNumbers()],
    })
  ]
});