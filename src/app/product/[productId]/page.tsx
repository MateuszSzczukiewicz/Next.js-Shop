export default function SingleProductPage({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] };
}) {
  const referral = searchParams.referral.toString();
  return (
    <div>
      <h1>Product {params.productId}</h1>
      <p>Referral: {referral}</p>
    </div>
  );
}
