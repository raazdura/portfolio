import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SocialIconLinks from './socialIconLinks';

const SideItemsLeft = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1800);
  }, []);

  return (
    <TransitionGroup>
      {isMounted && (
        <CSSTransition classNames="fadeup" timeout={1000}>
          <div className="fixed bottom-3 left-10 flex-col items-center justify-center text-4xl space-y-4 mix-blend-difference lg:flex hidden">
            <SocialIconLinks flexDirection="flex-col" />
            <div className="h-[100px] w-[2px] bg-black dark:bg-white " />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default SideItemsLeft;
