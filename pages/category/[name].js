import React from "react";
import Layout from "@/containers/Layout";
import CategoryContainer from "@/containers/Category";
import { getCategoriesSummary, getCategoryDetail } from "@/lib/api";
import {capitalize} from "lodash"

const Category = ({ category }) => {
  const metadata = {
    title: category.name.replace(/-/g, ' ').split(' ').map(capitalize).join(' '),
    description: category.description,
  };
  return (
    <Layout metadata={metadata}>
      <CategoryContainer category={category} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const category = await getCategoryDetail(params.name);
  return { props: { category: category } };
};

export const getStaticPaths = async () => {
  const categories = await getCategoriesSummary();
  return {
    paths: categories.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export default Category;
