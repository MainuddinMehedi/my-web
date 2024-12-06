import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="space-y-7 p-8 text-[1.02rem]">
      <div className="">
        <h2 className="text-2xl mb-4 font-bold">Explore</h2>
        <div className="">
          <ul className="space-y-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/now-page"}>Now Page</Link>
            </li>
            <li>
              <Link to={"/books"}>Books Read</Link>
            </li>
            <li>
              <Link to={"/quotes"}>My Quote</Link>
            </li>
            <li>
              <Link to={"/starting-stories"}>The way i got into it</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-2xl font-bold">
        <h2>Follow</h2>
      </div>

      <div className="text-2xl font-bold">
        <h2>Recent Photos</h2>
      </div>

      <div className="text-2xl font-bold">
        <h2>Tags</h2>
      </div>
    </div>
  );
};

export default NavLinks;
