import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
const style = {
  wrapper: "mt-12 md:mt-16  flex flex-col items-center",
};
const HomeHeaderImage = () => {
  const { width } = useWindowSize();
  // this components hold the image for image in the center
  const HeaderBackground = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${(width < 500 && "/header.jpeg") ||
      (width > 500 && width < 1000 && "/header.jpeg") ||
      (width > 1000 && "/header.jpeg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "80vh" : "80vh"};
    width: 100vw;
  `;
  return (
    <div className={style.wrapper}>
      <p className="h-[7vh] border-[1px] border-[#0647D4]"></p>
      <HeaderBackground> </HeaderBackground>
    </div>
  );
};

export default HomeHeaderImage;
