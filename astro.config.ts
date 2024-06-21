import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import astroPWA from "@vite-pwa/astro";
import {
  remarkDefinitionList,
  defListHastHandlers
} from "remark-definition-list";
import remarkAlerts from "remark-alerts";
import remarkIns from "remark-ins";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkEmbedder from "@remark-embedder/core";
import remarkUnwrapImages from "remark-unwrap-images";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import remarkSectionize from "remark-sectionize";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "@microflash/rehype-figure";
import remarkCaptions from "remark-captions";
import remarkDirective from "remark-directive";
import {
  remarkExtendedTable,
  extendedTableHandlers
} from "remark-extended-table";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkAlerts,
      remarkDefinitionList,
      remarkFlexibleMarkers,
      remarkIns,
      remarkExtendedTable,
      remarkSectionize,
      remarkUnwrapImages,
      remarkSqueezeParagraphs,
      remarkCaptions,
      [
        // @ts-expect-error
        remarkEmbedder.default,
        {
          // @ts-expect-error
          transformers: [oembedTransformer.default]
        }
      ]
    ],
    rehypePlugins: [rehypeHeadingIds, rehypeSlug, rehypeFigure],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
        ...extendedTableHandlers
      }
    }
  },
  integrations: [astroPWA(), mdx({}), react()],
  devToolbar: {
    enabled: false
  },
  output: `server`,
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
