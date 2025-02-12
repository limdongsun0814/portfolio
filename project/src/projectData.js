// 멍줍, 빵이오, 자바 개인 프로젝트, 스마트팜, 탭검사기, 수로, 졸업논문
const projects = [
  {
    title: "멍줍",
    image: "./images/멍줍.png",
    description: [
      {
        titleDescription: "프로젝트 개요",
        descriptionList: [
          "  - 반려인들을 위한 양육생활 지원하는 Application",
          "  - 분산된 여러 기능을 하나의 Apllication으로 제공하는 통합앱",
        ],
      },
      {
        titleDescription: "서비스 특징",
        descriptionList: [
          "  - OpenStreetMap API를 사용한 내비게이션, 산책 대시보드",
          "  - 완전탐색 알고리즘을 사용한 카드 혜택",
          "  - 크롤링을 활용한 숨은 가맹점 추천",
          "  - 유기견 전단지 팝업",
          "  - 딥러닝 모델을 사용한 피부 질환 검사, 강아지 이미지 검색",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: [
          "  DB 설계 , 최대 해택 , 딥러닝 모델 설계, CSS 및 기능 통합",
        ],
      },
    ],
    tools: ["React", "Javascript", "Spring Boot", "MySQL", "Python"],
    github: "https://github.com/shinhan3/mungzoup",
    linkCheck: false,
    link: "",
    video: "멍줍.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQTv1L2z1RLyQ5awm81_5uFQAXm0kqd4RWxgYk8oj6wF0AY",
    day: "2024-01-08 ~ 2024-02-29 참여 인원: 6",
  },
  {
    title: "동네빵집 플랫폼",
    image: "./images/빵이오.png",
    description: [
      {
        titleDescription: "프로젝트 개요",
        descriptionList: [
          "   - 동네 빵집에서 갓 나온 따뜻한 빵을 소비자에게 제공하는 플랫폼",
        ],
      },
      {
        titleDescription: "서비스 특징",
        descriptionList: [
          "   - 소셜 로그인(카카오, 네이버) 및 아이디 저장",
          "   - SSE 통신을 사용한 소비자와 판매자 알람 서비스",
          "   - 지속적인 사용을 위한 자동 적립 마일리지 시스템",
          "   - 카카오 지도 API와 다음 주소 API를 사용한 주변 빵집 검색",
          "   - 포트원 결제 API를 이용한 결제 시스템",
          "   - 판매자 메뉴 및 재고 관리 시스템",
          "   - 갤린더와 조건 검색을 통한 대시보드",
          "   - 소비자의 편리성을 올리기 위한 메뉴 및 가게 검색 시스템",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: [
          "  DB 설계 및 docker 배포 , 회원가입 및 로그인, 장바구니, 결제, 검색",
        ],
      },
    ],
    tools: ["JSP", "Javascript", "Spring framework", "mariaDB"],
    github: "https://github.com/limdongsun0814/4shinhan",
    linkCheck: false,
    link: "",
    video: "025.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQRIC_Tb6TXURrUAY07tsrWxARIBNhlWn513MDfruiF6Z3M",
    day: "2023-11-03 ~ 2024-01-05 참여 인원: 6",
  }, //이미지

  {
    title: "스마트 밸브",
    image: "./images/수로.png",
    description: [
      {
        titleDescription: "프로젝트 개요",
        descriptionList: [
          "   - 인터넷이 되지 않은 환경에서 수로 벨브 제어 및 상태를 송수신하는 시스템",
          "   - 수로 벨브의 고장 판별 시스템",
        ],
      },
      {
        titleDescription: "서비스 특징",
        descriptionList: [
          "   - 수로와 게이트웨이 간 LoRa를 이용해 연결하는 데이터 송수신 시스템",
          "   - 수로의 상태를 실시간 모니터링 및 대시보드를 통한 시각화",
          "   - 딥러닝 모델을 통한 수로 고장 유형 판별 시스템",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: ["  수로 벨브 제어, 유선 통신, LoRa, 회로 설계"],
      },
    ],
    tools: ["Arduino", "PHP", "Python", "Tensorflow", "MySQL"],
    github: "https://github.com/limdongsun0814/SmartValve",
    linkCheck: true,
    link: "https://www.mdpi.com/2075-1702/10/8/659",
    video: "스마트벨브.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQQztbhUAFW9Q7yuGyk7MVvsAYptZPvDNaD-oF4Bgx1IJZc",
    day: "2020-06-28 ~ 2021-12-28 참여 인원: 4",
  },
  {
    title: "스마트팜",
    image: "./images/스마트팜.png",
    description: [
      {
        titleDescription: "프로젝트 개요",
        descriptionList: [
          "   - 각종 센서 센싱 및 외부기기 자동제어",
          "   - 최적의 광량을 공급하는 반사판 제어 및 모니터링 시스템",
        ],
      },
      {
        titleDescription: "서비스 특징",
        descriptionList: [
          "   - 반사판 제어 알고리즘",
          "     1. 공장이 처음으로 기동 시 회전 가능한 각도를 전부 탐색하는 scan",
          "     2. scan 이후 경사하강법을 활용한 최적의 광량 제어",
          "   - 스마트팜 모니터링 및 센서 기준치 제어 시스템 ",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: ["센서 센싱, 반사판 제어"],
      },
    ],
    tools: ["Arduino", "Android", "PHP", "MySQL"],
    github: "https://github.com/limdongsun0814/SmartFarm",
    linkCheck: true,
    link: "https://ieeexplore.ieee.org/document/9268238",
    video: "스마트팜.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQQUXJkM9X6OSqB2uwr6WngmAZ6fV6UR3xImQFQ5FIj88EI",
    day: "2019-01-02 ~ 2019-12-29 참여 인원: 4",
  },
  {
    title: "탭 검사기",
    image: "./images/탭검사기.png",
    description: [
      {
        titleDescription: "프로젝트 개요",
        descriptionList: [
          "   - 나사산이 불량인 경우 이상 토크 발생 ",
          "   - 검사기의 토크를 측정해서 나사산의 정상 여부를 판별 및 어플리케이션 개발",
        ],
      },
      {
        titleDescription: "서비스 특징",
        descriptionList: [
          "   - 하드웨어",
          "     a. 접근기",
          "       1. 검사 진행 전 피검사물에 접촉할 수 있도록 해주는 역할",
          "       2. 원을 도출하고 나사산의 규격과 피검사물의 위치를 조절",
          "     b. 검사기",
          "       1. 검사기의 운동에너지를 공급하는 동력부",
          "       2. 공급 받은 회전에너지의 일부분을 직선에너지로 변환하는 회전부",
          "       3. 검사기의 충격 보호 및 다양한 사양의 나사산 검사를 위한 완충부",
          "       4. 피검사물과 접촉해서 검사를 진행하는 검사부",
          "   - Hough Circle Transform 알고리즘을 이용한 나사산 규격 판별",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: ["검사기 모터 제어, 회로 설계"],
      },
    ],
    tools: ["Arduino", "OpenCV", "Python", "Android"],
    github: "https://github.com/limdongsun0814/Tap-Inspection",
    linkCheck: true,
    link: "https://ieeexplore.ieee.org/document/9268255",
    video: "탭 검사기.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQSAn5R9iLFzR4-oj300uw5dAQybz-1UBk8_XjFU9OppIuI",
    day: "2019-01-02 ~ 2019-12-29 참여 인원: 4",
  },
  {
    title: "행성 탐사용 자동화 제어 로봇 개발",
    image: "./images/나사대회.png",
    description: [
      {
        titleDescription: "대회 목표",
        descriptionList: [
          "   - 로봇을 자동 제어하며 자원 탐지 / 자원 채취 / 기지 복귀 미션을 연속적으로 수행하면서 점수를 획득하는 대회",
        ],
      },
      {
        titleDescription: "대회 규칙",
        descriptionList: [
          "   - 로봇의 종류는 총 3가지 자원을 탐지하는 Scout, 채취하는 Excavator, 수송하는 Hauler",
          "   - 로봇들은 공통적으로 IMU, LIDAR 센서, 스테레오 카메라 제공",
          "   - 로봇들의 배터리는 태양광 패널 또는 Repair Station에서 충전 가능",
          "   - Hauler가 Plant에 광물을 제출하면 점수 획득",
        ],
      },
      {
        titleDescription: "특징",
        descriptionList: [
          "   - IMU, SALM에서 발생된 누적 오차 제거를 위한 이미지 기반 좌표 보정",
          "   - YOLO를 사용한 이미지 분류",
          "   - 판별되지 못한 암석을 LIDAR 센서의 연속성로 감지로 추가로 판별 및 회피 기동",
        ],
      },
      {
        titleDescription: "담당역할",
        descriptionList: [
          "RTAB SLAM을 이용한 Mapping, YOLO를 이용한 장애물 및 현장 자원 판별, Docker를 통한 배포",
        ],
      },
    ],
    tools: ["Python", "ROS", "OpenCV", "YOLO", "Gazebo", "Docker"],
    github: "https://github.com/limdongsun0814/Space-Robotics-Challenge",
    linkCheck: true,
    link: "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=7b741b8df56ce8f9ffe0bdc3ef48d419",
    video: "나사대회.mp4",
    videoMobile:
      "https://1drv.ms/v/c/dd3bc808d6b4a8bc/IQSpXT6HZihqRbwGrFkOSPrnAbrNePIengppe4bW8izCrV8",
    day: "2020-03-16 ~ 2021-06-30 참여 인원: 4",
  },
  // {
  //   title: "졸업 논문",
  //   image: "./images/멍줍.png",
  //   description: [
  //     {
  //       titleDescription: "수행목표",
  //       description:
  //         "반려인을 위해 분산되어 있는 여러 기능을 하나로 통합한 어플로 사용자의 편의성을 높이고 일관된 사용자 경험을 제공하기 위한 어플",
  //     },
  //     {
  //       titleDescription: "담당역할",
  //       description:
  //         "카드 최대 혜택,  카드 페이지, CSS 통합, 실종 반려견 찾기 딥러닝 모델 생성, 피부 질환 딥러닝 모델 생성",
  //     },
  //   ],
  //   tools: ["Python", "ROS", "OpenCV", "YOLO"],
  //   github: "https://github.com/shinhan3/mungzoup",
  //   linkCheck: true,
  //   link: "https://www.sciencedirect.com/science/article/pii/S2405959523000887?utm_campaign=STMJ_AUTH_SERV_PUBLISHED&utm_medium=email&utm_acid=276945937&SIS_ID=&dgcid=STMJ_AUTH_SERV_PUBLISHED&CMX_ID=&utm_in=DM396771&utm_source=AC_",
  //   day: "2021-12-01 ~ 2022-08-31 참여 인원 [1]",
  // },
];

export default projects;
