import footerCopyright from './images/footerCopyright.svg';
import iconGitHub from './images/icon-github.svg';
import iconLinkedin from './images/icon-linkedin-original.svg';
import iconStackoverflow from './images/icon-stackoverflow.svg';
import './style/BoxFooter.css';

function BoxFooter() {
  return (
    <div className="box-contentFooter">
      <nav className="box-footerIcons">

          <div>
            <a
              href="https://www.linkedin.com/in/brunoro7/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-icon linkedin"
                src={iconLinkedin}
                alt="icon-Linkedin"
              />
            </a>
          </div>

          <div>
            <a
              href="https://stackoverflow.com/users/20140542/bruno-rossetti"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-icon stackoverflow"
                src={iconStackoverflow}
                alt="icon-Stackoverflow"
              />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/brunoro7"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-icon gitHub"
                src={iconGitHub}
                alt="icon-GitHub"
              />
            </a>
          </div>

        </nav>

        <div
          className="div-footerCopyright"
        >
          <img
            className="img-footerCopyright"
            src={footerCopyright}
            alt="footerCopyright"
          />
        </div>
    </div>
    );
}

export default BoxFooter;
