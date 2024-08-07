import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* Page Header */}
      <div className="page-header">
        <h2 className="header-text">Contact Us</h2>
        <Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
      </div>

      {/* Body */}
      <div className="min-h-screen w-full">

        {/* Intro */}
        <div className="grid grid-cols-12 ">
          <div className="w-full col-start-4 col-end-10">
            <h2 className="bg-white pt-2 pr-2 pl-2 rounded-t-md text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">Please Contact us Through this Form!</h2>
            <p className="bg-white p-2  profile-about"> Do you have any questions for us? Feel free to reach out!  Please fill out the form below with your name, email address, 
            and your message, and we will get back to you as soon as possible. Your feedback is valuable to us, and we aim to provide you with a prompt response.</p>
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
