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

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    localizedText("aboutText", "About Text"),
    localizedString("missionTitle", "Mission Title"),
    localizedText("missionText", "Mission Text"),
    localizedString("visionTitle", "Vision Title"),
    localizedText("visionText", "Vision Text"),
    defineField({
      name: "values",
      title: "Values",
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
  ],
});
