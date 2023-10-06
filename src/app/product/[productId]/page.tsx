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
    <div className="flex flex-grow flex-col">
      <section className="mx-auto grid max-w-7xl p-8">
        <article>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProductCoverImage {...product.coverImage} />
            <ProductListItemDescription product={product} />
          </div>
        </article>
        <aside data-testid="related-products">
          <div className="py-16">
            <h2 className="py-8 text-xl font-semibold leading-7">
              Suggested products
            </h2>
            <Suspense fallback={"Ładowanie..."}>
              <SuggestedProductsList />
            </Suspense>
          </div>
        </aside>
      </section>
    </div>
  );
}
