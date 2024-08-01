

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center" >

      {/* Picture Banner */}
      <div className="flex h-160 w-full flex-col mb-16">
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

      {/* Explanation of Brain Tumor in today's society and Picture */}
      <div className="w-full h-80 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">

        {/* Explanation Text */}
        <div className="col-span-2">
          <h2 className="text-box ml-14 mr-5 mt-14 text-2xl font-semibold">
            The Elusiveness of Brain Tumor
          </h2>
          <p className="text-box ml-14 mt-2" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus mauris ut porta venenatis. Morbi vitae consectetur magna. Quisque euismod nisl nibh, quis consectetur neque rutrum at. Phasellus cursus erat a felis placerat, a finibus ligula ultricies. Donec egestas, erat vel sagittis porta, nunc quam convallis justo, ac cursus enim nisl eget libero. Cras venenatis, eros vel luctus semper, risus nisi iaculis nisi, vel ullamcorper ligula justo pharetra nulla. Vestibulum mattis maximus cursus. Quisque justo nisl, sagittis a ipsum eu, condimentum aliquam lectus. Nullam eget suscipit justo, quis sagittis arcu.
          </p>
          <p className="text-box ml-14 mt-2 mb-2" >
            Phasellus eget erat sed purus placerat blandit ut eu ante. Aliquam ac massa non lacus mattis iaculis nec sed metus. Quisque faucibus, quam sed vestibulum molestie, sapien sem varius leo, non eleifend nibh dolor vitae tortor. Suspendisse nisi orci, elementum ut cursus pretium, bibendum id ex. Quisque blandit ligula at leo bibendum, et laoreet lacus ultrices. Duis pellentesque augue nulla, id congue sapien molestie non. Cras neque urna, malesuada et consequat euismod, gravida sed odio. 
          </p>
        </div>

        {/* Representative Image */}
        <div className="col-span-2">
          <Image className="image-container"
            src="/brain-tumor-300.png"
            width={1300}
            height={260}
            alt="Secondary Image of website"
          />
        </div>

        {/* The 3 ML Models */}
        <div className="col-span-4 h-60 grid text-center bg-white lg:mb-0 lg:w-full lg:grid-cols-12 lg:text-left">

          {/* TensorFlow Pretrained Model */}
          <div className="col-span-4 p-2 image-model">
            <Image
              src="/tf2-3.6125.png"
              width={800}
              height={260}
              alt="Image of Tensorflow"
            />
            <div className="overlay">
              <Link href="/approach/TensorFlow" className="model-text">TensorFlow Model</Link>
              <Link href="/code/TensorFlow" className="model-text">Model Code</Link>
            </div>
          </div>

          {/* PyTorch Model from scratch */}
          <div className="col-span-4 p-2 image-model">
            <Image className="image-container"
              src="/cnn.png"
              width={800}
              height={260}
              alt="Image of CNN"
            />
            <div className="overlay">
              <Link href="/approach/PyTorch" className="model-text">PyTorch Model</Link>
              <Link href="/code/PyTorch" className="model-text">Model Code</Link>
            </div>
          </div>

          {/* FastAI */}
          <div className="col-span-4 p-2 image-model">
            <Image className="image-container"
              src="/fastai.png"
              width={800}
              height={260}
              alt="Image of FastAI"
            />
            <div className="overlay">
              <Link href="/approach/FastAI" className="model-text">FastAI Model</Link>
              <Link href="/code/FastAI" className="model-text">Model Code</Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
