import { getPortfolioCard, getPortfolioCards } from "@/app/_libs/data-services";

export async function generateMetadata({ params }) {
  const { portfolioId } = params;
  const portfolio = await getPortfolioCard(portfolioId);
  return { title: portfolio.title };
}
export async function generateStaticParams() {
  const portfolios = await getPortfolioCards();
  const ids = portfolios.map((portfolio) => ({
    portfolioId: String(portfolio.id),
  }));
  return ids;
}
export default async function Page({ params }) {
  const { portfolioId } = params;
  const portfolio = await getPortfolioCard(portfolioId);
  return <div>{portfolio.title}</div>;
}
