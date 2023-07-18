import {makeStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {getContent} from "../../../utils/getContent";
import {getSolutionsPath} from "../../../utils/getSolutionsPath";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

export default function Solution({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {data.title}
        </h1>
      </main>
    </div>
  );
}
export async function getStaticProps(ctx) {

  const {data} = await getContent({path_file: `/content/standard-solutions/${ctx.params.locale}/${ctx.params.slug}/index.mdx`});

  return {
    props: {
      ...makeStaticProps(['common', 'footer']),
      data
    }
  }
}

//export { getStaticPaths, getStaticProps }
//export { getStaticPaths } = makeStaticPaths

export async function getStaticPaths() {
  const slugs = await getSolutionsPath();
  //const slugs = ["a", "b", "c"]
  return {
    ...makeStaticPaths(slugs),
  };
}
