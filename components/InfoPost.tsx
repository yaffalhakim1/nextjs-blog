import PostAuthor from "./postAuthor";
import PostMetaTitle from "./postMetaTitle";

export default function InfoPost({
  id,
  category,
  date,
  title,
  description,
  authorName,
  authorImage,
  authorJob,
}: {
  id?: number;
  category?: string;
  date?: string;
  title?: string;
  description?: string;
  authorName?: string;
  authorImage?: string;
  authorJob?: string;
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="text-white-60 mt-5 w-10/12">{description}</p>
      <PostAuthor
        authorName={authorName}
        authorImage={authorImage}
        authorJob={authorJob}
      />
    </>
  );
}
