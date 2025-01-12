import { useScroll, useSpring, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { Main } from "./components/Main";
import { MiddleComponent } from "./components/MiddleSection";
import { MotionSection } from "./components/MotionSection";
import { Gallery } from "./components/GallerySection";
import { Dynamic } from "./components/DynamicContent";
import { CardsData } from "./components/CardsData";
import { Alumini } from "./components/Alumini";
import { UsersCards } from "./components/UsersCard";
import { Social } from "./components/SocailSection";
import { LastSection } from "./components/EndSection";
import { WhatsAppSticky } from "./components/Whatsapp";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop"; // Import ScrollToTop

export const App = () => {
  // Get scroll progress and use it to animate the scaleX of a progress bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Detect scroll direction (up or down)
  const [scrollDirection, setScrollDirection] = useState("down");
  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          height: "5px",
          background: "#042d89",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformOrigin: "0%",
          zIndex: 50,
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: scrollDirection === "down" ? -20 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Main />
        <MotionSection />
        <MiddleComponent />
        <Gallery />
        <Dynamic />
        <CardsData />
        <Alumini />
        <UsersCards />
        <Social />
        <LastSection />
        <Footer />
      </motion.div>
      
      {/* WhatsApp Sticky Button */}
      <WhatsAppSticky />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
};
