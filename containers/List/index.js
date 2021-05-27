import ContentBody from "@/components/ContentBody";
import ContentContainer from "@/components/ContentContainer";
import { ShortImage as HeroImage } from "@/components/HeroImage";
import FeedCard from "./FeedCard";

const ListContainer = ({ list }) => {
  return (
    <div>
      <HeroImage src="/images/yellowstone.png" title={list.name} />
      <ContentBody>
        <ContentContainer>
          <div>
            {list.articles.map(article =>(
              <FeedCard key={article.title} {...article} />
            ))}
          </div>
        </ContentContainer>
      </ContentBody>
    </div>
  );
};

ListContainer.defaultProps = {
  list:{
    name:'All articles about wine',
    articles: [
      {
        link:'/a/qingjiu',
        title:'清酒',
        image:'/images/qingjiu.png'
      },
      {
        link:'/a/qingjiu',
        title:'白酒',
        image:'/images/qingjiu.png'
      },
      {
        link:'/a/qingjiu',
        title:'威士忌',
        image:'/images/qingjiu.png'
      },
      {
        link:'/a/qingjiu',
        title:'米酒',
        image:'/images/qingjiu.png'
      }
    ]
  }
}
export default ListContainer;
