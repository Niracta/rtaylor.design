// eslint-disable-next-line import/no-unresolved
import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: `content`,
    // https://docs.astro.build/en/guides/images/#images-in-content-collections
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        banner: image(),
        client: z.string().optional(),
        date: z.date()
      })
  })
};
