"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

interface CommentFormData {
  user: string;
  comment: string;
}

interface AddCommentProps {
  slug: string;
  projOrBlog: string;
  onCommentAdded?: (comment: CommentResponse) => void;
}

interface CommentResponse {
  _id: string;
  user: string;
  comment: string;
  time: string;
}

type StatusType = "idle" | "sending" | "success" | "error";

const AddComment = ({ slug, projOrBlog, onCommentAdded }: AddCommentProps) => {
  const [formData, setFormData] = useState<CommentFormData>({
    user: "",
    comment: "",
  });
  const [status, setStatus] = useState<StatusType>("idle");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const apiRoute = projOrBlog == "blog" ? "Blogs" : "Projects";
      const response = await fetch(`/api/${apiRoute}/${slug}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const data = await response.json();
      setFormData({ user: "", comment: "" });
      setStatus("success");
      router.refresh();
      if (onCommentAdded) {
        onCommentAdded(data);
      }
    } catch (error) {
      setStatus("error");
      console.error("Error adding comment:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-lg my-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="user"
            placeholder="Your name"
            value={formData.user}
            onChange={handleInputChange}
            className="w-full focus:outline-0 focus:border-black p-2 border rounded"
            required
          />
        </div>
        <div>
          <textarea
            name="comment"
            placeholder="Your comment"
            value={formData.comment}
            onChange={handleInputChange}
            className="w-full focus:outline-0 focus:border-black p-2 border rounded h-24"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-black/80 text-white px-4 py-2 rounded hover:bg-black disabled:bg-gray-400"
        >
          {status === "sending" ? "Sending..." : "Add Comment"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
