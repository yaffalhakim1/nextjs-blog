import CardPost from "@components/cardPost";
import Container from "@components/container";
import Layout from "@components/layout";
import mockPost from "../utils/posts.json";
import { useState } from "react";
import SectionHeader from "@components/sectionHeader";
import Head from "next/head";

export default function Posts() {
  const [posts, setPosts] = useState(mockPost);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Yafi</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {posts.length < 1 ? (
          <div className="text-center py-20">
            <h2 className="text-6xl ">not found</h2>
            <p className="text-xl mt-4 text-white-60 md:w-6/12 w-full mx-auto ">
              We couldnt find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 mt-6 flex-wrap">
            {posts.map((post) => (
              <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
