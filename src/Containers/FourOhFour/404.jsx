import React from "react";
import {Link} from 'react-router-dom';
import "./style.scss";

const FourOhFour = () => {
  return (
    <div className="xu-404">
      <div className="xu-404__container">
        <div className="xu-404__content-container">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video poster="" autoPlay="autoplay" loop="loop" muted="muted" playsinline="" className="xu-404__video"
                 style={{width: '100%'}}>
            <source src="https://www.nexford.org/-/media/project/nexford/videos/404.mp4"/>
          </video>
        </div>
        <div className="xu-hero__container">
          <div className="xu-hero__content-container">
            <div className="xu-hero__content">
              <div className="xu-hero__heading-wrap">
                <h1 className="xu-hero__heading clearfix">404</h1>
              </div>
              <div className="xu-hero__description">
                <p>Sorry! This page has been lost, but don't lose your
                motivation!</p>
                <p>Continue your journey
                <Link to='/'> here.</Link>
              </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourOhFour;
