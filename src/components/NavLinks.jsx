import {
  faAddressCard,
  faArrowAltCircleDown,
  faNewspaper,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faHome,
  faQuoteRight,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl mb-4 font-bold">Explore</h2>
        <div>
          <ul className="space-y-2 text-base">
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon icon={faHome} className="text-green-400" />
                <Link to={"/"}>Home</Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="text-green-400"
                />
                <Link to={"/blogs"}>Blogs</Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon
                  icon={faStreetView}
                  className="text-green-400"
                />
                <Link to={"/now-page"}>Now Page</Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon icon={faBook} className="text-green-400" />
                <Link to={"/books"}>Books Read</Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-green-400"
                />
                <Link to={"/quotes"} className="space-x-2">
                  My Quote
                </Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="text-green-400"
                />
                <Link to={"/starting-stories"}>The way i got into it</Link>
              </a>
            </li>
            <li>
              <a href="" className="space-x-2">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="text-green-400"
                />
                <Link to={"/about"}>About</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
