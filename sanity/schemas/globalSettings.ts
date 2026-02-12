import { defineType, defineField } from "sanity";

export const globalSettings = defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Full international number, e.g. +966XXXXXXXXX",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "twitter", title: "Twitter/X", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
      ],
    }),
    defineField({
      name: "defaultLanguage",
      title: "Default Language",
      type: "string",
      options: {
        list: [
          { title: "Arabic", value: "ar" },
          { title: "English", value: "en" },
        ],
      },
      initialValue: "ar",
    }),
  ],
});
