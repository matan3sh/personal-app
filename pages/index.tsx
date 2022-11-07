import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { BlogList } from "../components/blogs";
import { PortfolioList } from "../components/portfolios";
import { BaseLayout } from "../components/layouts";
import { getBlogFileNames, getBlog } from "../lib/md";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link href="/blogs" className="text-sm ml-1 text-indigo-600">
          (See All)
        </Link>
      </h2>
      <BlogList />
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link href="/portfolios" className="text-sm ml-1 text-indigo-600">
          (See All)
        </Link>
      </h2>
      <PortfolioList />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blogFileNames = getBlogFileNames();

  blogFileNames.forEach((blogFileName) => {
    const blogContent = getBlog(blogFileName);
  });

  return {
    props: {},
  };
};

export default Home;
