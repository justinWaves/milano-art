export default {
  name: "mainPageImage",
  title: "Main Page Image",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "mainImage",
      title: "Main Page Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "caption",
      title: "Caption",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
