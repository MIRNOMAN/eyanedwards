import Image from "next/image";
import backgroundImage from "@/assets/background.png"; // Ensure the path is correct
import image_icon_1 from "@/assets/home/instagram.png";
import image_icon_2 from "@/assets/home/tiktok.png";
import image_icon_3 from "@/assets/home/youtube.png";

export default function ContactUs() {
  return (
    <section className="  relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className="mx-auto md:py-[164px] py-[50px] px-[20px]  md:px-[123px]  bg-black bg-opacity-70 justify-between items-center">
        <div className="container flex flex-col md:flex-row gap-[105px]">
        {/* Left Section (Text and Social Icons) */}
        <div className="text-center md:text-left w-full md:pt-20  md:w-1/2 text-white">
          <h1 className="text-[32px] sm:text-[40px] font-minion text-primary leading-[48px] tracking-wide font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-[16px] sm:text-[20px] mt-[50px] font-montserrat md:mr-[170px] tracking-wide md:leading-10 font-medium  mb-6">
            Have questions about funding? High Ticket Offer  Financing is here to help with business, personal, or customer financing solutions. Contact us today to get started!
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-8 md:mt-12">
            <div className="bg-white p-4 rounded-2xl">
              <Image src={image_icon_1} alt="Instagram" height={40} width={40} />
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <Image src={image_icon_2} alt="TikTok" height={40} width={40} />
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <Image src={image_icon_3} alt="YouTube" height={40} width={40} />
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <form className="bg-white p-[30px] sm:p-[50px] rounded-lg shadow-lg">
            <div className="mb-4 font-montserrat">
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
                className="shadow appearance-none rounded-lg w-full py-5 px-5 text-gray-700 leading-tight text-black focus:outline-none focus:shadow-outline bg-[#ECECEC]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="shadow appearance-none rounded-lg w-full py-5 px-5 text-gray-700 leading-tight text-black focus:outline-none focus:shadow-outline bg-[#ECECEC]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
                className="shadow appearance-none rounded-lg w-full py-5 px-5 text-gray-700 leading-tight text-black focus:outline-none focus:shadow-outline bg-[#ECECEC]"
              />
            </div>
            <p className="text-left text-black leading-7 text-[13px] my-[50px]">
              This form is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="font-bold text-black">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="font-bold text-black">
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <div className="flex items-center justify-start">
              <button
                type="submit"
                className="bg-[#E7A647] hover:bg-yellow-700 text-black font-bold py-5 md:px-16 px-7 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Check My Funding Eligibility
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
