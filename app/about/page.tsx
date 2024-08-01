"use server";

import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">About Us</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 min-h-screen ">

        {/* Intro */}
        <div className="col-start-4 col-end-10">
          <h2 className="bg-white pt-2 pr-2 pl-2 rounded-t-md text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">About the Team</h2>
          <p className="bg-white p-2 rounded-b-md text-sm sm:text-md md:text-md lg:text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus mauris ut porta venenatis. Morbi vitae consectetur magna. Quisque euismod nisl nibh, quis consectetur neque rutrum at. Phasellus cursus erat a felis placerat, a finibus ligula ultricies. Donec egestas, erat vel sagittis porta, nunc quam convallis justo, ac cursus enim nisl eget libero. Cras venenatis, eros vel luctus semper, risus nisi iaculis nisi, vel ullamcorper ligula justo pharetra nulla. Vestibulum mattis maximus cursus. Quisque justo nisl, sagittis a ipsum eu, condimentum aliquam lectus. Nullam eget suscipit justo, quis sagittis arcu. </p>


          {/* Profiles */}
          <div className="grid grid-cols-8 gap-2 rounded-md profiles" >

            {/* Jeff */}
            <div className="col-start-1 col-end-5 rounded-md profile-container bg-gray-300">

              {/* Picture */}
              <div className="profile-image rounded-lg bg-gray-400">
                <Image src="/AboutJeff.JPEG" width={250} height={700} alt=""></Image>
              </div>

              {/* Name and Social Media */}
              <h2 className='profile-name xl:text-2xl lg:xl md:lg sm:md rounded-lg'>
                Jeff Lee
              </h2>
              <div className="profile-sns mt-2 rounded-lg  xl:text-md lg:sm md:xs sm:xs ">
                <Link className="flex me-2" target="_blank" style={{color:"#0077B5"}} href="https://www.linkedin.com/in/jeffyoungjaelee/"> <FaLinkedin className="mr-1" size="20"/> LinkedIn/jeffyoungjaelee</Link>
                <Link className="flex ms-2 me-2" target="_blank" href="https://github.com/leejeff0319"><FaGithubSquare className="mr-1" size="20"/>github/leejeff0319</Link>
              </div>

              {/* Description */}
              <div className="profile-description ">
                Hi <Link className="flex ms-2" target="_blank" style={{color:"#40a56b"}} href="https://jeffthescientist.ai"><IoHomeSharp className="mr-1" size="20"/>JeffTheScientist.ai</Link>
              </div>
              
            </div>

            {/* Sean */}
            <div className="col-start-5 col-end-9 rounded-md profile-container bg-red-200">

              {/* Picture */}
              <div className="profile-image rounded-lg bg-blue-200">
                <Image src="/AboutSean.jpg" width={250} height={700} alt=""></Image>
              </div>

              {/* Name and Social Media */}
              <h2 className='profile-name xl:text-2xl lg:xl md:lg sm:md'>
                Sean Lee
              </h2>
              <div className="profile-sns m-2 rounded-lg bg-green-200">
                <Link className="flex me-2" target="_blank" style={{color:"#0077B5"}} href="https://www.linkedin.com/in/seanlee319/"><FaLinkedin className="mr-1" size="20"/>LinkedIn/seanlee319</Link>
                <Link className="flex ms-2" target="_blank" href="https://github.com/seanlee319"><FaGithubSquare className="mr-1" size="20"/>github/seanlee319</Link>
              </div>

              {/* Description */}
              <div className="profile-description bg-yellow-200">
                Hi 
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
