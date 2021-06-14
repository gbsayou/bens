import { HighImage } from "@/components/HeroImage";
import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import ArticleBody from "./ArticleBody";
const imgHost = process.env.imgHost

const ArticleContainer = ({ article }) => {
  const {
    heroImage: {
      alt,
      src,
      mobileSrc
    },
    title,
    content
  } = article;

  const desktopHeroImage = src.startsWith("/images") ? `${imgHost}${src}` : src
  const mobileHeroImage = mobileSrc.startsWith("/images") ? `${imgHost}${mobileSrc}` : mobileSrc

  return (
    <div>
      <HighImage
        title={title}
        alt={alt}
        desktopImage={desktopHeroImage}
        mobileImage={mobileHeroImage}
      />
      <ContentBody>
        <ContentContainer>
          <ArticleBody content={content}/>
        </ContentContainer>
      </ContentBody>
    </div>
  );
};

export default ArticleContainer;
