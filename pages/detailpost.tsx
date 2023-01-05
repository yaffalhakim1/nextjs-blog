import Container from "@components/container";
import Layout from "@components/layout";
import PostAuthor from "@components/postAuthor";
import PostMetaTitle from "@components/postMetaTitle";
import Head from "next/head";

export default function DetailPost() {
  return (
    <Layout>
      <Head>
        <title>Detail - Yafi</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category="UI Design"
            date=" 6 april 2022 "
            title="Understanding color theory: the color wheel and finding complementary colors"
            center
          />
          <PostAuthor
            authorName="Yaf"
            authorJob="React dev"
            authorImage="/author-1.png"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img src="/detail-image.png" className="w-full rounded-lg" />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also they're their brought seas
            isn't, to day from bearing grass third midst after beginning man
            which you're. Dry, gathering beginning given made them evening.
          </p>
          <p className="mb-4 ">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Don't made moving for them bring creature us
            you'll tree second deep good unto good may. Us yielding. Have. Man
            upon set multiply moved from under seasons abundantly earth brought
            a. They're open moved years saw isn't morning darkness. Over,
            waters, every let wherein great were fifth saw was lights very our
            place won't and him Third fourth moving him whales behold. Beast
            second stars lights great was don't green give subdue his. Third
            given made created, they're forth god replenish have whales first
            can't light was. Herb you'll them beast kind divided. Were beginning
            fly air multiply god Yielding sea don't were forth.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
