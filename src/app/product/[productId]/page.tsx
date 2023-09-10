import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/app/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

// export const generateStaticParams = async () => {
//   const products = await getProductsList();
//   return products.map((product) => ({
//     productId: product.id,
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = await getProductById(params.productId);
  return {
    title: `${product.name} - Sklep internetowy`,
    description: "Opis produktu",
    openGraph: {
      title: `${product.name} - Sklep internetowy`,
      description: "Opis produktu",
      images: [product.coverImage.src],
    },
  };
};

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
