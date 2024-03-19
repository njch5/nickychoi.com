import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center space-x-20">
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
    </div>
  );
}
