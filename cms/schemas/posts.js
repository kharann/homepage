const postSchema = {
  title: "Post",
  name: "posts",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Post content",
      name: "post_content",
      type: "portable_text",
    },
  ],
};

export default postSchema;
