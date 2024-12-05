import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Skills from "./Skills";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const one = () => (
    <h5
      style={{ transitionDelay: "100ms" }}
      className="text-lg text-black dark:text-white max-w-[480px] mb-2 opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out"
    >
      Hello, I'm
    </h5>
  );
  const two = () => (
    <h1
      style={{ transitionDelay: "200ms" }}
      className="text-3xl text-yellow-400 dark:text-white lg:text-4xl font-bold mb-1 max-w-[900px] opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out"
    >
      Raaz Dura.
    </h1>
  );
  const three = () => (
    <h3
      style={{ transitionDelay: "300ms" }}
      className="text-2xl text-black dark:text-white lg:text-3xl max-w-[900px] mb-4 opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out"
    >
      I'm a Web Developer.
    </h3>
  );
  const four = () => (
    <h5
      style={{ transitionDelay: "400ms" }}
      className="text-lg text-black dark:text-white max-w-[480px] mb-2 opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out"
    >
      I'm currently focused on expanding my experience designing and developing
      high-performing websites.
    </h5>
  );

  const items = [one, two, three, four];

  return (
    <header className="h-screen flex justify-start items-center px-4 lg:px-[100px]">
      <div className="container mx-auto">
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={500}
                onEntered={(node) => {
                  node.style.opacity = "1";
                  node.style.transform = "translateY(0)";
                }}
              >
                {item()}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
      {/* <Skills /> */}
    </header>
  );
};

export default Header;
