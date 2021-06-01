import { HighImage } from "@/components/HeroImage";
import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import ArticleBody from "./ArticleBody";
const cmsHost = process.env.cmsHost

const ArticleContainer = ({ article }) => {
  const {
    coverImage: {
      alternativeText,
      formats: {
        medium: { url: heroImage },
      },
    },
    title,
    content
  } = article;

  return (
    <div>
      <HighImage
        src={heroImage.startsWith("/") ? `${cmsHost}${heroImage}` : heroImage}
        title={title}
        alt={alternativeText}
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
