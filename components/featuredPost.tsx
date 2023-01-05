import InfoPost from "./InfoPost";
import Link from "next/link";
export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center  items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detailpost" legacyBehavior>
            <a>
              <img
                src="/featured-thumbnail.png"
                className="rounded-xl w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 px-4 md:w-5/12">
          <InfoPost
            category="UI Design"
            date="April 20, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum"
            authorName="John Doe"
            authorImage="/author-1.png"
            authorJob="Web Developer"
          />
        </div>
      </div>
      <hr className="border-white-10 mt-10 md:hidden" />
    </article>
  );
}
