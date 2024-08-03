import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import ImageUpload from '../../../components/ImageUpload';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{background:"#e1e5e6"}}>

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Our Approach: TensorFlow</h2> 
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20"/> Home </Link>
      </div>
      
      {/* Body */}
      <div className="grid grid-cols-12 min-h-screen ">
        <div className="col-start-4 col-end-10">
          <ImageUpload />
          
        </div>
      </div>
      
    </main>
  );
}
