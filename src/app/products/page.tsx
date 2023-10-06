import { type Metadata } from "next";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/app/api/products";

export const metadata: Metadata = {
  title: "Products list",
};

export default async function ProductPage() {
  const products = await getProductsList();
  return <ProductsList products={products} data-testid="products-list" />;
}
