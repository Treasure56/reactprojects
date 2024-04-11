import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const footerLinks = [
  { Label: "Home", link: "/" },
  { Label: "About", link: "/about" },
  { Label: "Services", link: "/services" },
  { Label: "Contact", link: "/contact" },
  { Label: "Blog", link: "/blog" },
];

const footlinks = [
  { Label: "products", link: "/" },
  { Label: "Web", link: "/about" },
  { Label: "App", link: "/services" },
  { Label: "Software", link: "/contact" },
  { Label: "Ecommerce", link: "/blog" },
  { Label: "Terms and condition", link: "/blog" },
  { Label: "Privacy policy", link: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-black  flex flex-wrap gap-10 ">
      <div className="w-2/12 text-uppercase text-light mt-5">
        <span className="text-3xl">kelectrix design</span> <br /> <br />
        <span className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          neque laboriosam enim officia minus minima {" "}
        </span>
      </div>

      <div className="w-2/12 mt-5">
        {footerLinks.map((link, index) => (
          <ul key={index} className="footer-container md:col-span-3">
            <li className="footer-links text-light">
              <a href={link.link}>{link.Label}</a>
            </li>
          </ul>
        ))}
      </div>

      <div className="md:col-4 w-2/12 mt-5">
        {footlinks.map((link, index) => (
          <ul key={index} className="footer-container md:col-span-3">
            <li className="footer-links text-light">
              <a href={link.link}>{link.Label}</a>
            </li>
          </ul>
        ))}
      </div>
      <div className="md:col-4 w-2/12 mt-5">

      <input className="p-2 rounded-2xl" />
      </div>
     

      <div className="md:col-4 w-2/12 mt-5">

      <button className="btn bg-primary p-3 rounded-full text-light ">subscribe</button>
      </div>

      <hr className="my-6 border-t border-gray-300 w-full" />
      <span className="text-light text-center flex justify-center items-center">2022 Glassy, All right reserved</span>
    </footer>
  );
}
