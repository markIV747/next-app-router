import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <div className="flex flex-col">
        <Link href={`/products/1`}>Product 1</Link>
        <Link href={`/products/2`}>Product 2</Link>
        <Link href={`/products/3`}>Product 3</Link>
      </div>
    </>
  );
}
