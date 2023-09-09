import { Suspense } from "react";
import { getProductById } from "@/app/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);
  return (
    <>
      <article className="max-w-xs">
        <ProductCoverImage {...product.coverImage} />
        <ProductListItemDescription product={product} />
      </article>
      <aside>
        <Suspense fallback={"Ładowanie..."}>
          <SuggestedProductsList />
        </Suspense>
      </aside>
    </>
  );
}
