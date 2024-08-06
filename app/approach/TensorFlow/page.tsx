import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import TensorFlowJS from '../../../components/TensorFlowJS';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between" style={{ background: "#e1e5e6" }}>

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Our Approach: TensorFlow</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 min-h-screen w-screen">
        <div className="col-start-4 col-end-10">

          {/* Interactive Model */}
          <TensorFlowJS />


          {/* Describe Model */}
          <div className="mt-8 bg-white p-4 rounded-md">
            <h2 className="header-text">Developmental Process</h2>
            <p className="mt-4 profile-about">
              We chose to start with TensorFlow first because it's the machine learning library that we are both most familiar with. 
              We decided to use transfer learning of pretrained models after consulting Dr. Roberto Bonelli &#40;Lowy Medical&#41; about it. It turned out to be a great choice because
              we saved a lot of time and resources while training our models using Google Colab and Kaggle. Initially, we were thinking about using the newly updated ResNet50, but ultimately
              decided to use the EfficientNet model because it was lighter weight and much faster while training. Since we were only starting with a prototype, we judged that it would be sufficent for now.
              
               
            </p>
          </div>
        </div>
      </div>

    </main >
  );
}
