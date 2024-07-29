import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Our Approach</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20"/> Home </Link>
      </div>
      
      {/* Body */}
      <div>

      </div>
      
    </main>
  );
}
