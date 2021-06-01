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
    },
    title,
    content
  } = article;

  return (
    <div>
      <HighImage
        src={src.startsWith("/images") ? `${imgHost}${src}` : src}
        title={title}
        alt={alt}
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
