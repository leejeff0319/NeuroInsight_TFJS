import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      {/* Picture Banner */}
      <div className="flex h-160 w-full flex-col items-center justify-between mb-16">
        <Image className="image-container"
          src="/550.png" 
          width={2600}
          height={800}
          alt="Main Image of website"
        />
      </div>

      {/* Brief Description/ Mission Statement */}
      <div className=" flex h-52 w-full flex-col bg-white pt-20">
        <p className="text-xl text-box ml-5 mr-5 mb-5">
          We are data scientists propelled by passion and personal experience.  Brain Tumors often present with unknown etiology and generic symptoms, 
          making them difficult to detect until it is too late. 
          NeuroQ is our personal project, developed with the hope of preventing more cases of undetected brain tumors. 
          This model is only for reference, and should NOT be used for diagnosis.
        </p>
      </div>

      {/* Explanation of Brain Tumor in today's society & Picture */}
      <div className="w-full h-80 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">

        {/* Explanation Text */}
        <div className="col-span-2">
          <h2 className="text-box ml-14 mr-5 mt-14 text-2xl">
            <b>The Elusiveness of Brain Tumor</b>
          </h2>
          <p className="text-box ml-14 mt-3" >
            Statistics
          </p>
        </div>
          
        {/* Representative Image */}
        <div className="col-span-2">
          <Image className="image-container"
            src="/brain-tumor-300.png" 
            width={1300}
            height={260}
            alt="Main Image of website"
            />
        </div>
      </div>

      {/* The 3 ML Models */}
      <div className="w-full h-60 grid text-center bg-white lg:mb-0 lg:w-full lg:grid-cols-12 lg:text-left">

        {/* TensorFlow Pretrained Model */}
        <div className="col-span-4 p-2 ">
          <Link href="/">
            <Image className="image-container"
              src="/tf2-3.6125.png" 
              width={800}
              height={260}
              alt="Main Image of website"
            />
          </Link>
        </div>

        {/* CNN Model from scratch */}
        <div className="col-span-4 p-2">
        <Link href="/">
            <Image className="image-container"
              src="/cnn.png" 
              width={800}
              height={260}
              alt="Main Image of website"
            />
          </Link>
        </div>

        {/* Last CNN Model */}
        <div className="col-span-4 p-2">
        <Link href="/">
            <Image className="image-container"
              src="/fastai.png" 
              width={800}
              height={260}
              alt="Main Image of website"
            />
          </Link>
        </div>
      </div>

    </main>
  );
}
