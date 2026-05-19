import Image from "next/image";

import fb from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import x from "../../assets/twitter.png";

const FooterPage = () => {
  return (
    <div className=" bg-green-900">
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto h-[30vh] flex flex-col items-center justify-center text-white space-y-5">
        <div className="text-center  space-y-3">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold">
            KeenKeeper
          </h1>
          <p className="opacity-70">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="text-center space-y-3">
          <p className="text-2xl">Social Links</p>
          <div className="flex gap-2">
            <Image src={fb} alt=""></Image>
            <Image src={insta} alt=""></Image>
            <Image src={x} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between sm:flex-row sm:text-start text-center flex-col lg:w-9/12 md:w-10/12 w-11/12 mx-auto text-white space-y-3">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex gap-5 justify-center">
          <p>Privacy Policy</p>
          <p>Terms of</p>
          <p>Service Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
