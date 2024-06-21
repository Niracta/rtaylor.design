// eslint-disable-next-line import/no-unresolved
import { z, defineCollection } from "astro:content";

const projectsSchema = z.object({
  title: z.string(),
  banner: z.string(),
  client: z.string().optional(),
  date: z.date()
});

export type LearnPage = z.infer<typeof projectsSchema>;

export const collections = {
  projects: defineCollection({
    type: `content`,
    schema: projectsSchema
  })
};
