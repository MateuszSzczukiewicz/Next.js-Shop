import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/ui/types";

export const ProductsList = ({ products }: { products: ProductItemType[] }) => {
  return (
    <ul className="grid grid-cols-1  gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
