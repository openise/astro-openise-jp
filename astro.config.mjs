import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://openise.github.io',
  base: '/astro-openise-jp',
  integrations: [preact(), expressiveCode({
    plugins: [pluginLineNumbers()]
  }), tailwind(), icon()]
});