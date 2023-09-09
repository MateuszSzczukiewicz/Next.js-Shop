import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/app/api/products";

export const SuggestedProductsList = async () => {
  const products = await getProductsList();
  return <ProductsList products={products} />;
};
