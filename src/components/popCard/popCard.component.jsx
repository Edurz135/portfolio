import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";

export default function Card(props) {
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

  const variant = props.variant || "default";
  const currentVariant = variants[variant];
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  return (
    <Fragment>
      <motion.div
        ref={card}
        // isCardOpened={isCardOpened}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
        className={
          isCardOpened
            ? "fixed top-0 right-0 bottom-0 left-0 flex flex-col z-10 justify-center items-center w-[38rem] m-auto"
            : `flex h-[12em] w-[40rem] ${currentVariant.backgroundColor} rounded-3xl overflow-hidden`
        }
      >
        <div
          className={
            isCardOpened ? "w-full flex flex-col" : "w-full flex flex-row"
          }
        >
          <motion.img
            layout="scale"
            className={isCardOpened ? "w-full h-40" : "flex-1 h-full w-full"}
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={props.imgSrc}
          />
          <motion.div
            className={
              isCardOpened
                ? "font-three text-[15rem] leading-[12rem] text-color-two"
                : `flex-1 flex justify-center font-three text-[15rem] leading-[12rem] ${currentVariant.fontColor}`
            }
            isCardOpened={isCardOpened}
            layout="position"
          >
            {props.title}
          </motion.div>
          {isCardOpened && (
            <div className="font-three text-[15rem] leading-[12rem] text-color-two">
              FREE FALL
            </div>
          )}

          {isCardOpened && (
            <motion.p
              className="font-two text-color-two text-justify text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Relive your moments by playing this remake of the famous game
              Rapid Roll. This remake presents diversity of appearances for the
              player and the platforms, you will have fun.
            </motion.p>
          )}

          {isCardOpened && (
            <motion.p
              className="font-two text-color-two font-bold text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <a
                className="animated-underline2"
                href="https://play.google.com/store/apps/details?id=com.PED.FreeFall&hl=en&gl=US"
                target="_blank"
              >
                LINK
              </a>
            </motion.p>
          )}
        </div>
      </motion.div>

      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
            className="w-screen h-screen fixed z-[9] top-0 bottom-0 right-0 left-0 bg-black"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></motion.div>
        </Fragment>
      )}
    </Fragment>
  );
}
