import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">About Us</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20"/> Home </Link>
      </div>
      
     {/* Body */}
      <div className="grid grid-cols-12 min-h-screen w-full">

        {/* Intro */}
        <div className="col-start-4 col-end-10">
          <h2 className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">About the Team</h2>
          <p className="mt-4 text-sm sm:text-md md:text-md lg:text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus mauris ut porta venenatis. Morbi vitae consectetur magna. Quisque euismod nisl nibh, quis consectetur neque rutrum at. Phasellus cursus erat a felis placerat, a finibus ligula ultricies. Donec egestas, erat vel sagittis porta, nunc quam convallis justo, ac cursus enim nisl eget libero. Cras venenatis, eros vel luctus semper, risus nisi iaculis nisi, vel ullamcorper ligula justo pharetra nulla. Vestibulum mattis maximus cursus. Quisque justo nisl, sagittis a ipsum eu, condimentum aliquam lectus. Nullam eget suscipit justo, quis sagittis arcu. </p>
        </div>

        {/* Sean */}
        <div className="col-start-6 col-end-11 rounded-md m-2" style={{background:"#483D8B"}}>
          {/* Picture */}
          <div className="image-container">
            
          </div>
        </div>

        {/* Jeff */}
        <div className="col-start-3 col-end-8 rounded-md">
          {/* Picture */}
          <div className="image-container">

          </div>
        </div>
        
      </div>

    </main>
  );
}
