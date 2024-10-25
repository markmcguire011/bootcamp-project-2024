// Defining attributes for all posts

type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

// Some test posts

const blogs: Blog[] = [
  {
    title: "Title 1",
    date: "10/24/24",
    description: "First blog post",
    image: "src/images/image1.jpeg",
    imageAlt: "first image",
    slug: "post-one",
  },
  {
    title: "Title 2",
    date: "10/24/24",
    description: "Second blog post",
    image: "src/images/image2.jpeg",
    imageAlt: "second image",
    slug: "post-two",
  },
];

// Iterate through posts and create a div with associated html elements to create previews

function blogPosts() {
  const blogContainer = document.getElementById("blog-container");

  blogs.forEach((post) => {
    // Create elements
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h2");
    const description = document.createElement("p");
    const image = document.createElement("img");
    const route = document.createElement("a");

    // Set element contents
    postTitle.textContent = post.title;
    description.textContent = post.description;
    image.src = post.image;
    image.width = 225;
    image.height = 225;
    image.alt = post.imageAlt;
    route.href = "blog/" + post.slug + ".html";
    route.innerHTML = "<br /> Read more...";

    // Append these elements to the div and then to the element in the dom
    postContainer.appendChild(postTitle);
    postContainer.appendChild(description);
    postContainer.appendChild(image);
    postContainer.appendChild(route);

    blogContainer?.append(postContainer);
  });
}

blogPosts();
