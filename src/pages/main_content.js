import React from "react";

class Main_content extends React.Component {
  render() {
    return (
      <main className="D_vers_content">
        <section>
          <div className="main_ri">
            <img id="main_D-vers" src="img/D-vers.png" alt="" />
            <p className="sub_main_p">
              Learning amazing things, making awesome things for awesome people!
              :)
            </p>
            <div className="main_D-vers_n543">
              I, Robot <span>D-vers</span>
            </div>
            <p className="sub_p">
              " The one stop shop to have fun with amazing people, and to code
              of course. "
            </p>
            <hr />
            <div className="social_ico">
              <div className="social_links fb_ico">
                <a
                  href="https://www.facebook.com/dilshad.noshad.7"
                  target="_blank"
                >
                  <i className="fab fa-facebook icon"></i>
                </a>
              </div>
              <div className="social_links insta_ico">
                <a
                  href="https://www.instagram.com/dilshad_noshad009"
                  target="_blank"
                >
                  <i className="fab fa-instagram icon"></i>
                </a>
              </div>
              <div className="social_links git_ico">
                <a href="https://github.com/DilshadNoshad" target="_blank">
                  <i className="fab fa-github icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main_content;
