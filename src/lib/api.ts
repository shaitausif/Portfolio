import { Portfolio } from "./types";

export async function getPortfolio(): Promise<Portfolio> {
  console.log("Backend URL",process.env.NEXT_PUBLIC_ADMIN_API_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API_URL}/src/api/portfolio/${process.env.PORTFOLIO_USER_ID}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch portfolio");
  const json = await res.json();
  return json.data;
}
