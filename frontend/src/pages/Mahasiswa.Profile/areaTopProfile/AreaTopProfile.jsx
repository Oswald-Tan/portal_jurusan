import "./AreaTopProfile.scss";
import ProfileM from "../../../assets/images/foto.jpg";
import AreaDetailsProfile from "../areaDetailsProfile/AreaDetailsProfile";
import AreaDetailsProfileOrangtua from "../areaDetailsProfileOrangtua/AreaDetailsProfileOrangtua";
import AreaDetailsProfilePerwalian from "../areaDetailsProfilePerwalian/AreaDetailsProfilePerwalian";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const AreaTopProfile = () => {
  return (
    <div className="area-profile">
      <div className="area-container">
        <div className="area-profile-top">
          <div className="area-profile-details">
            <img className="area-profile-img" src={ProfileM} alt="Area Profile" />
            <div className="area-profile-top1">
              <h3 className="area-profile-name">Oswald Tanlee Pongayow</h3>
              <p className="area-profile-nim">20024038</p>
              <div className="area-profile-contact">
                <p className="area-profile-email">oswaldtanlee44@gmail.com</p>
                <p className="garis">|</p>
                <p className="area-profile-phone">+62 821-5492-6917</p>
              </div>
            </div>
          </div>

          <button type="button" className="edit-details-mahasiswa">
            <BiSolidMessageSquareEdit size={16} />
            Edit
          </button>
        </div>
        <div className="area-profile-details">
          <AreaDetailsProfile />
          <AreaDetailsProfileOrangtua />
          <AreaDetailsProfilePerwalian />
        </div>
      </div>
    </div>
  );
};

export default AreaTopProfile;
