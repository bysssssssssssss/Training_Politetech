import { useEffect } from "react";

const Map = ({ updateLocation, offFill, handleSelectArea }: any) => {
  const handleClickMap = (id: string) => {
    handleSelectArea();
    const result = id.split("_")[0];
    console.log(result);

    updateLocation(result);
    const squares = document.querySelectorAll(".mp");
    let active = document.querySelector(`#${id}`);

    squares.forEach((square) => {
      square.classList.remove("fill-[#009fe5]");
    });
    active?.classList.add("fill-[#009fe5]");
  };
  useEffect(() => {
    if (offFill) {
      const squares = document.querySelectorAll(".mp");
      squares.forEach((square) => {
        square.classList.remove("fill-[#009fe5]");
      });
    }
  });
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 729 634"
        className=""
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.775"
            y1="1.079"
            x2="0.386"
            y2="0.26"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.995" stopColor="#b6e9ff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="0.008"
            y1="0.5"
            x2="0.945"
            y2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#0066c1" />
            <stop offset="0.995" stopColor="#009fe5" />
          </linearGradient>
        </defs>
        <g
          id="스칼렛_동의대_깨바부_시설현황_지도_디자인_v1.5"
          data-name="스칼렛_동의대 깨바부 시설현황 지도 디자인_v1.5"
          transform="translate(3 3)"
        >
          <g id="bg" transform="translate(-3 -3)">
            <rect
              id="사각형_2072"
              data-name="사각형 2072"
              width="729"
              height="634"
              fill="url(#linear-gradient)"
            />
            <path
              id="패스_1277"
              data-name="패스 1277"
              d="M625.04,72.6S636,59,639,53s-1-14,2-22,9.84-11,13.92-14S670.5,0,670.5,0H0V557s75.03-18.95,80.5-21.5c22.5-10.5,48-63,72-96s18.05-26.87,67.28-84.19S379.42,207.16,432.71,180.58,625.04,72.6,625.04,72.6"
              fill="#c1cad1"
            />
          </g>
          <g id="shadow">
            <path
              id="패스_1278"
              data-name="패스 1278"
              d="M663.71,125.23c-3.91-6.29-8.71-15.24-14.31-15.64s-16-.8-17.2-7.47,1.73-11.86-.53-14.13-5.47-3.33-3.33-6.27,9.2-8.13,2.4-16.93-16.66-23.2-22.8-24.53-11.73-2.8-12.93,1.2,1.33,4.67-2.93,4.67-8.67-.27-10.66,3.47-16.13,3.07-23.06,2.4-20.8-10.8-23.86-8.27-4.27,8-.27,12.93,4.53,7.6,2.27,14.53-16.93,21.46-23.2,21.46-23.73-10.4-26.93-11.73-19.33-3.33-21.46-.53,2,15.86-2.27,20.13-12.13,5.87-10.13,11.46,7.07,9.6,2.93,11.2c-2.84,1.1-12.37,4.53-17.13,14.98-2.16,4.74-3.34,10.94-2.47,19.01,0,0-15.06,4.53-19.73,5.33s-6.4-.27-7.73,4-6.67,13.06-12,13.73-5.87-7.87-10.13-6.8c-1.48.37-4,2.17-6.68,4.75-5.05,4.87-10.66,12.53-10.92,18.71,0,0-8-.93-9.07.67s-.53,4.4-4.27,3.2-8.67-7.73-19.06-2.13-19.06,56.39-23.6,59.86-28.26,12.8-28.26,12.8-40.53-1.47-42.66,1.33-10.93,14.66-17.86,10.66-9.33-6.13-12-2.67-2.67,6.13-7.6,6.13-20.93-1.22-22,3.19-.53,9.74-6,10.14-6.93,1.07-6.93,4.53,17.46,29.33,14.4,35.73-11.6,1.87-11.6,6.4.8,4.8,4.4,9.73,3.33,14.4,0,18.4-49.72,29.6-47.86,33.59,12,19.06,9.07,26.26-4,12-9.2,12.93-8.93-.13-8.93,2.8,1.33,14.53-4,18.13-33.06,20.4-33.99,28.13-1.73,40.56,3.07,46.84,33.68,57.83,39.59,58.94,15-6,21-12c7.21-7.21,15.37-19.52,15-33s3.85-52.18,6.24-55.52c3.47-4.85,37.72,4.48,48.09,2.68.31-.05.61-.12.88-.19,9.14-2.58,18.27-13.7,18.27-19.86s2.38-18.47,2.38-18.47,14.1-.4,19.66-3.57,14.3-13.11,15.49-8.34-5.96,28.99,0,46.67,9.53,22.24,9.53,29.39,3.18,11.12,8.74,10.72,11.12-9.14,10.53-20.26.99-18.07,3.57-15.09,10.93,16.1,15.57,14.9-1.55-24.04,2.23-35.54,6.87-13.22,7.73-6.35-1.55,15.8,2.92,19.92.17,15.11,4.46,17.86c2.26,1.44,4.7,3.74,6.72,3.52,1.81-.2,3.28-2.43,3.93-9.19,1.37-14.25,4.12-24.72,4.81-31.59s1.72-19.06,1.72-19.06a177.444,177.444,0,0,0,17.49,18.05c1.04.9,2.08,1.76,3.12,2.55,9.79,7.55,12.53,10.99,18.2,10.64s7.38-3.95,7.9,2.23-1.89,5.84,3.61,7.38,8.41,3.43,8.41,7.21,10.13,4.64,14.94,4.46,9.79-10.21,6.01-15.67-13.22-5.45-10.82-10.77,4.98-11.85,1.72-16.48-15.11-1.37-16.83-9.27a30.2,30.2,0,0,0-11.48-17.12,15.254,15.254,0,0,0-1.56-.91c-2-.96-5.4-1.38-8.76-1.54a96.8,96.8,0,0,0-9.92.12l-4.62-8.53s18.48-9.72,20.26-13.63c0,0,1.18,16.23,7.23,16.83a59.1,59.1,0,0,0,6.31.07c5.11-.08,10.34.05,11.58,3.84,1.78,5.45.24,5.92,5.69,6.28s14.93,1.42,17.66-2.25,5.1-4.62,8.89-2.25,7.7,7.58,15.17,1.66,2.37-33.18-.95-36.97-6.16-6.64-6.16-6.64,3.08-4.86.24-9.01-6.28-5.57-2.84-7.35c3.42-1.77,3.79-5.18,3.79-9.52v-.07c0-4.38,13.51.71,15.76-7.82,0,0,6.75-1.54,12.32,2.61s8.65,2.96,11.61,1.3a11.91,11.91,0,0,0,2.41-2.03c2.41-2.47,5.19-5.94,8.61-6.03,4.62-.12,24.88,0,27.37-2.73s5.69-9.01,9.12-10.55,5.57-6.4,5.21-14.93c0,0,32.38-.02,38.09,0s8.47-2.4,7.95-6.55-3.11-21.78-6.05-27.32-7.57-12.59-1.13-26.05c2.64-5.52,5.62-10.06,8.16-14.76,3.66-6.77,6.41-13.88,5.89-24.76-.88-18.44,5.86-61.78,11.13-68.51s.88-10.56,0-13.28a7.022,7.022,0,0,1,3.71-8.16c3.23-1.36,8.67-.17,13.76,3.4s21.58,3.74,27.36.17C665.07,143.92,667.62,131.51,663.71,125.23Z"
              fill="#a2c6dd"
            />
          </g>
          <g id="shadow2">
            <path
              id="패스_1279"
              data-name="패스 1279"
              d="M619.74,50.79c-6.8-8.8-16.66-23.2-22.8-24.53s-11.73-2.8-12.93,1.2,1.33,4.67-2.93,4.67-8.67-.27-10.66,3.47-16.13,3.07-23.06,2.4-20.8-10.8-23.86-8.27-4.27,8-.27,12.93,4.53,7.6,2.27,14.53-16.93,21.46-23.2,21.46-23.73-10.4-26.93-11.73-19.33-3.33-21.46-.53,2,15.86-2.27,20.13-12.13,5.87-10.13,11.46,7.07,9.6,2.93,11.2c-2.84,1.1-12.37,4.53-17.13,14.98-2.16,4.74-3.34,10.94-2.47,19.01,0,0-15.06,4.53-19.73,5.33s-6.4-.27-7.73,4-6.67,13.06-12,13.73-5.87-7.87-10.13-6.8c-1.48.37-4,2.17-6.68,4.75-5.05,4.87-10.66,12.53-10.92,18.71,0,0-8-.93-9.07.67s-.53,4.4-4.27,3.2-8.67-7.73-19.06-2.13-19.06,56.39-23.6,59.86-28.26,12.8-28.26,12.8-40.53-1.47-42.66,1.33-10.93,14.66-17.86,10.66-9.33-6.13-12-2.67-2.67,6.13-7.6,6.13-20.93-1.22-22,3.19-.53,9.74-6,10.14-6.93,1.07-6.93,4.53-.4,14.93,4,18.8,13.46,10.53,10.4,16.93-11.6,1.87-11.6,6.4.8,4.8,4.4,9.73,3.33,14.4,0,18.4-10.62,4.67-11.11-2.67,2.98-15.33-2.89-17.86-5.87,3.73-10,4.27-11.73.8-13.06,5.33-4.13,6.13-10.13,6.27-37.86-5.33-39.06,2.13,3.2,17.86,11.33,24.93,14.26,7.07,19.33,7.07,5.87.13,7.73,4.13,12,19.06,9.07,26.26-4,12-9.2,12.93-8.93-.13-8.93,2.8,1.33,14.53-4,18.13-33.06,20.4-33.99,28.13-1.73,40.56,3.07,46.84,33.68,57.83,39.59,58.94,15-6,21-12c7.21-7.21,15.37-19.52,15-33s3.85-52.18,6.24-55.52c3.47-4.85,37.72,4.48,48.09,2.68.31-.05.61-.12.88-.19,9.14-2.58,18.27-13.7,18.27-19.86s2.38-18.47,2.38-18.47,14.1-.4,19.66-3.57,14.3-13.11,15.49-8.34,80.04,31.82,80.73,24.96,1.72-19.06,1.72-19.06l22.02-19.11-4.62-8.53s18.48-9.72,20.26-13.63c0,0,23.89,16.95,25.12,20.74,1.78,5.45,20.62,7.7,23.34,4.03s5.1-4.62,8.89-2.25,7.7,7.58,15.17,1.66-7.11-43.61-7.11-43.61-6.04-14.57-2.61-16.35,3.79-5.18,3.79-9.52v-.07c0-4.38,13.51.71,15.76-7.82,0,0,6.75-1.54,12.32,2.61s8.65,2.96,11.61,1.3a11.91,11.91,0,0,0,2.41-2.03c2.41-2.47,5.19-5.94,8.61-6.03,4.62-.12,24.88,0,27.37-2.73s5.69-9.01,9.12-10.55,5.57-6.4,5.21-14.93c0,0,32.38-.02,38.09,0s8.47-2.4,7.95-6.55-13.62-39.9-7.18-53.37c2.64-5.52,5.62-10.06,8.16-14.76,3.66-6.77,6.41-13.88,5.89-24.76-.88-18.44,5.86-61.78,11.13-68.51s.88-10.56,0-13.28a7.022,7.022,0,0,1,3.71-8.16C610.4,128.56,626.54,59.59,619.74,50.79Z"
              fill="#aeb9c1"
            />
          </g>
          <g id="map" className="cursor-pointer select-none">
            <g id="금정구">
              <path
                id="금정구_00000111910779191260886870000000681928282307046321_"
                d="M358.94,209.38c-1.87,3.4-3.06,4.76-1.87,8.67s11.51,18.01,10.34,25.83a63.968,63.968,0,0,0-1,11.01c.12,2.68.77,4.56,2.38,4.96,3.4.85,11.04,1.36,11.04,5.95a38.771,38.771,0,0,1,14.61,0c8.16,1.53,13.59,11.21,20.22,12.23s24.8,1.62,24.8,1.62a24.04,24.04,0,0,0,7.11-3.91c2.84-2.49,1.07-11.2,1.07-14.22,0-.72.65-1.46,1.69-2.22,3.33-2.43,10.82-5.07,15.02-7.91,5.51-3.73,6.27-18.94,6.27-18.94-2.62-.87-3.67-7.86-4.37-12.58s-14.5-3.67-18.52-3.67-5.07-5.42-1.4-7.69,4.02-8.04,4.02-11.88-1.57-17.29,0-21.49,4.54-10.83,3.32-13.45-23.63-10.51-23.63-10.51-15.06,4.53-19.73,5.33-6.4-.27-7.73,4-6.67,13.06-12,13.73-5.87-7.87-10.13-6.8c-1.48.37-4,2.17-6.68,4.75-5.05,4.87-10.66,12.53-10.92,18.71a37.839,37.839,0,0,1,.84,6.24C364.03,201.56,360.81,205.98,358.94,209.38Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "금정구_00000111910779191260886870000000681928282307046321_"
                  )
                }
              />
              <text
                id="금정구-2"
                data-name="금정구"
                transform="translate(391.184 227.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  금정구
                </tspan>
              </text>
            </g>
            <g id="동래구">
              <path
                id="동래구_00000132795587867300136570000010207446048903114681_"
                d="M441.6,292.44c-2.13-3.38-2.13-12.8-2.13-12.8s-18.18-.6-24.8-1.62-12.06-10.7-20.22-12.23a38.752,38.752,0,0,0-14.61,0s-6.27,12.51-12.33,23.31a138.016,138.016,0,0,1-7.77,12.66s8.9,5.12,12.28,7.7,2.1,3.87,8.55,3.06,11.13-3.55,10.32-8.07c0,0,.68-.09,1.79-.2,4.75-.48,17.53-1.42,20.79,1.98.42.44.86.88,1.31,1.33,3.84,3.84,8.33,7.81,8.33,7.81s5.13-1.21,10.4-2.8c5.01-1.51,10.15-3.37,11.11-4.84a5.437,5.437,0,0,0,.64-2.86C445.31,300.92,443.25,295.04,441.6,292.44Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "동래구_00000132795587867300136570000010207446048903114681_"
                  )
                }
              />
              <text
                id="동래구-2"
                data-name="동래구"
                transform="translate(385.184 296.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  동래구
                </tspan>
              </text>
            </g>
            <g id="수영구">
              <path
                id="수영구_00000125594870237165953670000012938302248914574261_"
                d="M458.13,346.47c-6.75-4.98-10.13-20.26-12.62-21.68-1.15-.66-5.75-.71-10.36-.57-5.38.16-10.79.57-10.79.57.77,5.86-3.28,18.52-5.77,25.56-1.06,2.99-1.84,4.97-1.84,4.97s9.19,1.31,10.34,7.09,0,16.53,4.13,18.84,12.83,1.38,19.8,12.18c0,0,3.08-4.86.24-9.01s-6.28-5.57-2.84-7.35c3.42-1.77,3.79-5.18,3.79-9.52v-.07c0-4.38,13.51.71,15.76-7.82C468.92,352.04,464.89,351.45,458.13,346.47Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "수영구_00000125594870237165953670000012938302248914574261_"
                  )
                }
              />
              <text
                id="수영구-2"
                data-name="수영구"
                transform="translate(424.964 359.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  수영구
                </tspan>
              </text>
            </g>
            <g id="남구">
              <path
                id="남구_00000050641373921623630250000017656801128593494442_"
                d="M457.19,400.06c-3.32-3.79-6.16-6.64-6.16-6.64-6.97-10.8-15.67-9.86-19.8-12.18s-2.97-13.06-4.13-18.84-10.34-7.09-10.34-7.09h-7.67c-8.98,1.14-6.69,9.63-8.93,12.29a3.649,3.649,0,0,1-1.5,1.02c-2.77,1.07-7.36-.06-10.81.52-4.2.7-1.82,13.71-1.82,13.71a47.292,47.292,0,0,1,1.31,10.56c.19,6.63-1.71,19.43-1.71,19.43s1.18,16.23,7.23,16.83a59.1,59.1,0,0,0,6.31.07c5.11-.08,10.34.05,11.58,3.84,1.78,5.45.24,5.92,5.69,6.28s14.93,1.42,17.66-2.25,5.1-4.62,8.89-2.25,7.7,7.58,15.17,1.66C465.6,431.1,460.5,403.85,457.19,400.06Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "남구_00000050641373921623630250000017656801128593494442_"
                  )
                }
              />
              <text
                id="남구-2"
                data-name="남구"
                transform="translate(410.099 409.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  남구
                </tspan>
              </text>
            </g>
            <g id="부산진구">
              <path
                id="부산진구_00000146462275707625950000000010803996947580548506_"
                d="M407.91,348.65c-.09-.19-.17-.38-.27-.58-2.07-4.14-.41-7.45-2.69-10.97s-5.8-2.07-10.56-2.69-8.07-.62-11.59-3.52-11.8-7.25-15.39-10.35-3.04-3.93-3.87-7.87a81.222,81.222,0,0,0-3.81-10.91c-4.12,5.61-13.68,10.8-20.13,13.85-3.72,1.76-6.41,2.81-6.41,2.81a5.918,5.918,0,0,1,2.11,4.82c-.08,3.22-6.52,8.12-7.92,12.45s-7,11.94-2.24,19.61,6.44,3.34,5.6,12.43-2.52,18.19-2.52,18.19,7,4.06,12.03,4.06a32.05,32.05,0,0,0,5.21-.36,10.43,10.43,0,0,0,6.12-2.86c2.38-2.52,1.26-11.75,5.04-10.92s21.69,7.56,29.39,7c0,0-2.38-13.01,1.82-13.71,3.46-.58,8.05.55,10.81-.52a3.585,3.585,0,0,0,1.5-1.02c2.24-2.66-.05-11.15,8.93-12.29A11.538,11.538,0,0,0,407.91,348.65Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "부산진구_00000146462275707625950000000010803996947580548506_"
                  )
                }
              />
              <text
                id="부산진구-2"
                data-name="부산진구"
                transform="translate(342.269 357.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  부산진구
                </tspan>
              </text>
            </g>
            <g id="동구">
              <path
                id="동구_00000164487084978863576750000005133169400819608709_"
                d="M365.36,426.48s18.48-9.72,20.26-13.63c0,0,1.9-12.8,1.71-19.43a47.292,47.292,0,0,0-1.31-10.56c-7.7.56-25.61-6.16-29.39-7s-2.66,8.4-5.04,10.92a10.43,10.43,0,0,1-6.12,2.86h0a52.761,52.761,0,0,1,1.64,12.6c-.17,5.74,0,17.55,0,17.55C348.94,419.29,360.96,426.52,365.36,426.48Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "동구_00000164487084978863576750000005133169400819608709_"
                  )
                }
              />
              <text
                id="동구-2"
                data-name="동구"
                transform="translate(355.099 407.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  동구
                </tspan>
              </text>
            </g>
            <g id="서구">
              <path
                id="서구_00000039847331405843292280000008316873306817049273_"
                d="M335.96,428.86c2.5-3.24,9.32-8.57,11.15-9.07,0,0-.17-11.82,0-17.55a52.76,52.76,0,0,0-1.64-12.6h0a32.129,32.129,0,0,1-5.21.36c-5.04,0-12.03-4.06-12.03-4.06s-9.48-.72-11.59,0-3.4,5.06-3.64,8.58a111.643,111.643,0,0,1-1.98,11.37,75.628,75.628,0,0,0,6.92,12.34c3.61,4.82,6.32,1.81,7.22,9.03s.3,13.85,3.91,13.85,8.73,2.41,5.72,9.63-6.32,14.75-3.61,26.49,4.48,18.93,6.32,36.73c1.81-.2,3.28-2.43,3.93-9.19,1.37-14.25,4.12-24.72,4.81-31.59s1.72-19.06,1.72-19.06-3.34-6.7-5.51-10.86S333.47,432.1,335.96,428.86Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "서구_00000039847331405843292280000008316873306817049273_"
                  )
                }
              />
              <text
                id="서구-2"
                data-name="서구"
                transform="translate(318.099 411.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
              >
                <tspan x="0" y="0">
                  서구
                </tspan>
              </text>
            </g>
            <g id="중구">
              <path
                id="중구_00000165197706250707215650000009127664981163725969_"
                d="M365.36,426.48c-4.39.03-16.41-7.19-18.24-6.69s-8.65,5.82-11.15,9.07,4.33,10.24,6.49,14.4,5.51,10.86,5.51,10.86,4.81-8.7,9.8-10.2a6.234,6.234,0,0,0,.65-.24c4.53-1.8,6.7-7.32,11.56-8.67Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "중구_00000165197706250707215650000009127664981163725969_"
                  )
                }
              />
              <text
                id="중구-2"
                data-name="중구"
                transform="translate(340.424 439.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  중구
                </tspan>
              </text>
            </g>
            <g id="사하구">
              <path
                id="사하구_00000158023192948642716160000013217504338164394640_"
                d="M331.19,477.23c-2.71-11.74.6-19.26,3.61-26.49s-2.11-9.63-5.72-9.63-3.01-6.62-3.91-13.85-3.61-4.21-7.22-9.03a76.072,76.072,0,0,1-6.92-12.34s-7.83,0-15.35.3-7.83,7.83-12.34,8.13-19.93-12.08-19.93-12.08a106.975,106.975,0,0,0-12.08,7.43c-6.29,4.49-13.01,10.48-14.68,16.47-3.34,11.95-6.27,33.99-6.27,33.99s14.1-.4,19.66-3.57,14.3-13.11,15.49-8.34-5.96,28.99,0,46.67,9.53,22.24,9.53,29.39,3.18,11.12,8.74,10.72,11.12-9.14,10.53-20.26.99-18.07,3.57-15.09,10.93,16.1,15.57,14.9-1.55-24.04,2.23-35.54,6.87-13.22,7.73-6.35-1.55,15.8,2.92,19.92.17,15.11,4.46,17.86c2.26,1.44,4.7,3.74,6.72,3.52A244.809,244.809,0,0,0,331.19,477.23Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "사하구_00000158023192948642716160000013217504338164394640_"
                  )
                }
              />
              <text
                id="사하구-2"
                data-name="사하구"
                transform="translate(278.184 451.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  사하구
                </tspan>
              </text>
            </g>
            <g id="강서구">
              <path
                id="강서구_00000132056455426864323110000016453718777593501341_"
                d="M306.87,252.5c-4.53,3.47-28.26,12.8-28.26,12.8s-40.53-1.47-42.66,1.33-10.93,14.66-17.86,10.66-9.33-6.13-12-2.67-2.67,6.13-7.6,6.13-20.93-1.22-22,3.19-.53,9.74-6,10.14-6.93,1.07-6.93,4.53-.4,14.93,4,18.8,13.46,10.53,10.4,16.93-11.6,1.87-11.6,6.4.8,4.8,4.4,9.73,3.33,14.4,0,18.4-10.62,4.67-11.11-2.67,2.98-15.33-2.89-17.86-5.87,3.73-10,4.27-11.73.8-13.06,5.33-4.13,6.13-10.13,6.27-37.86-5.33-39.06,2.13,3.2,17.86,11.33,24.93,14.26,7.07,19.33,7.07,5.87.13,7.73,4.13,12,19.06,9.07,26.26-4,12-9.2,12.93-8.93-.13-8.93,2.8,1.33,14.53-4,18.13-33.06,20.4-33.99,28.13-1.73,40.56,3.07,46.84,33.68,57.83,39.59,58.94,15-6,21-12c7.21-7.21,15.37-19.52,15-33s3.85-52.18,6.24-55.52c3.47-4.85,37.72,4.48,48.09,2.68.31-.05.61-.12.88-.19,9.14-2.58,18.27-13.7,18.27-19.86s2.38-18.47,2.38-18.47,2.93-22.04,6.27-33.99c1.67-5.99,8.39-11.98,14.68-16.47a106.974,106.974,0,0,1,12.08-7.43s2.14-18.62.48-30.57,1.39-6.39,3.89-13.9,2.78-22.24,2.78-28.35,20.23-21.93,20.23-21.93a92.068,92.068,0,0,0,6.97-7.11c3.19-3.63,6.5-8.08,7.6-11.89C307.69,280.42,306.87,252.5,306.87,252.5Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "강서구_00000132056455426864323110000016453718777593501341_"
                  )
                }
              />
              <text
                id="강서구-2"
                data-name="강서구"
                transform="translate(175.184 409.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  강서구
                </tspan>
              </text>
            </g>
            <g id="사상구">
              <path
                id="사상구_00000102526843389255976790000001168854991468141698_"
                d="M325.15,355.31c-4.76-7.68.84-15.27,2.24-19.61s7.84-9.24,7.92-12.45a5.95,5.95,0,0,0-2.11-4.82c-6.25,2.1-11.71-3.14-17.96-6.26s-24.46-4.68-24.46-4.68-20.23,15.82-20.23,21.93-.28,20.85-2.78,28.35-5.56,1.95-3.89,13.9-.48,30.57-.48,30.57,15.42,12.38,19.93,12.08,4.82-7.83,12.34-8.13,15.35-.3,15.35-.3A111.643,111.643,0,0,0,313,394.52c.23-3.52,1.52-7.86,3.64-8.58s11.59,0,11.59,0,1.68-9.1,2.52-18.19S329.9,362.99,325.15,355.31Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "사상구_00000102526843389255976790000001168854991468141698_"
                  )
                }
              />
              <text
                id="사상구-2"
                data-name="사상구"
                transform="translate(279.184 367.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  사상구
                </tspan>
              </text>
            </g>
            <g id="북구">
              <path
                id="북구_00000101102785408805571050000012439872049251598762_"
                d="M368.79,259.84c-1.62-.4-2.26-2.28-2.38-4.96a63.968,63.968,0,0,1,1-11.01c1.17-7.82-9.16-21.92-10.34-25.83s0-5.27,1.87-8.67,5.1-7.82,4.76-12.23a37.839,37.839,0,0,0-.84-6.24s-8-.93-9.07.67-.53,4.4-4.27,3.2-8.67-7.73-19.06-2.13-19.06,56.39-23.6,59.86c0,0,.82,27.92-1.52,35.99-1.11,3.81-4.42,8.25-7.6,11.89a92.068,92.068,0,0,1-6.97,7.11s18.22,1.56,24.46,4.68,11.71,8.35,17.96,6.26c0,0,2.69-1.05,6.41-2.81,6.45-3.05,16.01-8.25,20.13-13.85a140.28,140.28,0,0,0,7.77-12.66c6.06-10.8,12.33-23.31,12.33-23.31C379.84,261.2,372.19,260.69,368.79,259.84Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "북구_00000101102785408805571050000012439872049251598762_"
                  )
                }
              />
              <text
                id="북구-2"
                data-name="북구"
                transform="translate(326.099 271.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  북구
                </tspan>
              </text>
            </g>
            <g id="영도구">
              <path
                id="영도구_00000114034462495395931200000000960342999496258442_"
                d="M427.63,490.99c-3.78-5.45-13.22-5.45-10.82-10.77s4.98-11.85,1.72-16.48-15.11-1.37-16.83-9.27a30.2,30.2,0,0,0-11.48-17.12,15.254,15.254,0,0,0-1.56-.91c-2-.96-5.4-1.38-8.76-1.54a96.8,96.8,0,0,0-9.92.12c-4.86,1.35-7.03,6.87-11.56,8.67-.21.09-.43.17-.65.24-4.99,1.5-9.8,10.2-9.8,10.2a177.444,177.444,0,0,0,17.49,18.05c1.04.9,2.08,1.76,3.12,2.55,9.79,7.55,12.53,10.99,18.2,10.64s7.38-3.95,7.9,2.23-1.89,5.84,3.61,7.38,8.41,3.43,8.41,7.21,10.13,4.64,14.94,4.46C426.42,506.48,431.4,496.44,427.63,490.99Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "영도구_00000114034462495395931200000000960342999496258442_"
                  )
                }
              />
              <text
                id="영도구-2"
                data-name="영도구"
                transform="translate(363.444 466.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  영도구
                </tspan>
              </text>
            </g>
            <g id="연제구">
              <path
                id="연제구_00000017494782072219006100000009124875673660415882_"
                d="M424.36,324.79l-1.24-9.42s-4.5-3.97-8.33-7.81c-.45-.45-.89-.89-1.31-1.33-3.26-3.4-16.04-2.46-20.79-1.98-1.12.11-1.79.2-1.79.2.81,4.52-3.87,7.26-10.32,8.07s-5.16-.48-8.55-3.06-12.28-7.7-12.28-7.7a81.222,81.222,0,0,1,3.81,10.91c.83,3.93.28,4.76,3.87,7.87s11.87,7.45,15.39,10.35,6.83,2.9,11.59,3.52,8.28-.83,10.56,2.69.62,6.83,2.69,10.97c.1.2.18.39.27.58a11.878,11.878,0,0,1,1.17,6.67h7.67s.78-1.98,1.84-4.97C421.08,343.31,425.14,330.65,424.36,324.79Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "연제구_00000017494782072219006100000009124875673660415882_"
                  )
                }
              />
              <g id="그룹_646" data-name="그룹 646">
                <text
                  id="연제구-2"
                  data-name="연제구"
                  transform="translate(382.184 327.309)"
                  fontSize="13"
                  fontFamily="'S-Core Dream \33 '"
                  fontWeight="300"
                  letterSpacing="-0.03em"
                >
                  <tspan x="0" y="0">
                    연제구
                  </tspan>
                </text>
              </g>
            </g>
            <g id="해운대구">
              <path
                id="해운대구_00000164472309099724365310000005709010490707435425_"
                d="M541.2,297.59c-5.24-2.1-7.34-1.05-9.96,5.07s-4.02,7.69-8.91,7.69-5.76-6.46-8.21-12.23-3.49-1.05-9.61-1.05-8.56-2.8-13.45-7.51,1.22-11.53,3.67-14.85,5.76-12.4,5.07-16.94c-.38-2.46-4.84-9.25-9.24-15.19-3.74-5.05-7.45-9.5-8.57-10.14-2.45-1.4-11.35,0-11.35,0s-.76,15.21-6.27,18.94c-4.2,2.84-11.69,5.48-15.02,7.91-1.04.76-1.69,1.5-1.69,2.22,0,3.02,1.78,11.73-1.07,14.22a24.04,24.04,0,0,1-7.11,3.91s0,9.42,2.13,12.8c1.65,2.61,3.7,8.48,3.67,12.42a5.509,5.509,0,0,1-.64,2.86c-.95,1.47-6.09,3.33-11.11,4.84-5.27,1.59-10.4,2.8-10.4,2.8l1.24,9.42s5.41-.41,10.79-.57c4.62-.14,9.21-.09,10.36.57,2.49,1.42,5.87,16.71,12.62,21.68s10.79,5.56,9.84,13.18c0,0,6.75-1.54,12.32,2.61s8.65,2.96,11.61,1.3a11.616,11.616,0,0,0,2.4-2.03c2.41-2.47,5.19-5.94,8.61-6.03,4.62-.12,24.88,0,27.37-2.73s5.69-9.01,9.12-10.55,5.57-6.4,5.21-14.93C543.7,318.75,546.44,299.69,541.2,297.59Z"
                fill="#eaeaea"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleClickMap(
                    "해운대구_00000164472309099724365310000005709010490707435425_"
                  )
                }
              />
              <text
                id="해운대구-2"
                data-name="해운대구"
                transform="translate(460.269 322.309)"
                fontSize="13"
                fontFamily="'S-Core Dream \33 '"
                fontWeight="300"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  해운대구
                </tspan>
              </text>
            </g>
            <g id="기장군_change-2" data-name="기장군-change">
              <g
                transform="matrix(1, 0, 0, 1, -3, -3)"
                filter="url(#기장군-change)"
              >
                map p{" "}
                <path
                  id="기장군_change-3"
                  data-name="기장군_change"
                  d="M657.92,119.23c-3.91-6.29-8.71-15.24-14.31-15.64s-16-.8-17.2-7.47,1.73-11.86-.53-14.13-5.47-3.33-3.33-6.27,9.2-8.13,2.4-16.93-16.66-23.2-22.8-24.53-11.73-2.8-12.93,1.2,1.33,4.67-2.93,4.67-8.67-.27-10.66,3.47S559.5,46.67,552.57,46s-20.8-10.8-23.86-8.27-4.27,8-.27,12.93,4.53,7.6,2.27,14.53-16.93,21.46-23.2,21.46-23.73-10.4-26.93-11.73-19.33-3.33-21.46-.53,2,15.86-2.27,20.13-12.13,5.87-10.13,11.46,7.07,9.6,2.93,11.2c-2.84,1.1-12.37,4.53-17.13,14.98-2.16,4.74-3.34,10.94-2.47,19.01,0,0,22.41,7.89,23.63,10.51s-1.75,9.26-3.32,13.45,0,17.64,0,21.49-.35,9.61-4.02,11.88-2.62,7.69,1.4,7.69,17.82-1.05,18.52,3.67,1.75,11.7,4.37,12.58c0,0,8.91-1.4,11.35,0,1.12.64,4.83,5.08,8.57,10.14,4.41,5.95,8.87,12.74,9.24,15.19.7,4.54-2.62,13.63-5.07,16.94s-8.56,10.13-3.67,14.85,7.34,7.51,13.45,7.51,7.16-4.72,9.61,1.05,3.32,12.23,8.21,12.23,6.29-1.57,8.91-7.69,4.72-7.16,9.96-5.07,2.5,21.16,3.43,29.71c0,0,32.38-.02,38.09,0s8.47-2.4,7.95-6.55-3.11-21.78-6.05-27.32-7.57-12.59-1.13-26.05c2.64-5.52,5.62-10.06,8.16-14.76,3.66-6.77,6.41-13.88,5.89-24.76-.88-18.44,5.86-61.78,11.13-68.51s.88-10.56,0-13.28a7.022,7.022,0,0,1,3.71-8.16c3.23-1.36,8.67-.17,13.76,3.4s21.58,3.74,27.36.17S661.83,125.51,657.92,119.23Z"
                  transform="translate(3 3)"
                  fill="#eaeaea"
                  stroke="#fff"
                  className="mp hover:fill-[#B7DCFF] transition-all duration-500 ease-in-out"
                  onClick={() => handleClickMap("기장군_change-3")}
                />
              </g>
              <text
                id="기장군"
                transform="translate(514.422 177.445)"
                fontSize="13"
                fontFamily="'S-Core Dream \37 '"
                fontWeight="800"
                letterSpacing="-0.03em"
              >
                <tspan x="0" y="0">
                  기장군
                </tspan>
              </text>
            </g>
          </g>
          <g id="frame">
            <g id="그룹_649" data-name="그룹 649" transform="translate(-3 -3)">
              <g id="그룹_648" data-name="그룹 648">
                <path
                  id="패스_1280"
                  data-name="패스 1280"
                  d="M725,4V630H4V4H725m4-4H0V634H729V0Z"
                  fill="#efefef"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Map;
