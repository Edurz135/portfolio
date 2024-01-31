import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";

export default function Card({ year, imgSrc, variant, bottom=false, title, link, description, imgLogoSrc, imgContentSrc }) {
  const variants = {
    default: {
      backgroundColor: "bg-color-one",
      fontColor: "text-color-three",
    },
    secondary: {
      backgroundColor: "bg-color-three",
      fontColor: "text-color-two",
    },
  };

  const currentVariant = variants[variant] || "default";
  const [isCardOpened, setIsCardOpened] = useState(false);
  const card = useRef(null);
  return (
    <Fragment>
      <motion.div
        ref={card}
        layout
        onClick={() => {
          setIsCardOpened(!isCardOpened);
        }}
        className="flex relative h-[12em] w-[40rem] rounded-3xl items-center"
      >
        <motion.div
          layout
          className={
            isCardOpened
              ? `flex flex-col absolute w-full rounded-3xl p-4 ${currentVariant.backgroundColor} ${bottom ? "-bottom-8" : "mt-8"} z-50`
              : `flex flex-row absolute w-full h-full rounded-3xl ${currentVariant.backgroundColor}`
          }
        >
          <motion.img
            layout
            transition={{ ease: "easeInOut", duration: 0.2, stiffness: 100 }}
            className={
              isCardOpened
                ? "w-full h-40 rounded-t-3xl object-cover"
                : "flex w-1/2 rounded-l-3xl object-cover"
            }
            src={isCardOpened ? imgContentSrc : imgLogoSrc}
          />
          <motion.div
            layout
            transition={{ ease: "easeInOut", duration: 0.2, stiffness: 100 }}
            className={
              isCardOpened
                ? `font-three text-[8rem] leading-[8rem] ${currentVariant.fontColor}`
                : `flex w-1/2 justify-center font-three text-[15rem] leading-[12rem] ${currentVariant.fontColor}`
            }
          >
            {year}
          </motion.div>
          {isCardOpened && (
            <div
              className={`font-three text-[15rem] leading-[12rem] ${currentVariant.fontColor}`}
            >
              {title}
            </div>
          )}

          {isCardOpened && (
            <motion.p
              className={`font-two ${currentVariant.fontColor} text-justify text-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {description}
            </motion.p>
          )}

          {isCardOpened && (
            <motion.p
              className={`font-two ${currentVariant.fontColor} font-bold text-3xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="pr-2">&gt;&gt;</span>
              <a
                className="animated-underline"
                href={link}
                target="_blank"
              >
                LINK
              </a>
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </Fragment>
  );
}
