import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'

const getI18nPaths = (slugs = []) =>
  slugs.length > 0 ?
    i18nextConfig.i18n.locales.flatMap((lng) =>
      slugs.map((slug) => ({
        params: {
          locale: lng,
          slug,
        },
      }))
    )
    :
    i18nextConfig.i18n.locales.map((lng) => ({
      params: {
        locale: lng
      }
    }))

export const makeStaticPaths = (slugs) => {
  return {
    fallback: false,
    paths: getI18nPaths(slugs)
  }
}

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale
  return {...(await serverSideTranslations(locale, ns))}
}

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx) {
    return {
      props: {...await getI18nProps(ctx, ns)}
    }
  }
}