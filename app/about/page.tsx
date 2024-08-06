import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">About Us</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 min-h-screen ">

        {/* Intro */}
        <div className="col-start-4 col-end-10">
          <h2 className="bg-white pt-2 pr-2 pl-2 rounded-t-md text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">About the Team</h2>
          <p className="bg-white p-2 rounded-b-md profile-about pb-2">
             We are twin brothers who are led by passion and curiosity for data science and machine learning. We were both deeply intrigued by the possibilities of AI and machine learning, and we thought that it would be a great idea to work on a project together. We came up with an idea to build a machine learning model that is interactive and also useful. After some thinking, we both decided that we should come up with ML models that can detect brain tumors in MRI scans as an effort to minimize misdiagnosis. <br /><br />
             Brain tumor and its misdiagnosis is unfortunately an issue that has deeply affected our personal lives. Upon research, we discovered that one of the reasons why brain tumors are so dangerous is because of their generic symptoms and mysterious etiologies. These characteristics cause it to be difficult for patients and physicians to pinpoint and diagnose brain tumors until it has already progressed. <br /><br />
             With our effort at creating machine learning models to detect brain tumors at earlier stages, we hope to someday save the tears and heartache that misdiagnosis can bring to families. We believe that with the power of AI, we can make a significant impact in the field of medical diagnostics. Our model leverages advanced neural networks, particularly convolutional neural networks (CNNs), to analyze MRI scans and identify potential brain tumors with high accuracy. <br /><br />
            {/*  Our journey was not without challenges. From collecting and preprocessing the data to training the model and fine-tuning its parameters, every step required meticulous attention to detail. We faced numerous obstacles, but our shared passion and determination kept us going. We collaborated closely, leveraging each other's strengths and supporting each other through the tough times. <br /><br /> */}
             The results of our work have been promising. Our model has shown high accuracy in detecting brain tumors in MRI scans, and we continue to refine it to improve its performance further. We have also made our model interactive, allowing users to input their MRI scans and receive a diagnosis. This feature makes our tool accessible to a broader audience and empowers patients and physicians with a powerful diagnostic aid. <br /><br />
             It's still too early to tell, but our ultimate goal is to integrate our model into the healthcare system, where it can be used as a supplementary tool for radiologists and medical professionals. We dare to picture a future where our technology can assist in early detection, leading to timely treatment and improved outcomes for patients. <br /><br />
             We are incredibly proud of what we have accomplished so far, but we know that this is just the beginning. There is still much work to be done, and we are committed to continuing our research and development in this field. Our dream is to contribute to the fight against brain tumors and make a lasting impact on the lives of those affected by this devastating condition. <br /><br />
             We hope that our story inspires others to explore the possibilities of AI and machine learning in healthcare. Together, we can harness the power of technology to make the world a better place.
          </p>


          {/* Profiles */}
          <div className="grid grid-cols-8 gap-2 rounded-md profiles" >

            {/* Jeff */}
            <div className="col-start-1 col-end-5 rounded-md profile-container bg-white">

              {/* Picture */}
              <div className="profile-image rounded-lg">
                <Image src="/AboutJeff.JPEG" width={250} height={700} alt="Picture of Jeff"></Image>
              </div>

              {/* Name and Social Media */}
              <h2 className='profile-name xl:text-2xl lg:xl md:lg sm:md rounded-lg'>
                Jeff Lee
              </h2>
              <div className="profile-sns mt-2 rounded-lg  xl:text-md lg:sm md:xs sm:xs ">
                <Link className="flex me-2" target="_blank" style={{ color: "#0077B5" }} href="https://www.linkedin.com/in/jeffyoungjaelee/"> <FaLinkedin className="mr-1" size="20" /> LinkedIn/jeffyoungjaelee</Link>
                <Link className="flex ms-2 me-2" target="_blank" href="https://github.com/leejeff0319"><FaGithubSquare className="mr-1" size="20" />github/leejeff0319</Link>
              </div>

              {/* Description */}
              <div className="profile-description">
                <h2 className="h-72">
                   Hi, my name is Jeff, and I am currently a research assistant at Boston Children's Hospital. I graduated from Vanderbilt University with a Chemistry major, but decided
                  to explore the field of Machine Learning with my brother after finding out all the possibilites and ease of accessbility. < br />
                   I am having a lot of fun learning about this field, and this is one of the many more machine learning projects I plan to work on. On top of these projects, I am
                  also taking classes related to the subject at UC San Diego Extension School, and plan on attending graduate school in the near future to further deepen my knowledge in this field. < br />
                   If you want to get to know about me more, please feel free to visit my personalized portfolio website! This is the first website I made by myself using NextJS:&nbsp;
                  <Link className="" target="_blank" style={{ color: "#40a56b" }} href="https://jeffthescientist.ai">JeffTheScientist.ai</Link>
                </h2>
              </div>

            </div>

            {/* Sean */}
            <div className="col-start-5 col-end-9 rounded-md profile-container bg-white">

              {/* Picture */}
              <div className="profile-image rounded-lg">
                <Image src="/Sean_ppf.png" width={250} height={700} alt="Picture of Sean"></Image>
              </div>

              {/* Name and Social Media */}
              <h2 className='profile-name xl:text-2xl lg:xl md:lg sm:md'>
                Sean Lee
              </h2>
              <div className="profile-sns m-2 rounded-lg ">
                <Link className="flex me-2" target="_blank" style={{ color: "#0077B5" }} href="https://www.linkedin.com/in/seanlee319/"><FaLinkedin className="mr-1" size="20" />LinkedIn/seanlee319</Link>
                <Link className="flex ms-2" target="_blank" href="https://github.com/seanlee319"><FaGithubSquare className="mr-1" size="20" />github/seanlee319</Link>
              </div>

              {/* Description */}
              <div className="profile-description ">
                <h2 className="h-72">
                   Hello, my name is Sean, and I am currently studying Data Science at UC Irvine. I was initially studying Physics for the first 3 years of university, but decided quickly
                  to switch my major to data science after I fell in love with its never-ending possibilities and practicality in today's world led by data. <br /><br />
                   My passion lies in building different machine learning models and applying them to real life application problems to come up with an optimized solution.
                  Thanks of my background in physics, I was able to pick up on the subject relatively easily and also understand concepts to a deeper degree.  <br /><br />
                   My goal is to utilize my skills in data science to tackle pressing issues. My dream is to contribute to meaningful projects that have a lasting 
                  impact on society, and I am excited about the opportunities that lie ahead!
                </h2>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
