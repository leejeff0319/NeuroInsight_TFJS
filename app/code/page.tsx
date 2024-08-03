import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { SiTensorflow } from 'react-icons/si';
import { TbHandClick } from "react-icons/tb";
import { BiSolidBrain } from "react-icons/bi";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Our Code</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="min-h-screen w-full">

        {/* Intro */}
        <div className="grid grid-cols-12">
          <div className="w-full col-start-4 col-end-10">
            <h2 className="bg-white pt-2 pr-2 pl-2 rounded-t-md text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">Source Codes</h2>
            <p className="bg-white p-2 text-sm sm:text-md md:text-md lg:text-lg"> This section contains the source codes we used to train the models.
              We decided to omit functions from the page as it would be too verbose and irrelevant to understanding the overall training process. However, if you wish to
              take a look at the source code for the functions we used, please feel free to hover over each of them. This will bring up the source code of the function and
              call back functions if you wish to take a look into them as well.</p>
            <div className="bg-white flex justify-center pb-2 rounded-b-md " >
              <Image src="/overlay_example.png" width={800} height={1200} alt="example of the overlay" ></Image>
            </div>
          </div>

          {/* Column 1 */}
          <div className=" col-start-4 col-end-7 mr-2">

            {/* TensorFlow */}
            <div className="w-full col-start-4 col-end-7">
              <div className="bg-white pt-2 pr-2 pl-2 mt-4 rounded-t-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-2xl font-semibold flex flex-col">
                <h2>TF CNN Model Code</h2>
              </div>
              <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                <Link
                  href="/code/TensorFlow"
                  className="card">
                  <div className='card-content'>
                    <span><TbHandClick size={25} /></span>
                    <div className="card-image">
                      <i className="text-pink-500"> <BiSolidBrain /></i>
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <i> <SiTensorflow /></i>
                        <div className="card-info-title" >
                          <h3>TensorFlow- EfficientNetV2B3</h3>
                          <h4>A deep learning model trained via transfer learning with a pretrained model. The EfficientNetV2B3 model was transferred and 
                            trained over 20 epochs and through several additional convolutional neural network layers on 500+ images of brain MRI.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className=" col-start-7 col-end-10">

            {/* TensorFlow */}
            <div className=" col-start-4 col-end-7 ml-2">
              <div className="bg-white pt-2 pr-2 pl-2 mt-4 rounded-t-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-2xl font-semibold flex flex-col">
                <h2>PyTorch CNN Model Code</h2>
              </div>
              <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                <Link href="/code/TensorFlow">

                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>


    </main >
  );
}
