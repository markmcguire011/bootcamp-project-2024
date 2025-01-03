import { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: string | Date) {
  const dateObject = typeof time === "string" ? new Date(time) : time;

  return (
    dateObject.getMonth() +
    "-" +
    dateObject.getDay() +
    "-" +
    dateObject.getFullYear()
  );
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="shadow-sm my-5 p-3 w-fit border-[1px] border-black rounded-md">
      <h4 className="font-semibold">{comment.user}</h4>
      <p>{comment.comment}</p>
      <span className="text-sm">{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
