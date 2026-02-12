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

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("title", "Title"),
            localizedText("description", "Description"),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "ar", title: "Arabic", type: "string" }),
                    defineField({ name: "en", title: "English", type: "string" }),
                  ],
                },
              ],
            }),
            defineField({ name: "icon", title: "Icon Name", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
