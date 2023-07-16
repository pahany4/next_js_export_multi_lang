import {getStaticPaths, makeStaticProps,} from '../../../lib/getStatic'

export default function Solution() {
  return (
    <>
      <main>
        slug
      </main>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      ...makeStaticProps(['common', 'footer'])
    }
  }
}

export { getStaticPaths }
/*export async function getStaticPaths() {
  const paths = await getSolutionsPath();
  return {
    paths,
    fallback: false,
  };
}*/
