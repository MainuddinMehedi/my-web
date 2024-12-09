import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Follow = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Follow</h2>
      <div className="space-y-2 text-base">
        <ul className="space-y-2">
          <li className="space-x-2">
            <a href="" className="space-x-2">
              <FontAwesomeIcon icon={faLinkedin} className="text-green-400" />
              <a href="">Linkedin</a>
            </a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon icon={faFacebook} className="text-green-400" />
            <a href="">Facebook</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon icon={faInstagram} className="text-green-400" />
            <a href="">Instagram</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon icon={faTwitter} className="text-green-400" />
            <a href="">Twitter</a>
          </li>
          <li className="space-x-2">
            <FontAwesomeIcon icon={faGithub} className="text-green-400" />
            <a href="">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Follow;
