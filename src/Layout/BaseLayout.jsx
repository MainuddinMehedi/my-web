import Footer from "../components/Footer";
import HeadingName from "../components/HeadingName";
import SideBar from "../components/SideBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12">
          <HeadingName />
        <div className="flex flex-row">
          <div className="w-3/12">
            <SideBar />
          </div>
          <div className="w-9/12 px-8 py-6">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
