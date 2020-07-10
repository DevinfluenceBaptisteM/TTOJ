import Layout from '../../components/layout'
import axios from 'axios'
import Link from 'next/link'
import ErrorPage from "next/dist/pages/_error";
import DoudounePers from '../../components/doudounePers/doudounePers'
import styles from "../../components/layout.module.scss";


export default function Article({article}) {

    if(Object.keys(article).length === 0){
        return <ErrorPage statusCode={404}/>
    }

  return (
    <Layout>

        <div>
      {/* <h1 className={styles.nameProduct}>{article.label}</h1> */}
        <DoudounePers item={article}/>
      </div>
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
                    articles(limit: 1, where: { slug: "${label}"}) {
                        label,
                        slug,
                        picture {
                            url
                        },
                        price
                        color,
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