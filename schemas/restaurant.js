export default {
  name: "restaurants",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgUrl",
      type: "image",
    },
  ],
};
