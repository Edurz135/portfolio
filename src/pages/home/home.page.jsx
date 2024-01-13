import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  useEffect(() => {}, []);

  return (
    <div className="pt-10 px-10 m-0 bg-color-two">
      <div className="flex justify-between">
        <span className="font-two font-bold text-5xl">EDURZ</span>
        <span className="font-two font-bold text-5xl">+</span>
      </div>

      <div className="flex flex-row mt-[18rem] gap-16 text-lg">
        <span>
          <p className="font-two font-bold">Name-</p>
          <p className="font-two">Eduardo</p>
        </span>
        <span>
          <p className="font-two font-bold">Lastname-</p>
          <p className="font-two">Ramón</p>
        </span>
        <span className="pl-40">
          <p className="font-two font-bold">Role-</p>
          <p className="font-two">Coder</p>
        </span>
        <span>
          <p className="font-two font-bold">Birth-</p>
          <p className="font-two">22.07.2003</p>
        </span>
      </div>

      <div className="text-[21rem] leading-[8rem] pb-12 font-two font-bold">
        eduardo
      </div>
      <div className="h-[26rem] bg-color-three rounded-b-3xl"></div>

      <br />
      <br />

      <div className="flex justify-between text-5xl font-bold font-two">
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <span className="underline">ABOUT ME</span>
        </span>
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <span className="underline">PROJECTS</span>
        </span>
        <span>
          <span className="pr-2">&gt;&gt;</span>
          <span className="underline">CONTACT</span>
        </span>
      </div>

      <br />
      <br />

      <div className="flex justify-between items-end h-36 px-5 bg-color-one font-one text-color-two font-bold rounded-3xl">
        <span className="text-9xl">PORTFOLIO</span>
        <span className="text-4xl pb-3">It's me</span>
      </div>

      <br />
      <br />

      <div className="flex">
        <div className="flex-1">
          <div className="h-[40rem] bg-color-three rounded-3xl"></div>
          {/* <div className="font-one text-color-one font-bold text-[11rem]">
            WORK
          </div> */}
        </div>
        <div className="flex-1 relative">
          <div className="absolute font-one text-color-one font-bold text-[11rem] right-0">
            RAMÓN
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
      </div>

      <section ref={targetRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen">
          <div className="absolute z-50 h-full">
            <motion.div
              style={{ x }}
              className="relative flex flex-col justify-between h-full"
            >
              {/* overflow-hidden"> */}
              <div className=" font-one text-color-one font-bold text-[11rem] leading-none pt-5">
                WORK
              </div>

              <div className="flex gap-10">
                <div className="flex h-[12em] w-[40rem] bg-color-one rounded-3xl">
                  <div className="flex-1 bg-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>

                <div className="flex h-[12em] w-[40rem] bg-color-three rounded-3xl">
                  <div className="flex-1 bg-color-three text-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center text-color-two font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>

                <div className="flex h-[12em] w-[40rem] bg-color-three rounded-3xl">
                  <div className="flex-1 bg-color-three text-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center text-color-two font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>
              </div>
              <div className="flex gap-10 mt-10 ml-[16rem]">
                <div className="flex h-[12em] w-[40rem] bg-color-one rounded-3xl">
                  <div className="flex-1 bg-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>

                <div className="flex h-[12em] w-[40rem] bg-color-three rounded-3xl">
                  <div className="flex-1 bg-color-three text-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center text-color-two font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>

                <div className="flex h-[12em] w-[40rem] bg-color-three rounded-3xl">
                  <div className="flex-1 bg-color-three text-color-three rounded-l-3xl"></div>
                  <div className="flex-1 flex justify-center text-color-two font-three text-[15rem] leading-[12rem]">
                    2019
                  </div>
                </div>
              </div>

              <div className="text-color-three font-two font-bold py-5">
                EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
                RAMÓN&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;CODER&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;EDUARDO
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="flex">
        <div className="flex-1">
          <div className=" font-one text-color-one font-bold text-[12rem] leading-none">
            CONTACT
          </div>
          <br />
          <div className="flex">
            <div className=" font-one text-color-one font-bold text-[12rem] leading-none">
              ME
            </div>
            <div className="font-two text-color-three text-justify text-xl pl-10 ">
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
            <span className="font-two font-bold text-5xl underline">
              GITHUB
            </span>
            <span className="font-two font-bold text-5xl underline">MAIL</span>
            <span className="font-two font-bold text-5xl underline">
              LINKEDIN
            </span>
          </div>
        </div>
        {/* <div className="flex-1"> */}
        <div className="flex-1 font-two text-color-three text-justify text-xl pl-10 whitespace-pre-line">
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
      </div>

      <br />
      <div className="text-color-three text-center py-14 font-two leading-none">
        <div>
          Designed by <b>Eduardo Ramón</b>
        </div>
        <div>© 2024</div>
      </div>
    </div>
  );
}
