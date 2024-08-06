import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { SiTensorflow,
         SiPytorch,} from 'react-icons/si';
import { TbHandClick } from "react-icons/tb";
import { BiSolidBrain } from "react-icons/bi";
import { FaFire } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Our Approach</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="min-h-screen w-full">

        {/* Intro */}
        <div className="grid grid-cols-12">
          <div className="w-full col-start-4 col-end-10">
            <h2 className="bg-white pt-2 pr-2 pl-2 rounded-t-md text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">Approach</h2>
            <p className="bg-white p-2  profile-about"> This section contains our approach to the problem of brain tumor. Brain tumors will always certainly
            show up on an MRI scan, but are missed somtimes due to overlooking or misinterpretation. So we built machine learning models trained to detect 15
            brain tumor classes in their earliest and latest stages. Machines cannot have biases and will look at each image without prejudice, hopefully helping to diagnose
            brain tumors in patients who may have missed it during their medical examinations.<br /><br />
             
             We must emphasize again that these models should merely be used as a point of 
            reference and never as a tool of diagnosis! Please refer to a physician if these results show up as positive. We will NOT be saving your images on any servers and 
            all the analysis will be client-sided, meaning that everything will be run on your personal machine. </p>
          </div>

          {/* Column 1 */}
          <div className=" col-start-4 col-end-7 mr-2">

            {/* TensorFlow */}
            <div className="w-full col-start-4 col-end-7">
              <div className="bg-white pt-2 pr-2 pl-2 mt-4 rounded-t-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-2xl font-semibold flex flex-col">
                <h2>TF CNN Model</h2>
              </div>
              <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                <Link
                  href="/approach/TensorFlow"
                  className="card">
                  <div className='card-content'>
                    <span><TbHandClick size={25}/> Click to try our model!</span>
                    <div className="card-image">
                      <i className="text-pink-500"> <BiSolidBrain /></i>
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <i> <SiTensorflow /></i>
                        <div className="card-info-title" >
                          <h3>TensorFlow- EfficientNetV2B3</h3>
                          <h4>Deep learning model trained using a pretrained model. The EfficientNetV2B3 model was transferred and
                            trained over 20 epochs and through additional network layers on 500+ images of brain MRI.
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
                <h2>PyTorch CNN Model</h2>
                </div>
              <div className="bg-white pr-2 pl-2 pb-2 rounded-b-md">
                <Link
                  href="/approach/TensorFlow"
                  className="card">
                  <div className='card-content'>
                    <span><TbHandClick size={25}/> Click to try our model!</span>
                    <div className="card-image">
                      <i className="text-red-800"> <FaFire /></i>
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <i> <SiPytorch /></i>
                        <div className="card-info-title" >
                          <h3>Coming Soon!</h3>
                          <h4>                          </h4>
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


    </main >
  );
}
