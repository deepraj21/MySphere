// import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import img1 from "../public/assets/images/img1.png";
import img2 from "../public/assets/images/img2.png";
import img3 from "../public/assets/images/img3.png";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/deepraj21/Predictbay"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={img1}
                alt="PredictBay"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">PredictBay 📈</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              PredictBay is an innovative project that aims to revolutionize <span className="text-textGreen">decision-making in investment strategies</span> through intelligent forecasting. Our platform utilizes advanced <span className="text-textGreen">machine learning algorithms</span> to provide accurate <span className="text-textGreen">predictions</span> for stocks from all over the world.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Flask</li>
              <li>Deep Learning</li>
              <li>Clerk-Auth</li>
              <li>GCP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/deepraj21/Predictbay"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/watch?v=-hGX7KuH45E"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.predictbay.live/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.noormohmmad.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={img2}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Neuroscan 🧠</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              The objective of this project is to develop a machine learning model that can accurately <span className="text-textGreen">detect brain tumors</span> in medical imaging data, such as MRI scans. By leveraging advanced image processing techniques and machine learning algorithms, the model aims to assist healthcare professionals in the early and accurate diagnosis of brain tumors.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Streamlit</li>
              <li>CNN</li>
              <li>Deep Learning</li>
              {/* <li>React Hook Form</li> */}
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/deepraj21/Neuroscan"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/watch?v=4Bw56gEVGkk"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://share.streamlit.io/app/deepraj21-neuroscan-app-2oamw6/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://noorshop.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={img3}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">vision.AI 👁️</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              In this project, we are building a web application that allows users to upload images and apply various <span className="text-textGreen">processing techniques</span> and Generate Images and videos Using the <span className="text-textGreen">Generative AI and Clipdrop API</span>. 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Flask</li>
              <li>Generative AI</li>
              <li>ClipDrop API</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/deepraj21/vision.AI"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://visionai.pythonanywhere.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
