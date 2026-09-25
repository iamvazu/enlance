import Image from "next/image";
import Link from "next/link";

export function Logo({ white = false, className = "" }: { white?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Enlace Polymers — home" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={white ? "/images/enlace-logo-white.png" : "/images/enlace-logo.png"}
        alt="Enlace Polymers Private Limited"
        width={710}
        height={175}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
