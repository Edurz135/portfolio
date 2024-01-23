import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./home.page.css";
import { Card, AnimatedText, PopCard } from "../../components";

export default function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [selectedId, setSelectedId] = useState(null);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  return (
    <div className="pt-10 px-10 m-0 bg-color-two">
      <div className="flex justify-between font-two font-bold text-5xl">
        <span>
          <a href="#about">
            <AnimatedText el="h2" text={["EDURZ"]} />
          </a>
        </span>
        <span>
          <motion.div whileHover={{ scale: 1.2, rotate: 90 }}>
            <a href="#contact" className="p-2">
              +
            </a>
          </motion.div>
        </span>
      </div>

      {/* <div className="text-[21rem] leading-[8rem] pb-12 font-two font-bold">
        eduardo
      </div> */}
      {/* <div>
        <svg
          width="1541.756"
          height="255"
          viewBox="0 0 1541.756 255"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          id="edu-header"
        >
          <g
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            style={{
              strokeWidth: "0.25mm",
              fill: "#20140D",
              width: "100%",
            }}
          >
            <path
              d="M 612.153 71.4 L 666.753 71.4 L 666.753 259.7 L 614.953 259.7 L 614.953 237.3 Q 604.103 249.55 589.053 256.025 A 80.743 80.743 0 0 1 559.222 262.46 A 93.085 93.085 0 0 1 556.503 262.5 A 104.358 104.358 0 0 1 531.826 259.743 A 71.765 71.765 0 0 1 497.703 241.15 Q 479.073 222.821 476.437 189.271 A 146.527 146.527 0 0 1 476.003 177.8 L 476.003 71.4 L 530.603 71.4 L 530.603 169.75 A 79.308 79.308 0 0 0 532.238 186.64 Q 537.579 211.039 560.367 214.63 A 53.893 53.893 0 0 0 568.753 215.25 A 48.73 48.73 0 0 0 583.149 213.222 A 38.477 38.477 0 0 0 600.253 202.475 Q 609.782 192.245 611.681 174.048 A 92.107 92.107 0 0 0 612.153 164.5 L 612.153 71.4 Z M 372.053 0 L 426.653 0 L 426.653 259.7 L 374.503 259.7 L 374.503 238 A 65.672 65.672 0 0 1 335.92 260.562 A 99.962 99.962 0 0 1 315.703 262.5 A 102.481 102.481 0 0 1 283.705 257.616 A 92.769 92.769 0 0 1 267.578 250.6 Q 246.053 238.7 233.803 216.65 A 96.67 96.67 0 0 1 222.749 183.023 A 123.779 123.779 0 0 1 221.553 165.55 Q 221.553 136.5 233.803 114.45 Q 246.053 92.4 267.578 80.5 A 96.082 96.082 0 0 1 309.132 68.786 A 114.872 114.872 0 0 1 315.703 68.6 Q 351.753 68.6 372.053 91.35 L 372.053 0 Z M 1243.903 0 L 1298.503 0 L 1298.503 259.7 L 1246.353 259.7 L 1246.353 238 A 65.672 65.672 0 0 1 1207.77 260.562 A 99.962 99.962 0 0 1 1187.553 262.5 A 102.481 102.481 0 0 1 1155.555 257.616 A 92.769 92.769 0 0 1 1139.428 250.6 Q 1117.903 238.7 1105.653 216.65 A 96.67 96.67 0 0 1 1094.599 183.023 A 123.779 123.779 0 0 1 1093.403 165.55 Q 1093.403 136.5 1105.653 114.45 Q 1117.903 92.4 1139.428 80.5 A 96.082 96.082 0 0 1 1180.982 68.786 A 114.872 114.872 0 0 1 1187.553 68.6 Q 1223.603 68.6 1243.903 91.35 L 1243.903 0 Z M 156.103 200.55 L 185.153 232.05 Q 159.138 261.831 109.687 262.485 A 168.824 168.824 0 0 1 107.453 262.5 A 139.15 139.15 0 0 1 77.441 259.394 A 110.627 110.627 0 0 1 51.103 250.075 A 94.592 94.592 0 0 1 23.77 229.622 A 88.155 88.155 0 0 1 13.303 215.6 A 93.187 93.187 0 0 1 0.214 172.51 A 113.402 113.402 0 0 1 0.003 165.55 A 100.115 100.115 0 0 1 5.656 131.596 A 92.467 92.467 0 0 1 13.128 115.675 Q 26.253 93.45 49.178 81.025 A 103.422 103.422 0 0 1 90.244 69.037 A 125.591 125.591 0 0 1 100.803 68.6 Q 127.753 68.6 149.803 79.975 Q 171.853 91.35 184.978 112.875 A 88.974 88.974 0 0 1 196.805 146.089 A 116.822 116.822 0 0 1 198.103 163.8 L 58.803 190.75 Q 64.753 204.75 77.528 211.75 Q 89.554 218.34 106.698 218.726 A 95.667 95.667 0 0 0 108.853 218.75 A 84.23 84.23 0 0 0 122.314 217.724 A 63.179 63.179 0 0 0 134.928 214.375 A 60.487 60.487 0 0 0 151.105 204.958 A 73.318 73.318 0 0 0 156.103 200.55 Z M 854.003 71.4 L 908.603 71.4 L 908.603 259.7 L 856.453 259.7 L 856.453 238 A 65.672 65.672 0 0 1 817.87 260.562 A 99.962 99.962 0 0 1 797.653 262.5 A 102.481 102.481 0 0 1 765.655 257.616 A 92.769 92.769 0 0 1 749.528 250.6 Q 728.003 238.7 715.753 216.65 A 96.67 96.67 0 0 1 704.699 183.023 A 123.779 123.779 0 0 1 703.503 165.55 Q 703.503 136.5 715.753 114.45 Q 728.003 92.4 749.528 80.5 A 96.082 96.082 0 0 1 791.082 68.786 A 114.872 114.872 0 0 1 797.653 68.6 Q 833.703 68.6 854.003 91.35 L 854.003 71.4 Z M 1406.972 258.569 A 122.367 122.367 0 0 0 1438.503 262.5 A 132.689 132.689 0 0 0 1452.102 261.817 A 107.169 107.169 0 0 0 1491.703 250.075 Q 1515.153 237.65 1528.453 215.6 A 89.977 89.977 0 0 0 1537.064 196.702 A 100.845 100.845 0 0 0 1541.753 165.55 A 113.402 113.402 0 0 0 1541.542 158.59 A 93.187 93.187 0 0 0 1528.453 115.5 Q 1515.153 93.45 1491.703 81.025 A 102.906 102.906 0 0 0 1469.569 72.423 A 121.956 121.956 0 0 0 1438.503 68.6 A 133.553 133.553 0 0 0 1425.781 69.195 A 108.657 108.657 0 0 0 1385.128 81.025 Q 1361.503 93.45 1348.203 115.5 A 89.977 89.977 0 0 0 1339.592 134.398 A 100.845 100.845 0 0 0 1334.903 165.55 A 113.402 113.402 0 0 0 1335.114 172.51 A 93.187 93.187 0 0 0 1348.203 215.6 Q 1361.503 237.65 1385.128 250.075 A 104.308 104.308 0 0 0 1406.972 258.569 Z M 1075.903 68.6 L 1075.903 119 A 550.762 550.762 0 0 0 1072.207 118.727 Q 1067.185 118.375 1064.63 118.313 A 40.751 40.751 0 0 0 1063.653 118.3 A 67.658 67.658 0 0 0 1048.731 119.851 Q 1035.631 122.812 1026.903 131.425 A 41.211 41.211 0 0 0 1016.825 148.14 Q 1014.66 154.684 1013.95 162.664 A 91.826 91.826 0 0 0 1013.603 170.8 L 1013.603 259.7 L 959.003 259.7 L 959.003 71.4 L 1011.153 71.4 L 1011.153 96.25 A 59.941 59.941 0 0 1 1034.521 76.971 A 72.085 72.085 0 0 1 1037.578 75.6 A 87.276 87.276 0 0 1 1058.497 69.846 A 116.585 116.585 0 0 1 1075.903 68.6 Z M 1438.503 217.7 A 50.773 50.773 0 0 0 1455.714 214.889 A 44.059 44.059 0 0 0 1472.978 203.525 A 47.672 47.672 0 0 0 1485.002 180.132 A 69.572 69.572 0 0 0 1486.453 165.55 A 68.136 68.136 0 0 0 1484.636 149.37 A 47.258 47.258 0 0 0 1472.978 127.575 A 44.952 44.952 0 0 0 1441.099 113.455 A 60.201 60.201 0 0 0 1438.503 113.4 A 50.936 50.936 0 0 0 1420.981 116.31 A 44.826 44.826 0 0 0 1403.853 127.575 A 47.626 47.626 0 0 0 1391.54 151.595 A 69.275 69.275 0 0 0 1390.203 165.55 A 67.165 67.165 0 0 0 1392.083 181.889 A 47.037 47.037 0 0 0 1403.853 203.525 A 45.656 45.656 0 0 0 1436.55 217.669 A 60.73 60.73 0 0 0 1438.503 217.7 Z M 807.103 217.7 Q 827.753 217.7 841.403 203.525 A 47.626 47.626 0 0 0 853.716 179.505 A 69.275 69.275 0 0 0 855.053 165.55 A 67.165 67.165 0 0 0 853.173 149.211 A 47.037 47.037 0 0 0 841.403 127.575 A 45.404 45.404 0 0 0 808.387 113.414 A 59.226 59.226 0 0 0 807.103 113.4 A 50.936 50.936 0 0 0 789.581 116.31 A 44.826 44.826 0 0 0 772.453 127.575 A 47.626 47.626 0 0 0 760.14 151.595 A 69.275 69.275 0 0 0 758.803 165.55 A 67.165 67.165 0 0 0 760.683 181.889 A 47.037 47.037 0 0 0 772.453 203.525 A 45.656 45.656 0 0 0 805.15 217.669 A 60.73 60.73 0 0 0 807.103 217.7 Z M 325.153 217.7 Q 345.803 217.7 359.453 203.525 A 47.626 47.626 0 0 0 371.766 179.505 A 69.275 69.275 0 0 0 373.103 165.55 A 67.165 67.165 0 0 0 371.223 149.211 A 47.037 47.037 0 0 0 359.453 127.575 A 45.404 45.404 0 0 0 326.437 113.414 A 59.226 59.226 0 0 0 325.153 113.4 A 50.936 50.936 0 0 0 307.631 116.31 A 44.826 44.826 0 0 0 290.503 127.575 A 47.626 47.626 0 0 0 278.19 151.595 A 69.275 69.275 0 0 0 276.853 165.55 A 67.165 67.165 0 0 0 278.733 181.889 A 47.037 47.037 0 0 0 290.503 203.525 A 45.656 45.656 0 0 0 323.2 217.669 A 60.73 60.73 0 0 0 325.153 217.7 Z M 1197.003 217.7 Q 1217.653 217.7 1231.303 203.525 A 47.626 47.626 0 0 0 1243.616 179.505 A 69.275 69.275 0 0 0 1244.953 165.55 A 67.165 67.165 0 0 0 1243.073 149.211 A 47.037 47.037 0 0 0 1231.303 127.575 A 45.404 45.404 0 0 0 1198.287 113.414 A 59.226 59.226 0 0 0 1197.003 113.4 A 50.936 50.936 0 0 0 1179.481 116.31 A 44.826 44.826 0 0 0 1162.353 127.575 A 47.626 47.626 0 0 0 1150.04 151.595 A 69.275 69.275 0 0 0 1148.703 165.55 A 67.165 67.165 0 0 0 1150.583 181.889 A 47.037 47.037 0 0 0 1162.353 203.525 A 45.656 45.656 0 0 0 1195.05 217.669 A 60.73 60.73 0 0 0 1197.003 217.7 Z M 53.553 159.95 L 145.253 142.1 Q 141.403 127.4 129.503 118.65 A 44.789 44.789 0 0 0 108.409 110.381 A 58.517 58.517 0 0 0 100.803 109.9 A 52.233 52.233 0 0 0 85.022 112.18 A 42.275 42.275 0 0 0 67.203 123.2 Q 54.648 136.094 53.607 158.528 A 86.075 86.075 0 0 0 53.553 159.95 Z"
              vector-effect="non-scaling-stroke"
            />
          </g>
        </svg>
        <div className="h-[26rem] bg-color-three rounded-b-3xl"></div>
      </div> */}
      <div className="relative mt-[16rem]">
        <img src="/HEADER.png" />
        <div className="absolute top-0">
          <div className="flex flex-row gap-16 text-lg font-two text-color-three">
            <span>
              <p className="font-bold">Name-</p>
              <p>Eduardo</p>
            </span>
            <span>
              <p className="font-bold">Lastname-</p>
              <p>Ramón</p>
            </span>
            <span>
              <p className="font-bold">Role-</p>
              <p>Coder</p>
            </span>
            <span>
              <p className="font-bold">Birth-</p>
              <p>22.07.2003</p>
            </span>
          </div>
        </div>
        <div className="absolute ml-10 mb-5 bottom-0 text-xl font-bold font-two text-color-two">
          La vida mejor vivida es la que se atreve <br /> a encender el fuego
          sagrado del arte
        </div>
        <div className="absolute mr-10 mb-5 bottom-0 right-0 text-md font-bold font-two text-color-two text-end">
          22.07.2023
          <img src="/BARCODE.png" />
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-between text-5xl font-bold font-two">
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <a className="animated-underline" href="#about">
            ABOUT ME
          </a>
        </span>
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <a className="animated-underline" href="#projects">
            PROJECTS
          </a>
        </span>
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <a className="animated-underline" href="#contact">
            CONTACT
          </a>
        </span>
      </div>
      <br />
      <br />
      <div className="flex justify-between items-end h-36 px-5 bg-color-one font-one text-color-two font-bold rounded-3xl">
        <AnimatedText el="h2" text={["PORTFOLIO"]} className="text-9xl" />
        <span className="text-4xl pb-3">It's me</span>
      </div>
      <br />
      <br />
      <section className="flex" id="about">
        <div className="flex-1">
          <div className="h-[40rem] bg-color-three rounded-3xl overflow-hidden">
            <img
              src="/MAD.jpg"
              className="h-full w-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* <div className="font-one text-color-one font-bold text-[11rem]">
            WORK
          </div> */}
        </div>
        <div className="flex-1 relative">
          <div className="absolute font-one text-color-one font-bold text-[11rem] right-0">
            <AnimatedText el="h2" text={["RAMÓN"]} />
          </div>
          <div className="font-two text-color-three text-justify text-xl pt-[15rem] pl-10 whitespace-pre-line">
            Student of the <b>Systems Engineering</b> degree at the University
            of Lima. I have experience in web page development and of 2D and 3D
            video games under the Unity platform. Am a <b>responsible</b>,
            organized person, with great ease of learning and committed to work.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <b>dolore</b> magna aliqua.
            Ut enim ad minim veniam.
            <br />
            <br />
            Student of the Systems Engineering degree at the University of Lima.
            I have experience in web page development and of 2D and 3D video
            games under the Unity platform. Am a responsible, organized person,
            with great ease of learning and committed to work.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </section>
      <section ref={targetRef} className="relative h-[220vh]" id="projects">
        <div className="sticky top-0 h-screen ">
          <div className="absolute z-50 h-full">
            <motion.div
              style={{ x }}
              className=" flex flex-col justify-between h-full"
            >
              <div className="font-one text-color-one font-bold text-[11rem] leading-none pt-5">
                <AnimatedText el="h2" text={["WORK"]} repeatDelay={10000} />
              </div>

              <div className="flex gap-20">
                <PopCard
                  year="2019"
                  imgSrc="/FREEFALL.png"
                  variant="default"
                />
                <PopCard
                  year="2021"
                  imgSrc="/FREEFALL.png"
                  variant="secondary"
                />
                <PopCard
                  year="2023"
                  imgSrc="/FREEFALL.png"
                  variant="default"
                />
              </div>
              <div className="flex gap-20 mt-10 ml-[16rem]">
                <PopCard
                  year="2020"
                  imgSrc="/MOF.png"
                  variant="secondary"
                />
                <PopCard
                  year="2022"
                  imgSrc="/MOF.png"
                  variant="default"
                />
                <PopCard
                  year="2024"
                  imgSrc="/MOF.png"
                  variant="secondary"
                />
              </div>

              <div className="text-color-three font-two font-bold pb-10 block relative">
                <div className="infinite absolute flex">
                  <div className="infinite-text">
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                  </div>
                  <div className="infinite-text">
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                    <span>EDUARDO RAMÓN | CODER | </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="flex" id="contact">
        <div>
          <div>
            <AnimatedText
              // el="h2"
              className="font-one text-color-one font-bold text-[12rem] leading-none"
              text={["CONTACT"]}
            />
          </div>
          <br />
          <div className="flex">
            <div className="flex font-one text-color-one font-bold text-[12rem] leading-none">
              <AnimatedText el="h2" text={["ME"]} />
            </div>
            <div className="flex font-two text-color-three text-justify text-xl pl-10 ">
              Student of the Systems Engineering degree at the University of
              Lima. I have experience in web page development and of 2D and 3D
              video games under the Unity platform. Am a responsible, organized
              video games under the Unity platform. Am a responsible, organized
              person, with great ease of learning and committed to work.
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-between px-10 py-4 bg-color-one rounded-3xl text-color-two">
            <span className="font-two font-bold text-5xl">
              <a
                className="animated-underline2"
                href="https://github.com/Edurz135"
                target="_blank"
              >
                GITHUB
              </a>
            </span>
            <span className="font-two font-bold text-5xl">
              <a
                className="animated-underline2"
                href="mailto:edurz12345@gmail.com"
              >
                MAIL
              </a>
            </span>
            <span className="font-two font-bold text-5xl">
              <a
                className="animated-underline2"
                href="https://www.linkedin.com/in/eram%C3%B3n/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </span>
          </div>
        </div>
        {/* <div className="flex-1"> */}
        <div className="font-two text-color-three text-justify text-xl pl-10 whitespace-pre-line">
          Student of the Systems Engineering degree at the University of Lima. I
          have experience in web page development and of 2D and 3D video games
          under the Unity platform. Am a responsible, organized person, with
          great ease of learning and committed to work.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
          <br />
          <br />
          Student of the Systems Engineering degree at the University of Lima. I
          have experience in web page development and of 2D and 3D video games
          under the Unity platform. Am a responsible, organized person, with
          great ease of learning and committed to work.
        </div>
      </section>
      <br />
      <div className="text-color-three text-center py-14 font-two leading-none opacity-70">
        <div>
          Designed by <b>Eduardo Ramón</b>
        </div>
        <div>© 2024</div>
      </div>
    </div>
  );
}
