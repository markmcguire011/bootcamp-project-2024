import mongoose, { Schema } from "mongoose";
import { IComment, commentSchema } from "./blogSchema";

// typescript type (can also be an interface)
export type Project = {
  title: string;
  slug: string;
  description: string; // for preview
  image: string; // url for string in public
  imageAlt: string; // alt for image
  link: string;
  comments: IComment[];
};

// mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  link: { type: String, required: true },
  comments: [commentSchema],
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
