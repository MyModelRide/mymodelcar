import "../styles/globals.css";
import React from "react";
import Cookies from "js-cookie";
import HttpsRedirect from "react-https-redirect";

import Pixel from "../components/Pixel";
function MyApp({ Component, pageProps }) {
  Cookies.set("car", "cars");
  Cookies.set("cars", "vehicles");
  Cookies.set("ride", "racing");
  Cookies.set("purchase", "website for purchasing the products releted to car");

  return (
    <HttpsRedirect>
      <div
        className="overflow-x-hidden"
        style={{ fontFamily: "Poppins,serif" }}
      >
        <Pixel name="FACEBOOK_PIXEL_1" />
        <Component {...pageProps} />
      </div>
    </HttpsRedirect>
  );
}

export default MyApp;
// export async function getStaticProps(context) {
//   return {
//     // the data in the props will be passed to the above function at the build time
//     props: {}, // will be passed to the page component as props
//   }
// }
