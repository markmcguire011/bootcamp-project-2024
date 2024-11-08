type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };

const blogs: Blog[] = [
    {
      title: "Title 1",
      date: "10/24/24",
      description: "First blog post",
      image: "../public/image1.jpeg",
      imageAlt: "first image",
      slug: "post-one",
    },
    {
      title: "Title 2",
      date: "10/24/24",
      description: "Second blog post",
      image: "../public/image2.jpeg",
      imageAlt: "second image",
      slug: "post-two",
    },
  ];

  export default blogs