import Head from "next/head";
import Layout from "@/containers/Layout";
import ListContainer from "@/containers/List";

export const getStaticProps = async () => {
  return { props: {} };
};

export const getStaticPaths = async () => {
  const list = ["travel-destinations", "food-on-world"];
  return {
    paths: list.map((listName) => ({ params: { listName } })),
    fallback: false,
  };
};

const List = ({ list = {} }) => {
  return (
    <Layout>
      <Head>
        <title>list</title>
      </Head>
      <ListContainer {...list} />
    </Layout>
  );
};
export default List;
