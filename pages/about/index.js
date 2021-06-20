import Layout from "@/containers/Layout";
import AboutContainer from "@/containers/About";

const About = ({}) => {
  const metadata = {
    title: "BenS | About Us",
  };
  return (
    <Layout metadata={metadata}>
      <AboutContainer />
    </Layout>
  );
};
export default About;
