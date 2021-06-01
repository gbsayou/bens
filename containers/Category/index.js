import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import { HighImage as HeroImage } from "@/components/HeroImage";
import FeedCard from "@/components/FeedCard";
import Description from "./Description";
const cmsHost = process.env.cmsHost

const CategoryContainer = ({ category }) => {
  const { name, heroImage, description, posts } = category;
  const heroImageSrc = heroImage?.formats?.medium.url || ''
  const imageSrc = heroImageSrc.startsWith('/uploads')? `${cmsHost}${heroImageSrc}`: heroImageSrc
  return (
    <div>
      <HeroImage src={imageSrc} title={name} />

      <ContentBody>
        <ContentContainer>
          <Description description={description} />
      {posts.map((article) => (
        <FeedCard key={article.title} {...article} />
      ))}
        </ContentContainer>
      </ContentBody>
    </div>
  );
};

export default CategoryContainer
