import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 text-2xl">

      <a href="#">
        <FaGithub />
      </a>

      <a href="#">
        <FaLinkedin />
      </a>

      <a href="#">
        <FaWhatsapp />
      </a>

    </div>
  );
}