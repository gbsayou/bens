import Head from "next/head";
const Meta = ({ metadata }) => {
  const tagsToRender = [];
  const { title = "BenS", description = "Visit Ben's channel for guides" } = metadata;

  tagsToRender.push(<title key="title">{title}</title>);
  tagsToRender.push(
    <meta key="description" name="description" content={description} />
  );

  tagsToRender.push(<meta key="keywords" name="keywords" content='BensChanel.com - Food, Drink and Travel Destinations'/>)

  tagsToRender.push([
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=block' />,
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=block' />,
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=block' />,
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=block' />,
    <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700&display=block' />,
  ])
  return <Head>{tagsToRender}</Head>;
};

export default Meta
