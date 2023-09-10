import { type ReactNode } from "react";

export const generateStaticParams = async () => {
  return [{ category: "t-shirts" }, { category: "boots" }];
};

export function CategoryProductLayout({ children }: { children: ReactNode }) {
  return children;
}
