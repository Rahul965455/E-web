import React from "react";
import Cards from "../Card/Cards";
import "./Fixed.css";
import EmailIcon from '@mui/icons-material/Email';
const Fixed = () => {
  return (
    <>
      <header className="fixed">
        <div className="logo">James Allen</div>
        <nav>
          <ul>
            <li>ENGAGEMENT RINGS</li>
            <li>WEDDING RINGS</li>
            <li>DIAMOND</li>
            <li>JAM STONES</li>
            <li>FINE JEWELRY</li>
            <li>EDUCATION</li>
          </ul>
        </nav>
        <div className="contact"><EmailIcon/></div>
      </header>
      <div className="img">
        <img src="./HPBanner.jpg" alt="" width="20%" height="220px"></img>
      </div>
      <div className="photos">
        <div>
          <img src="./photo.jpg1.jpg" height="197px"></img>
        </div>
        <div>
          <img src="./photo.jpg2.jpg" height="197px"></img>
        </div>
        <div>
          <img src="./photo.jpg3.jpg" height="197px"></img>
        </div>
        <div>
          <img src="./photo.jpg4.jpg" height="197px"></img>
        </div>
        <div>
          <img src="./photo.jpg5.jpg" height="197px"></img>
        </div>
      </div>
      <div className="ring">
        <img src="./ring.jpg" width="100%"></img>
      </div>
      <div className="photos">
        <div>
          <img src="./Wedding.jpg" height="420px"></img>
        </div>
        <div>
          <img src="./box.jpg" height="420px"></img>
        </div>
        <div>
          <img src="./Eternity.jpg" height="420px"></img>
        </div>
      </div>
      <div className="head">
        <div className="james">
          JAMES ALLEN'S BEST SELLING <h1>ENGAGEMENT RINGS</h1>
        </div>
      </div>
      <div className="Rings">
        <div>
          <img src="./pave-engagement.jpg" height="200px"></img>
        </div>
        <div>
          <img src="./Solitaire.jpg" height="400px"></img>
        </div>
        <div>
          <img src="./pave-engagement.jpg" height="200px"></img>
        </div>
      </div>
      <div className="diamond">
        <div className="james">
          EXPERIENCE THE <h1>DIAMOND REVOLUTION</h1>
          <p>
            Spin actual diamonds in 360° HD and zoom in up to 40x. One of the
            world's biggest collections of loose diamonds, at your fingertips.
            heart ring marquise ring
          </p>
        </div>
      </div>
      <div className="diamondphoto">
        <div>
          <img
            src="./diamond.jpg"
            height="200px"
            style={{ marginTop: "50px" }}
          ></img>
        </div>
        <div>
          <img src="./diamond.jpg1.png" height="300px"></img>
        </div>
        <div>
          <img
            src="./diamond.jpg2.png"
            height="200px"
            style={{ marginTop: "50px" }}
          ></img>
        </div>
      </div>
      <div className="find">
        <img src="./last.jpg"></img>
      </div>
      <div className="headpersonal">
        <div className="personal">
        YOUR PERSONAL <h1>DIAMOND CONCIERGE AWAITS...</h1>
        </div>
      </div>
      <Cards/>
    </>
  );
};
export default Fixed;
