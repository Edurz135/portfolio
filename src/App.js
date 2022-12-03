import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bg from "./assets/Artboard1.png";

export default function App() {
  const _intervalRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (startCounter) {
      _intervalRef.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 10);
    } else {
      clearInterval(_intervalRef.current);
    }
    return () => clearInterval(_intervalRef.current);
  }, [startCounter]);

  return (
    <div>
      <div style={{height: "100vh", backgroundColor: "#f7f5ed"}}>
        <nav>
          <ul className="d-flex flex-row justify-content-end me-5">
            <li className="list-unstyled p-2 mx-4">
              <a className="text-decoration-none" href="#">
                About
              </a>
            </li>
            <li className="list-unstyled p-2 mx-4">
              <a className="text-decoration-none" href="#">
                Projects
              </a>
            </li>
            <li className="list-unstyled p-2 mx-4">
              <a className="text-decoration-none" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="d-flex flex-column align-items-center">
          <div
            style={{
              color: "transparent",
              fontFamily: "Poppins",
              letterSpacing: "5px",
              fontSize: "48px",
              fontWeight: "800",
              WebkitTextStroke: "3px #000",
              lineHeight: "35px",
            }}
          >
            HOLA, YO SOY
          </div>
          <div
            style={{
              fontFamily: "Syncopate",
              fontSize: "3.2rem",
              position: "relative",
              zIndex: "1"
            }}
            onMouseOver={() => {
              setStartCounter(true);
            }}
            onMouseOut={() => {
              setStartCounter(false);
            }}
          >
            EDUARDO RAMÓN
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: "-1",
                top: "0px",
                left: "0px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  backgroundImage:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Location_dot_lightgrey.svg/2000px-Location_dot_lightgrey.svg.png)",
                  backgroundRepeat: "repeat-x",
                  backgroundPositionX: counter,
                  backgroundSize: "5%",
                  width: "100%",
                  height: "100%",
                  top: "45%",
                }}
              ></div>
            </div>
          </div>
          <div style={{}}>Just a Coder</div>
        </div>
        <div
          className="ps-3"
          style={{
            fontFamily: "poppins",
            fontSize: "180px",
            fontWeight: "800",
          }}
        >
          CODER
        </div>
      </div>
    </div>
  );
}
