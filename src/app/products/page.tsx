import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";

export const metadata: Metadata = {
  title: "Products list",
};

export default async function ProductPage() {
  const { products } = await executeGraphql(ProductsGetListDocument);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
