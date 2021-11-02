const postSchema = {
  title: "My Example Document Type",
  name: "exampleDocumentType",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "content",
    },
  ],
};

export default postSchema;
