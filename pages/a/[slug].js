import React from "react";
import Layout from "@/containers/Layout";
import ArticleContainer from "@/containers/Article";
import axios from "axios";
import { markdownToHtml } from "@/lib/helpers";
const cmsHost = process.env.cmsHost

export const getStaticPaths = async () => {
  const { data } = await axios.get(`${cmsHost}/posts/summary`);
  return {
    paths: data.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await axios.get(`${cmsHost}/posts/${slug}`);
  const content = await markdownToHtml(data?.content || "");
  return { props: { article: { ...data, content } } };
};

const Article = ({ article = {} }) => {
  const metadata = {
    title: article.title,
    description: article.excerpt,
  };
  return (
    <Layout metadata={metadata}>
      <ArticleContainer article={article} />
    </Layout>
  );
};

export default Article;
