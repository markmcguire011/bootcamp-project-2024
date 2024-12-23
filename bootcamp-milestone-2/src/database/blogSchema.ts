import mongoose, { Schema } from "mongoose";

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  text?: string;
  image: string;
  imageAlt?: string;
  comments?: MComment[];
};

export type MComment = {
  user: string;
  comment: string;
  time: Date;
};

const commentSchema = new Schema<MComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true, default: new Date() },
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: {
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: Date.now },
  },
});

const BlogModel =
  mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default BlogModel;
