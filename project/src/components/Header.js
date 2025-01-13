import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { WindowWidthSize } from "../App";

const Header = () => {
  const windowWidth = useContext(WindowWidthSize);
  let navClass;
  let aClass;

  if (windowWidth >= 539) {
    navClass = "space-x-4";
  } else {
    navClass = "space-x-0";
  }

  if (windowWidth >= 474) {
    aClass = "px-5";
  } else if (windowWidth >= 459) {
    aClass = "px-4";
  } else if (windowWidth >= 427) {
    aClass = "px-3";
  } else if (windowWidth >= 395) {
    aClass = "px-2";
  } else {
    aClass = "px-1";
  }

  const pdfDownload = () => {
    axios.get(process.env.REACT_APP_PDF_PATH_SECRET,{
      responseType: 'blob',
    })
    .then((rep)=>{
      const blob = new Blob([rep.data],{type:rep.headers['content-type']});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "임동선 포트폴리오.pdf";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 1000);
      a.remove();
    }).catch((e)=>{console.log(e);});
  };
  return (
    <>
      <nav className="space-x-10">
        <ul
          className={classNames(
            "flex flex-row justify-center  md:space-x-10 md:text-xl md:justify-end font-bold ",
            navClass
          )}
        >
          {windowWidth > 384 && (
            <li>
              <a
                onClick={pdfDownload}
                href="#"
                className={classNames(
                  "py-1 rounded-lg hover:bg-gray focus:bg-gray ",
                  aClass
                )}
              >
                Download PDF
              </a>
            </li>
          )}
          <li>
            <a
              href="#projects"
              className={classNames(
                "py-1 rounded-lg hover:bg-gray focus:bg-gray ",
                aClass
              )}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className={classNames(
                "py-1 rounded-lg hover:bg-gray focus:bg-gray ",
                aClass
              )}
            >
              Skills & Tools
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={classNames(
                "py-1 rounded-lg hover:bg-gray focus:bg-gray ",
                aClass
              )}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {windowWidth >= 768 && (
        <div className="fixed z-10 inline-block bottom-24 right-10">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="grid w-10 h-10 mb-5 text-3xl border-2 rounded-full cursor-pointer place-items-center"
          >
            <img
              alt=""
              src="./images/icons/Group 39 (1).png"
              className=""
            ></img>
          </div>

          <div
            onClick={() => {
              window.scrollTo({ top: 10000000000, behavior: "smooth" });
            }}
            className="grid w-10 h-10 text-3xl border-2 rounded-full cursor-pointer place-items-center"
          >
            <img
              alt=""
              className="rotate-180"
              src="./images/icons/Group 39 (1).png"
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
