import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const locales: string[] = ['en', 'pt_br'];

export async function generateMetadata({ params: { locales } }: { params: { locales: string[] } }) {
  const t = await getTranslations({ locales, namespace: "Metadata" });
  return {
    title: t("title"),
  };
}

export default function Index() {
  const t = useTranslations();

  return <h1>{t("hello")}</h1>;
}
