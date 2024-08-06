

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

      {/* Explanation of Brain Tumor in todays society and Picture */}
      <div className="w-full h-80 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">

        {/* Explanation Text */}
        <div className="col-span-2">
          <h2 className="text-box ml-14 mr-5 mt-14 text-2xl font-semibold">
            The Elusiveness of Brain Tumor
          </h2>
          <p className="text-box ml-14 mt-2 mr-2" >
            Brain tumor is the sixth most common malignancy worldwide, in which about 450,000 individuals are konwn to die from each year. Physicians are known to have missed
            an opportunity to diagnose head and neck cancer on an earlier imaging exam in about 4% of cases.
            In about 70% of such misses, cancer was evident on prior CT or MRI and the physician overlooked it, while the other 30% were the result of misinterpretation.
            {/* Canadian Association of Radiologists Journal. https://radiologybusiness.com/topics/care-delivery/healthcare-quality/radiologist-missed-head-and-neck-cancer-imaging */}
          </p>
          <p className="text-box ml-14 mt-2 mb-2 mr-2" >
            An early detection is crucial to improving outcomes. It is possible when patients often undergo head and neck imaging for various nonspecific symptoms, 
            and present opportunity for intervention. Maybe with the help of AI, the number of misdiagnosis could go down even lower.
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
