import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
  {
    id: "1",
    name: "Kubek",
    category: "Accessories",
    price: 2137,
    coverImage: {
      alt: "",
      src: "/product_1.png",
    },
  },
  {
    id: "2",
    name: "Kubek",
    category: "Accessories",
    price: 2137,
    coverImage: {
      alt: "",
      src: "/product_1.png",
    },
  },
  {
    id: "3",
    name: "Kubek",
    category: "Accessories",
    price: 2137,
    coverImage: {
      alt: "",
      src: "/product_1.png",
    },
  },
  {
    id: "4",
    name: "Kubek",
    category: "Accessories",
    price: 2137,
    coverImage: {
      alt: "",
      src: "/product_1.png",
    },
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
      <ProductList products={products} data-testid="products-list" />
    </section>
  );
}
