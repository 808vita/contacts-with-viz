import React, { useEffect, useState } from "react";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTopComponent = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showTopBtn && (
        <div
          onClick={goToTop}
          className="2xl:hidden fixed bottom-0  right-0 p-5 bg-violet-300 hover:bg-violet-400 text-2xl font-thin cursor-pointer"
        >
          Back To Top ?
        </div>
      )}
    </>
  );
};

export default BackToTopComponent;
