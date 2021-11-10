export default {
  name: "frontpage",
  title: "Frontpage",
  type: "document",
  fields: [
    {
      title: "Introduction",
      name: "introduction",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "role", type: "string", title: "Role" },
        { name: "description", type: "string", title: "Description" },
      ],
    },
  ],
};
