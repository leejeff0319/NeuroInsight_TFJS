h2>Mission Statement
Hello! We are twin brothers led by passion and curiosity for data science and machine learning. We are both deeply intrigued by the possibilities of AI and machine learning, and we thought that it would be a great idea to work on a project together. We came up with an idea to build a machine learning model that is interactive and also useful. After some thinking, we both decided that we should come up with ML models that can detect brain tumors in MRI scans as an effort to minimize misdiagnosis. <br /><br />
             Brain tumor and its misdiagnosis is unfortunately an issue that has deeply affected our personal lives. Upon research, we discovered that one of the reasons why brain tumors are so dangerous is because of their generic symptoms and mysterious etiologies. These characteristics cause it to be difficult for patients and physicians to pinpoint and diagnose brain tumors until it has already progressed. In fact, it has been studied that physicians missed
            an opportunity to diagnose head and neck cancer on an earlier imaging exam in about 4% of cases.  <br /><br />
             With our effort at creating machine learning models to detect brain tumors at earlier stages, we hope to someday save the tears and heartache that misdiagnosis can bring to families. We believe that with the power of AI, we can make a significant impact in the field of medical diagnostics. Our model leverages advanced neural networks, particularly convolutional neural networks (CNNs), to analyze MRI scans and identify potential brain tumors with high accuracy. <br /><br />

h2>Development
We chose to start with TensorFlow first because it's the machine learning library that we are both most familiar with. 
              We decided to use transfer learning of pretrained models after consulting Dr. Roberto Bonelli &#40;Lowy Medical&#41; about it. It turned out to be a great choice because
              we saved a lot of time and resources while training our models using Google Colab and Kaggle. <br/><br/>
              Initially, we were thinking about using the newly updated ResNet50, but ultimately
              decided to use the EfficientNet model because it was lighter weight and much faster while training. Since we were only starting with a prototype, we judged that it would be sufficent for now.
              You can check out our source code in the "Code" section! But here are the results to our model.<br/><br/>

h2>Results
<Image className="image-container"
            src="/brain-tumor-300.png"
            width={1300}
            height={260}
            alt="Secondary Image of website"
          />

h>2Features 
<Image src="/overlay_example_resized.png" width={800} height={1200} alt="example of the overlay" ></Image>
<Image src="/Prediction_tensorboard.png" width={800} height={1200} alt="example of the overlay" ></Image>