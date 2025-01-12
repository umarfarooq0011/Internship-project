import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const Hero = () => {
  const words = ["Web Development", "Mobile Development", "Marketing", "Programming"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const [mainText, setMainText] = useState("Learn the fundamentals with our");
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // Tracks the 4-second pause

  // Loop for the dynamic words (e.g., Web Development, etc.)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setShowWord(false); // Start fade-out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
        setShowWord(true); // Start fade-in
      }, 500); // Match fade-out duration
    }, 2500); // Display each word for 2.5 seconds

    return () => clearInterval(wordInterval);
  }, []);

  // Typing and deletion effect for the main text
  useEffect(() => {
    if (isPaused) {
      // Pause for 4 seconds before typing or deleting
      const pauseTimeout = setTimeout(() => setIsPaused(false), 4000);
      return () => clearTimeout(pauseTimeout);
    }

    let timeout;
    if (isTyping) {
      // Typing effect
      timeout = setTimeout(() => {
        setMainText((prev) =>
          prev.length < "Learn the fundamentals with our".length
            ? "Learn the fundamentals with our".slice(0, prev.length + 1)
            : prev
        );
        if (mainText === "Learn the fundamentals with our") {
          setIsPaused(true); // Pause after typing
          setIsTyping(false); // Switch to deletion
        }
      }, 100);
    } else {
      // Deletion effect
      timeout = setTimeout(() => {
        setMainText((prev) =>
          prev.length > 0 ? prev.slice(0, prev.length - 1) : prev
        );
        if (mainText === "") {
          setIsPaused(true); // Pause after deletion
          setIsTyping(true); // Switch to typing
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [mainText, isTyping, isPaused]);

  return (
    <section className="text-center mt-20">
      <h1 className="text-5xl font-bold">
        {mainText} <br />
        <span className="block mt-4">
          Experts in{" "}
          <CSSTransition
            in={showWord}
            timeout={500} // Match the fade-in and fade-out durations
            classNames={{
              enter: "opacity-0",
              enterActive: "opacity-100 transition-opacity duration-500 ease-in",
              exit: "opacity-100",
              exitActive: "opacity-0 transition-opacity duration-500 ease-out",
            }}
            unmountOnExit
          >
            <span className="text-[#00CBFF]">{words[currentWordIndex]}</span>
          </CSSTransition>
        </span>
      </h1>
    </section>
  );
};
