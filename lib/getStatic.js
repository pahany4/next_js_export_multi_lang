import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'

/*export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng
      //slug: "abc"
    }
  }))*/

const slugs = ['a', 'b', 'c'];

const getI18nPaths = () =>
  i18nextConfig.i18n.locales.flatMap((lng) =>
    slugs.map((slug) => ({
      params: {
        locale: lng,
        slug,
      },
    }))
  );

/*export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})*/
export const getStaticPaths = () => {
  console.log(getI18nPaths())
  return {
    fallback: false,
    paths: getI18nPaths()
  }
}

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale
  let props = {
    ...(await serverSideTranslations(locale, ns))
  }
  return props
}

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx) {
    return {
      props: {...await getI18nProps(ctx, ns)}
    }
  }
}