import { defineType, defineField } from "sanity";

const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "ar", title: "Arabic", type: "string" }),
      defineField({ name: "en", title: "English", type: "string" }),
    ],
  });

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "ar", title: "Arabic", type: "text" }),
      defineField({ name: "en", title: "English", type: "text" }),
    ],
  });

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        localizedString("title", "Title"),
        localizedText("subtitle", "Subtitle"),
        localizedString("ctaText", "CTA Button Text"),
        localizedString("whatsappText", "WhatsApp Button Text"),
      ],
    }),
    defineField({
      name: "whyItems",
      title: "Why Skynologix Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("title", "Title"),
            localizedText("description", "Description"),
            defineField({ name: "icon", title: "Icon Name", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "servicesPreview",
      title: "Services Preview Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("title", "Title"),
            localizedText("description", "Description"),
            defineField({ name: "icon", title: "Icon Name", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "stepNumber",
              title: "Step Number",
              type: "number",
            }),
            localizedString("title", "Title"),
            localizedText("description", "Description"),
          ],
        },
      ],
    }),
    defineField({
      name: "finalCta",
      title: "Final CTA Section",
      type: "object",
      fields: [
        localizedString("title", "Title"),
        localizedText("subtitle", "Subtitle"),
      ],
    }),
  ],
});
