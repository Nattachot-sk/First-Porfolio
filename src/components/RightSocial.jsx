import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function RightSocial() {
  return (
    <div className="block w-full h-full">
      <div className="block p-5 text-white text-[24px]">
        <div className="">
          <button>
            <a href="https://www.facebook.com/" target="_blank" className="">
              <span className=""><FontAwesomeIcon icon={faFacebook} /></span>
            </a>
          </button>
        </div>

        <div className="mt-10">
          <button>
            <a href="">
              <span><FontAwesomeIcon icon={faYoutube} /></span>
            </a>
          </button>
        </div>
        <div className="mt-10">
          <button>
            <a href="">
              <span><FontAwesomeIcon icon={faInstagram} /></span>
            </a>
          </button>
        </div>

        <div className="mt-10">
          <button>
            <a href="">
              <span><FontAwesomeIcon icon={faTiktok} /></span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSocial;
