import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="studentMATE : Student Management System"
          des="It provides a user-friendly interface, centralizes data, and enhances communication for efficient management of student records and marks."
          listItem={["Python", "Flask", "sqlite3"]}
          link="https://github.com/deepraj21/studentMATE"
        />
        <ArchiveCard
          title="DUCKDESK : Personal Blogging Website"
          des=" 
DuckDesk is an engaging and educational WordPress-blogging website where school students are empowered to share insights through a range of blog categories."
          listItem={["Blogging", "Wordpress", "php-contact"]}
          link="https://github.com/deepraj21/duckdesk"
        />
        <ArchiveCard
          title="TravelScape : seamless travel planning"
          des="Planning a trip can often be overwhelming and time-consuming. Travelers face challenges in finding reliable information quickly searching for the best flight deals."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://github.com/deepraj21/TravelScape"
        />
        <ArchiveCard
          title="Olympics-Analysis : Unveiling the Champions"
          des="
Analympics is a powerful and interactive platform designed to provide comprehensive insights into the history of the Olympic Games."
          listItem={["Reactjs", "Tailwind CSS", "PowerBI"]}
          link="https://olympics-analysis-taupe.vercel.app/"
        />
        <ArchiveCard
          title="VUESIC : your own Podcast WebApp"
          des=" Vuesic is a podcast app designed to offer users a comprehensive listening experience.Discover new podcasts, stay up to date and never miss a beat."
          listItem={["Reactjs", "Tailwind CSS", "nodeJS"]}
          link="https://vuesic-kappa.vercel.app/"
        />
        <ArchiveCard
          title="StockWatch : Track your Favourite Stocks"
          des="Empower your investment journey with our StockWatch, seamlessly integrating yfinance for real-time market data and React for a dynamic, user-friendly interface."
          listItem={["Reactjs", "Tailwind CSS", "Yfinance"]}
          link="https://stockwatch23.netlify.app/"
        />

        {/* {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="OREBI e-commerce Shopping store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://orebishopping.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://my-blog-delta-eight.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              />
            </motion.div>
          </>
        )} */}
      </div>
      {/* <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Archive;
