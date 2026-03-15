import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: image().optional(),
      type: z.string(),
      draft: z.boolean().optional(),
    }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
})

const members = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    pronouns: z.string().optional(),
    avatar: z.string().url().or(z.string().startsWith('/')),
    bio: z.string().optional(),
    mail: z.string().email().optional(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    codeberg: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
})

const forms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/forms' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      // sqlite-safe
      id: z.string().regex(/^[a-zA-Z0-9_]+$/, {
        message:
          "Form 'id' can only contain letters, numbers, and underscores.",
      }),
      submit_text: z.string().default('Submit'),
      form: z.object({
        submit_text: z.string().default('Submit'),
        fields: z
          .array(
            z.object({
              id: z.string().regex(/^[a-zA-Z0-9_]+$/, {
                message:
                  "Field 'name' can only contain letters, numbers, and underscores.",
              }),
              label: z.string(),
              type: z
                .enum([
                  'text',
                  'email',
                  'number',
                  'textarea',
                  'tel',
                  'url',
                  'select',
                  'checkbox',
                  'radio',
                ])
                .default('text'),
              options: z.array(z.string()).optional(),
              required: z.boolean().default(false),
            }),
          )
          .min(1, {
            message: 'A form must have at least one field defined.',
          }),
      }),
    }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      link: z.string().url(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
    }),
})

export const collections = { events, blog, members, projects, forms }
