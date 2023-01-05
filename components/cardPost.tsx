import InfoPost from "./InfoPost";
import Link from "next/link";

export default function CardPost({
  thumbnail,
  ...infoPost
}: {
  thumbnail: string;
}) {
  return (
    <article>
      <Link href="/detailpost" legacyBehavior>
        <a>
          <img src={thumbnail} alt="post-1" className="w-full rounded mb-4" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
