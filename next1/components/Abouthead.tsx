import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";

export default function Abouthead() {
  return (
    <>
      <div className={`d-flex justify-content-center  ${styles.Abouthead__1}`}>
        <img
          className={`${styles.avtarabout__1}`}
          src="https://static.wixstatic.com/media/ad420a_d1da9539608c45e7aec90beb81f16e7e~mv2.jpg/v1/crop/x_248,y_0,w_2967,h_3413/fill/w_335,h_385,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-557608537.webp"
          alt="avtar"
        />
      </div>
      <div className={`container text-center ${styles.avtarabout__2}`}>
        <h1 className="display-4">ABOUT ME</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <p className="mt-4 text-center">
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and
              drop me anywhere you like on your page. I’m a great place for you
              to tell a story and let your users know a little more about you.
            </p>

            <p className="my-5 text-center ">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
