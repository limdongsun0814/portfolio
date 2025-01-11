import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="flex flex-col flex-wrap px-5 my-16 space-y-16 md:my-32 md:space-y-0 patterns">
      {/* <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>   */}
      <div className="mb-auto space-y-1 ">
        <h1 className="mb-3 text-5xl font-bold md:text-5xl">
          안녕하세요.
          <br></br>
          임동선입니다.
        </h1>
        <header className="text-2xl font-bold ">
          <h2>Introduction</h2>
        </header>
        <p className="leading-relaxed tracking-wide">
          "모든 서비스에는 사용자가 존재하고,{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            사용자가 사용하기 쉽고 친숙한
          </span>{" "}
          서비스를 개발"을 목표하는 개발자입니다.{" "}
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          대학원 시절에는 주로{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            사물 인터넷(IoT) 연구 개발
          </span>
          을 진행했습니다.
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          졸업 후, '
          <span className="font-bold" style={{ color: "#a162e8" }}>
            IoT 개발자
          </span>
          '라는 꿈을 이루기 위해 JAVA 웹 서비스 풀스택 교육 과정을 이수했습니다.{" "}
        </p>
        {/* <br></br> */}
        <p className="leading-relaxed tracking-wide">
          교육 과정 이수 중에 동네빵집 플랫폼과 멍줍 프로젝트를 통해 RDBMS,
          Backend 개발 역량을 키웠습니다.
        </p>
        {/* <br></br> */}
        {/* css와 디자인 부분 */}
        <p className="leading-relaxed tracking-wide">
          성장의 방향은&nbsp;
          <span className="font-bold" style={{ color: "#a162e8" }}>
            프로젝트
          </span>
          를 통해 역량을 강화하고 팀원과{" "}
          <span className="font-bold" style={{ color: "#a162e8" }}>
            소통
          </span>
          을 통해 지식을 공유하며 성장하는 개발자입니다.
        </p>
        {/* <br></br> 요기 별로다 수정하자 */}
        {/* <p className="leading-relaxed tracking-wide">
          피드백과 다양한 매소드 구현으로 서비스의 성능을 높이는 개발자입니다.
        </p>
        <p className="leading-relaxed tracking-wide">
          <span className="font-bold" style={{ color: "#a162e8" }}>
            주단위 계획
          </span>
          하여 시간을 효율적으로 관리하여 성장하는 개발자입니다.{" "}
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
