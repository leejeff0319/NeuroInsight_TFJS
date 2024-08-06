import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import TensorFlowJS from "../../../components/TensorFlowJS";

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
            <h2 className="section-header-text">Developmental Process</h2>
            <p className="mt-4 profile-about">
              We chose to start with TensorFlow first because it&apos;s the machine learning library that we are both most familiar with.
              We decided to use transfer learning of pretrained models after consulting Dr. Roberto Bonelli &#40;Lowy Medical&#41; about it. It turned out to be a great choice because
              we saved a lot of time and resources while training our models using Google Colab and Kaggle. <br /><br />
            </p>
            <h2 className="section-header-text">Why EfficientNet?</h2>
            <p className="mt-4 profile-about">
              Initially, we were thinking about using the newly updated ResNet50, but ultimately
              decided to use the EfficientNet model because it was lighter weight and much faster while training. Since we were only starting with a prototype, we judged that it would be sufficent for now.
              You can check out our source code in the Code section! But here are the results to our model.<br /><br />
            </p>
            <h2 className="section-header-text">Training Layers</h2>
            <p className="mt-4 profile-about">
              ReLU, or the rectified linear unit function, is the best when it comes to computer vision through convolutional neural networks. Not only is it cheaper and faster to compute, it isn&apos;t
              affected by the vanishing gradient problem. Also since the images we are training on are grayscale images, relu function triumphs over sigmoid or tanh functions because it can show
              extremes, black vs. white, more clearly. Leaky ReLU and parametric ReLU functions might also be fun to experiment with as well. But in our scenario, ReLU looked the be the best option. <br /><br />
            </p>
            <div className="flex flex-row justify-center items-center mt-2">
              <Image
                src="/TensorFlowModel/model_saved/1/1_layers.PNG"
                width={700}
                height={750}
                alt="Secondary Image of website"
              />
            </div>
            <p className="mt-4 profile-about">
              Another factor we paid attention to was the filter/kernel sizes of our additional Conv2D layers. While Smaller filter sizes are better for distinguishing in between smaller features like
              circles and rectangles, larger filter sizes are better for distinguishing in between larger features such as whole objects in an image. In our case scenario, I realized that it may be
              more important to use smaller filter sizes while implementing some 5,5 filters to avoid overfitting to the training dataset. Dropout layers were also added to prevent overfitting. 
              As a result, the model was able to avoid overfitting and trained up to 16 epochs, where it stopped because it was seeming minimal to no improvements.
            </p>
            <div className="flex flex-row justify-center items-center mt-2">
              <Image
                src="/TensorFlowModel/model_saved/1/1_epochs.PNG"
                width={300}
                height={750}
                alt="Epoch results of model"
              />
              <Image
                src="/TensorFlowModel/model_saved/1/1_results.PNG"
                width={400}
                height={750}
                alt="Graph results of model"
              />
            </div>
            <h2 className="section-header-text">Results</h2>
            <p className="mt-4 profile-about">
              The results show a very good model fit as there are only 4 test images incorrectly predicted by the model. The metric we should focus here is actually the
              recall metric. Recall measures the ratio of true positive results over the actual positives. This is the most important in our model because as we have mentioned,
              our primary goal is to catch the false negatives during a medical examination. Minizing Type 2 errors &#40;false negatives&#41; in humans is the primary focus of this model,
              so there should be as little image falling to the left side of the diagnonal as possible. Our model does a good job for now because it only has one Neurocytoma image falsely
              labeled as Ganglioglimoma. False postiive rates are less important as a little bit of caution never harmed anyone!
            </p>
            <div className="flex flex-row justify-center items-center mt-2">
              <Image
                src="/CM.PNG"
                width={500}
                height={750}
                alt="Confusion Matrix of model"
              />
              <Image
                src="/Recall_F1.PNG"
                width={400}
                height={350}
                alt="precision, recall, and f1 scores"
              />
            </div>

          </div>
        </div>
      </div>

    </main >
  );
}
