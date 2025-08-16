import { useEffect, useRef } from "react";
import Typed from "typed.js";

// Fisher-Yates shuffle algorithm to randomize array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    // Define the default strings
    const defaultStrings = [
      "I build AI tools that <br/><strong>actually</strong> get used.",
      "I turn <strong>ideas</strong> into<br/> working <strong>systems.</strong>",
      "I automate the <strong>boring stuff</strong> so you don't have to.",
    ];
    
    // Randomize the order of strings
    const stringsToUse = typingData ? typingData : shuffleArray(defaultStrings);
    
    const typed = new Typed(el.current, {
      strings: stringsToUse, // Use the randomized strings
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
