import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {}, []);

  return (
    <div className="pt-10 px-10 m-0 bg-color-two">
      <div className="flex justify-between">
        <span className="font-two font-bold text-5xl">EDURZ</span>
        <span className="font-two font-bold text-5xl">+</span>
      </div>
      <div className="flex flex-row">
        <span>
          <p className="font-two font-bold">Name-</p>
          <p className="font-two">Eduardo</p>
        </span>
        <span>
          <p className="font-two font-bold">Lastname-</p>
          <p className="font-two">Ramón</p>
        </span>
        <span>
          <p className="font-two font-bold">Role-</p>
          <p className="font-two">Coder</p>
        </span>
        <span>
          <p className="font-two font-bold">Birth-</p>
          <p className="font-two">22.07.2003</p>
        </span>
      </div>

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

      <div className="flex justify-between items-end h-28 px-5 bg-color-one font-one text-color-two font-bold rounded-3xl">
        <span className="text-8xl">PORTFOLIO</span>
        <span className="text-4xl pb-3">It's me</span>
      </div>

      <br />

      <div className="flex">
        <div className="flex-1 h-[40rem] bg-color-three rounded-3xl"></div>
        <div className="flex-1">
          <div className="font-one text-color-one font-bold text-[11rem] text-right">
            RAMÓN
          </div>
          <div className="font-two text-color-three text-justify text-xl pl-10 whitespace-pre-line">
            Student of the <b>Systems Engineering</b> degree at the University of Lima.
            I have experience in web page development and of 2D and 3D video
            games under the Unity platform. Am a <b>responsible</b>, organized person,
            with great ease of learning and committed to work.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <b>dolore</b> magna aliqua. Ut enim
            ad minim veniam.
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
    </div>
  );
}
