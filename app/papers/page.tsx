import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Papers</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="min-h-screen w-full">
        <div className="grid grid-cols-12">
          <div className="w-full col-start-4 col-end-10">

            {/* Column 1 */}
            <div className=" col-start-4 col-end-7 mr-2">

              {/* Paper 1*/}
              <div className="w-full col-start-4 col-end-7">
                <div className="bg-white pt-2 pr-2 pl-2 mt-4 rounded-t-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-2xl font-semibold flex flex-col">
                  <h2>Coming Soon!</h2>
                </div>
                <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                  <Link
                    href="/approach/TensorFlow"
                    className="card">
                    <div className='card-content'>
                      <span> </span>
                      <div className="card-image">
                        <i className="text-pink-500"> </i>
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <i></i>
                          <div className="card-info-title" >
                            <h3>Under Preparataion</h3>
                            <h4>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Paper 2*/}
            <div className=" col-start-7 col-end-10">

              {/* TensorFlow */}
              <div className=" col-start-4 col-end-7 ml-2">
                <div className="bg-white pt-2 pr-2 pl-2 mt-4 rounded-t-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-2xl font-semibold flex flex-col">
                  <h2>Coming Soon!</h2>
                </div>
                <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                <Link
                    href="/approach/TensorFlow"
                    className="card">
                    <div className='card-content'>
                      <span> </span>
                      <div className="card-image">
                        <i className="text-pink-500"> </i>
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <i></i>
                          <div className="card-info-title" >
                            <h3>Under Preparataion</h3>
                            <h4>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
