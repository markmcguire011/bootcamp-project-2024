// Defining attributes for all posts
// Some test posts
var blogs = [
    {
        title: "Title 1",
        date: "10/24/24",
        description: "First blog post",
        image: "./images/image1.png",
        imageAlt: "first image",
        slug: "post1",
    },
    {
        title: "Title 2",
        date: "10/24/24",
        description: "Second blog post",
        image: "./images/image2.png",
        imageAlt: "second image",
        slug: "post2",
    },
];
// Iterate through posts and create a div with associated html elements to create previews
function blogPosts() {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (post) {
        var postContainer = document.createElement("div");
        var postTitle = document.createElement("h2");
        var description = document.createElement("p");
        var image = document.createElement("img");
        postTitle.textContent = post.title;
        description.textContent = post.description;
        image.src = post.image;
        image.alt = post.imageAlt;
        postContainer.appendChild(postTitle);
        postContainer.appendChild(description);
        postContainer.appendChild(image);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(postContainer);
    });
}
blogPosts();
