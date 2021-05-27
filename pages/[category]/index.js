import React from "react";
import Head from "next/head";
import Layout from "@/containers/Layout";
import CategoryContainer from "@/containers/Category";
const data = {
  travel: {
    name: "Best in travel",
    heroImage: "images/fuji-mountain.png",
    description: `旅行是一件快乐的事情，但同时，这也是一件烦恼的事情，需要考虑方方面面。
    我们在多个方面为您提供建议：去哪里，当地的特色，注意事项，旅途中如何保证安全。`,
    features: [
      {
        name: "Travel Destinations",
        morePath: "/list/travel-destinations",
        list: [
          {
            name: "Where to go in America",
            link: "/a/where-to-go-in-america",
            cover: "/images/yellowstone.png",
          },
          {
            name: "6 most beautiful places in New Zealand",
            link: "6-most-beautiful-places-in-new-zealand",
            cover: "/images/yellowstone.png",
          },
          {
            name: "6 most beautiful places in New Zealand",
            link: "6-most-beautiful-places-in-new-zealand",
            cover: "/images/yellowstone.png",
          },
        ],
      },
      {
        name: "Travel Tips",
        morePath: "/travel/tips",
        list: [
          {
            name: "What to take",
            link: "/a/what-to-take",
            cover: "/images/yellowstone.png",
          },
          {
            name: "How to choose vehicles",
            link: "/a/how-to-choose-vehicles",
            cover: "/images/yellowstone.png",
          },
        ],
      },
    ],
  },
  ["food-and-drink"]: {
    name: "Food And Drink",
    heroImage: "/images/lajiao.png",
    description:
      "我们将为您介绍世界各地的美食美酒，比如印度的咖喱，中国的辣椒，美国的taco，英国的奶酪，俄罗斯的伏特加，苏格兰的威士忌，日本的清酒......",
    features: [
      {
        name: "Food around the world",
        morePath: "/list/food-on-world",
        list: [
          {
            name: "Chinese LaJiao",
            link: "/a/chinese-lajiao",
            cover: "/images/lajiao.png",
          },
          {
            name: "Indian curry",
            link: "/a/indian-curry",
            cover: "/images/curry.png",
          },
        ],
      },
      {
        name: "Best Wine in each country",
        morePath: "/list/wine",
        list: [
          {
            name: "俄罗斯的伏特加",
            link: "/a/russian-vodka",
            cover: "/images/futejia.png",
          },
          {
            name: "日本的清酒",
            link: "/a/japanese-suyuki",
            cover: "/images/qingjiu.png",
          },
        ],
      },
    ],
  },
};

const Category = ({category}) => {
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
      </Head>
      <CategoryContainer category={category}/>
    </Layout>
  );
}

export const getStaticProps = async({ params})=> {
  return { props: {category: data[params.category]} };
}

export const getStaticPaths = async()=>{
  const categories = Object.keys(data);
  return {
    paths: categories.map(category=>({params:{category}})),
    fallback: false
  }
}

export default Category
