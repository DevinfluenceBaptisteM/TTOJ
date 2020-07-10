import Layout from "../components/layout";
import ItemPreview from "../components/itemPreview/itemPreview";
import axios from "axios";
import { useState } from "react";
import DoudounePers from "../components/doudounePers/doudounePers";
export default function Home({ articles }) {
  return (
    <Layout>

      <section
        style={{
          display: "flex",
          alignItems: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {articles.map((article) => {
          return <ItemPreview item={article} />;
        })}
      </section>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios({
    method: "POST",
    url: "http://localhost:1337/graphql",
    data: {
      query: `
          {
            articles {
              id,
              label,
              color,
              price,
              slug,
              picture {
                url 
              }
            }
          }
          
          `,
    },
  });

  return {
    props: {
      articles: res.data.data.articles,
    },
  };
};
