import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const SideItemsRight = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1800);
  }, []);

  return (
    <TransitionGroup>
      {isMounted && (
        <CSSTransition classNames="fade" timeout={1000}>
          <div className="fixed bottom-0 right-10 flex flex-col items-center justify-center mix-blend-difference lg:flex hidden">
            <a href="mailto:raazdura17@gmail.com" className="mix-blend-difference mb-4">
              <p style={{ writingMode: 'vertical-rl' }} className="font-roboto-mono text-black dark:text-white">
                raazdura17@gmail.com
              </p>
            </a>
            <div className="h-[100px] w-[2px] bg-black dark:bg-white mb-4" />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default SideItemsRight;
