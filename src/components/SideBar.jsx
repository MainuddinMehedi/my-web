import Follow from "./Follow";
import NavLinks from "./NavLinks";
import RecentPhotos from "./RecentPhotos";
import Tags from "./Tags";

const SideBar = () => {
  return (
    <div className="space-y-7 bg-[#151b1fbd] p-8 text-[1.02rem]">
      <NavLinks />
      <Follow />
      <RecentPhotos />
      <Tags />
    </div>
  );
};

export default SideBar;
