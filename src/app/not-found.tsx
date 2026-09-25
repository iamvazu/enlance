import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="h-section mt-3">This page has bonded elsewhere.</h1>
      <p className="lead mx-auto mt-4 max-w-xl">The page you're looking for doesn't exist. Try our products, the learning center, or talk to our team.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/products" className="btn-primary">View products</Link>
        <Link href="/learning-center" className="btn-ghost">Learning center</Link>
      </div>
    </section>
  );
}
