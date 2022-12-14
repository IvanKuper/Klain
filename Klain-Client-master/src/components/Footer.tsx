import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <footer id="footer" className="">
        <i className="socials fab fa-facebook fa-2x px-2"></i>
        <i className="socials fab fa-instagram fa-2x px-2"></i>
        <i className="socials fab fa-twitter fa-2x px-2"></i>
        <i className="socials fas fa-envelope fa-2x px-2"></i>

        <p className="mt-1">
          2022 Klain Website developed by
          <strong>
            <a className="link" href="" target="_blank">
              <span className="name"> Ivan Kuper.</span>
            </a>
          </strong>
        </p>
      </footer>
    </>
  );
};

export default Footer;
