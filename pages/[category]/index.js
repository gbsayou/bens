import React, { PureComponent } from "react";
import { getCategory } from "@/store/actions/categoryActions";
import Head from "next/head";
import Layout from "@/containers/Layout";
import CategoryContainer from "@/containers/Category";

class Category extends PureComponent {
  static async getInitialProps({ ctx }) {
    const {
      store: { dispatch },
      query: { category },
    } = ctx;
    const props = await dispatch(getCategory(category));
    return { category: props };
  }

  render() {
    const { category } = this.props;
    return (
      <Layout>
        <Head>
          <title>{category.name}</title>
        </Head>
        <CategoryContainer />
      </Layout>
    );
  }
}

export default Category;
