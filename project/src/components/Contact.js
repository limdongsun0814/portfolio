import React, { createElement, useContext, useEffect, useState } from "react";
import { getTotalActiveUsersAndScreenPageViews } from "../utils/GA4";
import classNames from "classnames";
import { WindowWidthSize } from "../App";

const Contact = () => {
  const [sendMail, setSendMail] = useState(false);
  const [mail, setMail] = useState({ title: "", message: "" });
  const windowWidth = useContext(WindowWidthSize);

  let modal;

  if (windowWidth >= 889) {
    modal = "w-1/4";
  } else {
    modal = "";
  }

  function changeMail(index, value) {
    setMail({ ...mail, [index]: value });
  }
  function sendMailFunc(e) {
    e.preventDefault();

    const url = "mailto:asme12@naver.com";
    const a = document.createElement("a");

    a.href = `${url}?subject=${mail.title}&body=${mail.message}`;

    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 1000);
    a.remove();

    setSendMail(false);
    //setMail({ title: "", message: "" });
  }

  return (
    <section className="my-28">
      {sendMail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={classNames("p-6 rounded-lg shadow-lg bg-gray", modal)}
          >
            <form
              className="flex flex-col justify-end w-full m-auto space-y-3"
              onSubmit={(e) => sendMailFunc(e)}
            >
              <label htmlFor="text">Title</label>
              <input
                type="text"
                id="title"
                className="gradient"
                onChange={(e) => {
                  changeMail(e.target.id, e.target.value);
                }}
                value={mail.title}
                required
              ></input>
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                cols="25"
                rows="5"
                className="gradient"
                onChange={(e) => {
                  changeMail(e.target.id, e.target.value);
                }}
                value={mail.message}
                required
              ></textarea>
              <div className="py-1 text-right">
                <button
                  className="px-4 py-2 font-bold text-gray-500 rounded bg-gray hover:bg-zinc-800"
                  type="button"
                  onClick={() => {
                    setSendMail(false);
                  }}
                >
                  취소
                </button>
                <button className="px-4 py-2 ml-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-700">
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <header className="px-5 pt-0 pb-3 text-2xl font-bold border-b-2 ">
        {/* <h2 className="mb-1">Thank You!!!</h2>
        <p className="text-base font-thin mb-0.5">
          지속적인 자기 개발을 통해{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            성장
          </span>
          하며, 팀원과{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            소통
          </span>
          하며 성장하는 개발자입니다.
        </p> */}
      </header>
      {/* <div className="flex flex-col flex-wrap justify-between md:mx-6 md:flex-row"> */}
      <div className="md:mx-6">
        <div className="flex justify-between float-right w-full p-5 my-5 md:px-0">
          <div id="contact">
            <p className="text-2xl font-bold">Contact</p>
            {/* 이름 주소 */}
            <div className="inline-block mr-5">
              <p className="font-bold text-orange-200">이름</p>
              <p className="font-thin">임동선</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold text-orange-200">주소</p>
              <p className="font-thin">서울특별시 영등포구 양평동</p>
            </div>
            <div className="inline-block mr-5">
              <div className="flex space-x-3">
                <p className="font-bold text-orange-200">이메일</p>
                <img
                  src="./images/icons/send-email.png"
                  alt=""
                  width="24px"
                  height="24px"
                  className="w-6 mr-1 cursor-pointer"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Send Mail"
                  onClick={() => {
                    setSendMail(true);
                  }}
                />
              </div>
              <p className="font-thin">asme12@naver.com</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-orange-200">Link</p>
            <div className="inline-block mr-5">
              <a
                href="https://github.com/limdongsun0814"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="flex flex-row items-end p-2 text-sm border border-gray-500 rounded-lg"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Github Link"
                >
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>
            <div className="inline-block">
              <a
                href="https://hub.docker.com/u/asme12"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="flex flex-row items-end p-2 text-sm border border-gray-500 rounded-lg text-sky-400"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Docker Link"
                >
                  <img
                    src="./images/icons/docker.png"
                    alt=""
                    width="24px"
                    height="24px"
                    className="w-6 mr-1"
                  />
                  Docker
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
