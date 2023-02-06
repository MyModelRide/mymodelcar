import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavDrawer = (props) => {
  const { width } = useWindowSize();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const style = {
    list: "list-none cursor-pointer  text-white my-3  mx-auto md:mx-4 hover:opacity-[0.8] text-sm",
  };
  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(0,0,0)",
        backgroundColor: "#0647D4",

        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="h-[60vh] font flex flex-col my-12 bg-[#0647D4] items-center"
          style={{ fontFamily: "Poppins, serif" }}
        >
          {/* <Image src={""} height={1} width={1}/> */}
          <div className="mx-auto my-16">
            <img src={"/logo_black.svg"} height={150} width={150} />
          </div>{" "}
          {/* adding the navs */}
          <ul className="flex  flex-col">
            <Link href="/" className="text-center">
              <li className={style.list} onClick={() => props.onScroll("home")}>
              НАЧАЛО
              </li>
            </Link>
            <Link href="/purchase">
              <li
                className={style.list}
                onClick={() => props.onScroll("about")}
              >
               ЗА НАС
              </li>{" "}
            </Link>

            <Link href="/blog" className={style.list}>
              <li className={style.list}>БЛОГ</li>
            </Link>
          </ul>
          <Link href="/purchase">
            <button className="mx-auto bg-white rounded text-gray-900 px-12 py-2 mt-80  cursor-pointer hover:opacity-[0.9]">
              ПОРЪЧАЙ СЕГА!
            </button>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="px-2 my-1 flex items-center justify-between w-[100vw]"
          >
            {" "}
            <div>
              <img src={"/logo_colour.svg"} height={150} width={150} />
            </div>
            <div className="">
              {
                <svg
                  viewBox="0 0 100 80"
                  width="30"
                  height="20"
                  style={{ fill: "#0647D4" }}
                >
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>
              }
            </div>
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              hideBackdrop={false}
              style={{
                zIndex: 20,
              }}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
