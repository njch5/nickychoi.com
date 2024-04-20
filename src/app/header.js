import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-end space-x-14">
        <Link href={"/"}>
          <Image src="/favicon.ico" width={25} height={25} alt="Croissant" />
        </Link>
        <Link
          href="/about"
          className="hover:underline   
              decoration-pink-500  
              inline-block   
              cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="hover:underline   
              decoration-pink-500  
              inline-block   
              cursor-pointer"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
