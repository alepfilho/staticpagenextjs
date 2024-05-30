import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const locales: string[] = ['en', 'pt_br'];

export async function generateMetadata({ params: { locales } }: { params: { locales: string[] } }) {
  const t = await getTranslations({ locales, namespace: "Metadata" });
  return {
    title: t("title"),
  };
}

export default function Index({params: {locale}}: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return <h1>{t("hello")}</h1>;
}
