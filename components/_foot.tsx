import Script from "next/script";
const Footer: React.FC = () => (
  <footer>
    <Script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></Script>
    <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
  </footer>
);

export default Footer;
