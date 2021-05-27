import Head from "next/head";
import Layout from "@/containers/Layout";
import ListContainer from "@/containers/List";

const List = ({ list }) => {
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
