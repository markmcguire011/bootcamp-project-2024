import mongoose, { Schema } from "mongoose";

type MComment = {
  user: string;
  comment: string;
  time: Date;
};

const commentSchema = new Schema<MComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// defining the collection and model
export { commentSchema, type MComment };
