import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-300/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            src="https://ik.imagekit.io/osw9g36vxc/Untitled_design_8BHSJuGvXv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667142800170"
            width={441}
            height={441}
            alt=""
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span>Final Thesis:</span>{" "}
              <span className="underline decoration-teal-300">
                Dashboard RSUI
              </span>
            </h4>
            <p className="text-lg text-center md:text-left">
              This study aims to implement the development of front - end
              website on the Financial Dashboard of the Rumah Sakit Universitas
              Indonesia in monitor financial health.
            </p>
          </div>
        </div>

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            src="https://ik.imagekit.io/osw9g36vxc/MacBook_Air_mock_N3l4rJ2i_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666280382617"
            alt=""
            width={441}
            height={441}
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span>Case Study Clone: losethevery.com</span>{" "}
              <a
                href="https://hilangvery.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline decoration-teal-300">
                  hilangvery.
                </span>
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              This self-clone website from the origin losethevery.com.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-teal-400/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
