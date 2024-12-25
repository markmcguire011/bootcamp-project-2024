import mongoose, { Schema } from "mongoose";
import { commentSchema, IComment } from "./blogSchema";

export type Project = {
  title: string;
  slug: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  comments: IComment[];
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: [commentSchema],
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
