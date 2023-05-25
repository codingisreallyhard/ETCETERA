import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div>
      <p>For contact/guest spots and appointments please click this button</p>
    </div>
  </section>
);

export default Footer;
