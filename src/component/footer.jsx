import React from "react";

const Footer = () => {
  return (
    <footer
      className={`w-full flex justify-center items-center px-4 lg:px-[100px] dark:bg-black`}
    >
      <div className="flex justify-center pt-6 pb-6 sm:pt-5 sm:pb-5 flex-col sm:flex-row text-black dark:text-white">
        <h5 className="text-smtext-center sm:text-base sm:mb-0 ">
          Raaz Dura 2024.
          View the code{" "}
          <a
            href="https://github.com/raazdura/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline hover:text-yellow-500"
          >
            on GitHub
          </a>
          .
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
