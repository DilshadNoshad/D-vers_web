import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer footer_D-vers">
          <span className="foot_D-vers_n543">
            <b>I, Robot D-vers </b>&copy; 2021. Coded By
            <svg
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Heart__StyledSvg-sc-199y27-0 svg_heart"
            >
              <path
                d="M19 35L16.245 32.4823C6.46 23.5749 0 17.7003 0 10.4905C0 4.6158 4.598 0 10.45 0C13.756 0 16.929 1.54496 19 3.98638C21.071 1.54496 24.244 0 27.55 0C33.402 0 38 4.6158 38 10.4905C38 17.7003 31.54 23.5749 21.755 32.5014L19 35Z"
                fill="#FF7D6E"
                class="Heart"
              ></path>
            </svg>
            <a
              href="https://github.com/DilshadNoshad"
              target="_blank"
              className="text-link"
            >
              DilshadNoshad
            </a>
          </span>
        </div>

        <div className="footer_D-vers_end"></div>
        <audio id="audio_one" src="img/open.wav" autostart="false"></audio>
        <audio id="audio_two" src="img/close.mp3" autostart="false"></audio>
      </footer>
    );
  }
}

export default Footer;
