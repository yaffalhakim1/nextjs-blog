import FeaturedPost from "@components/featuredPost";
import CardPost from "@components/cardPost";
import { useState } from "react";
import Container from "@components/container";
import Layout from "@components/layout";
import mockPost from "../utils/posts.json";
import Head from "next/head";

export default function Home() {
  const [posts, setPosts] = useState(mockPost);

  return (
    <Layout>
      <Container>
        <Head>
          <title>Home</title>
        </Head>
        <div className="container mx-auto ">
          <FeaturedPost />
          <div className="flex -mx-4 mt-6 flex-wrap">
            {posts.map((post) => (
              <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
//menit 2:21:33
