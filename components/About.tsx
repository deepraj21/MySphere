import { profileImg } from "@/public/assets";
import html from "../public/assets/images/html.png";
import css from "../public/assets/images/css.png";
import js from "../public/assets/images/js.png";
import python from "../public/assets/images/python.png";
import firebaseImg  from "../public/assets/images/firebase.png";
import next from "../public/assets/images/next.png";
import node from "../public/assets/images/node.png";
import docker from "../public/assets/images/docker.png";
import bootstrap from "../public/assets/images/bootstrap.png";
import tailwind from "../public/assets/images/tailwind.png";
import mongodb from "../public/assets/images/mongodb.png";
import sqlite from "../public/assets/images/Sqlite.png";
import tensorflow from "../public/assets/images/tensorflow.png";
import git from "../public/assets/images/git.png";
import reactImg from "../public/assets/images/reactImg.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there! Im <span className="text-textGreen">Deepraj Bera</span>, a dedicated and ambitious BTech student majoring in Computer Science at <span className="text-textGreen">KIIT University</span>. My journey in the world of technology has been marked by a profound passion for learning and a keen interest in both <span className="text-textGreen">frontend and backend development</span>.
          </p>
          <p>
            As a motivated and <span className="text-textGreen">detail-oriented programmer</span>, I have honed my skills across various programming languages and my proficiency extends beyond the backend, as I am well-versed in frontend technologies. I bring projects to life with a creative touch, utilizing popular libraries to ensure sleek and <span className="text-textGreen">responsive user interfaces</span>.
          </p>
          <p>
            My journey has led me to explore the exciting realm of <span className="text-textGreen">AI/ML</span>, where I have successfully implemented models using powerful tools such as <span className="text-textGreen">TensorFlow, Pandas, and scikit-learn</span>. Developing machine learning models is not just a skill for me; its a passion that drives me to contribute to innovative projects.
          </p>
          <p>Here are the technologies and TechStacks I have been working with:</p>
          <ul className="max-w-[400px] text-sm font-titleFont grid grid-cols-5 gap-4 mt-6">
            <li ><Image
              className=" h-10 w-10 "
              src={html}
              alt="HTMLImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={css}
              alt="CSSImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={js}
              alt="JSImg"
            /></li>
            <li ><Image
              className="h-10 w-10 object-cover"
              src={bootstrap}
              alt="profileImg"
            /></li>
            <li ><Image
              className=" h-10 w-10 "
              src={tailwind}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={reactImg}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={next}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={node}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={mongodb}
              alt="profileImg"
            /></li>
            
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={sqlite}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={python}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={tensorflow}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={firebaseImg}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={git}
              alt="profileImg"
            /></li>
            <li ><Image
              className="rounded-lg h-10 w-10 object-cover"
              src={docker}
              alt="profileImg"
            /></li>
            
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />

              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
