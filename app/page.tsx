import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      {/* Picture Banner */}
      <div className="flex h-160 w-full flex-col items-center justify-between mb-16">
        img
      </div>

      {/* Brief Description/ Mission Statement */}
      <div className=" flex h-52 w-full flex-col bg-white pt-20">
        <div className="text-xl text-box ml-5 mr-5 mb-5">
          textbox
        </div>
      </div>

      {/* Explanation of Brain Tumor in today's society & Picture */}
      <div className="w-full h-80 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">

        {/* Explanation Text */}
        <div className="col-span-2">
          <h2 className="text-box ml-14 mr-5 mt-14 text-2xl">
            <b>The Elusiveness of Brain Tumor</b>
          </h2>
          <p className="text-box ml-14 mt-3" >
            jkl
          </p>
        </div>
          
        {/* Representative Image */}
        <div className="col-span-2">
          IMAGE
        </div>
      </div>

      {/* The 3 ML Models */}
      <div className="w-full h-60 grid text-center bg-white lg:mb-0 lg:w-full lg:grid-cols-12 lg:text-left">

        {/* TensorFlow Pretrained Model */}
        <div className="col-span-4 p-2">
          IMAGE
        </div>

        {/* CNN Model from scratch */}
        <div className="col-span-4 p-2">
          IMAGE
        </div>

        {/* Last CNN Model */}
        <div className="col-span-4 p-2">
          IMAGE
        </div>
      </div>

    </main>
  );
}
