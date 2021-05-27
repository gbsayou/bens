import { connect } from "react-redux";
import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import { ShortImage as HeroImage } from "@/components/HeroImage";
import ArticleList from "@/components/ArticleList";
import Description from "./Description";

const TravelContainer = ({ category }) => {
  const { name, heroImage, description, features } = category;
  return (
    <div>
      <HeroImage src={heroImage} title={name} />

      <ContentBody>
        <ContentContainer>
          <Description description={description} />
          {features.map((feature) => (
            <ArticleList key={feature.name} {...feature} />
          ))}
        </ContentContainer>
      </ContentBody>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category.category,
});

export default connect(mapStateToProps, null)(TravelContainer);
