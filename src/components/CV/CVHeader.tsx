import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

type Props = {};
export default function CVHeader({}: Props) {
  return (
    <header className="space-y-4 bg-indigo-900 p-8 text-white">
      <h1 className="text-center text-4xl">Josephine Meyers</h1>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-lg">
        <li className="flex items-center gap-2">
          <IoMdMail /> josephine.meyers@mail.co.uk
        </li>
        <li className="flex items-center gap-2">
          <FaPhoneAlt />
          +44 3245 5521 5521
        </li>
        <li className="flex items-center justify-center gap-2 text-center md:w-full">
          <IoLocationSharp />
          London, UK
        </li>
      </ul>
    </header>
  );
}
