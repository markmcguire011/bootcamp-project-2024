type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  text: string;
  comments: Object[]
};

const blogs: Blog[] = [
  {
    title: "Title 1",
    date: "10/24/24",
    description: "First blog post",
    image: "/image1.jpeg",
    imageAlt: "first image",
    slug: "post-one",
    text: "Lorem ipsum 1",
    comments: [{
      user: "test",
      comment: "test",
      date: 2024-10-24T07:00:00.000+00:00
    }, 
  {
    user: "test2",
    comment: "test2",
    date: 2024-10-24T07:00:00.000+00:00
  }]
  },
  {
    title: "Title 2",
    date: "10/24/24",
    description: "Second blog post",
    image: "/image2.jpeg",
    imageAlt: "second image",
    slug: "post-two",
    text: "Lorem ipsum 2",
    comments:
  },
];

export default blogs;
