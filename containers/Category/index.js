import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import { HighImage as HeroImage } from "@/components/HeroImage";
import FeedCard from "@/components/FeedCard";
import Description from "./Description";
const imgHost = process.env.imgHost;

const CategoryContainer = ({ category }) => {
  const {
    name,
    heroImage: { src, mobileSrc, alt },
    description,
    posts,
  } = category;
  const desktopImage = src.startsWith("/images") ? `${imgHost}${src}` : src;
  const mobileImage = mobileSrc.startsWith("/images") ? `${imgHost}${mobileSrc}` : mobileSrc;
  
  return (
    <div>
      <HeroImage desktopImage={desktopImage} mobileImage={mobileImage} title={name.replace(/-/g, ' ')} alt={alt} />

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

export default CategoryContainer;
