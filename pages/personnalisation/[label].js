import Layout from '../../components/layout'
import axios from 'axios'
import Link from 'next/link'
import ErrorPage from "next/dist/pages/_error";

export default function Article({article}) {

    if(Object.keys(article).length === 0){
        console.log(article)
        return <ErrorPage statusCode={404}/>
    }

  return (
    <Layout>
      <h1>{article.label}</h1>

      {/* <hr/>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-evenly',
        flexWrap: 'wrap'
      }}>
      </section> */}
    </Layout>
  )
}

export const getServerSideProps = async context => {

    const { label } = context.query;

    const res = await axios({
        method: "POST",
        url: "http://localhost:1337/graphql",
        data: {
            query: `
                {
                    articles(limit: 1, where: { label: "${label}"}) {
                        label,
                    }
                }
            `
        }
    });  

    return {
        props: {
            article : res.data.data.articles[0] || {}
        }
    }
}