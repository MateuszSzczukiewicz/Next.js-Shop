import { CheckCheck } from "lucide-react";
import { type ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

export const ProductListItemDescription = ({
  product: { name, price, description },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="px-6">
      <h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">
        {name}
      </h1>
      <div className="mt-4 flex items-center">
        <div className="font-base small-caps text-lg text-slate-800">
          {formatMoney(price / 100)}
        </div>
      </div>
      <div className="mt-4 space-y-6">
        <p className="font-sans text-base text-slate-500">{description}</p>
      </div>
      <div className="mt-6 flex items-center">
        <CheckCheck className="h-5 w-5 flex-shrink-0 text-blue-500" />
        <p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          data-testid="add-to-cart-button"
          className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
