import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useCVContext } from "../../context/CVContextProvider";
import { useThemeContext } from "~/context/ThemeContextProvider";

type Props = {};
export default function CVHeader({}: Props) {
  const {
    theme: { colors, fonts },
  } = useThemeContext();

  const {
    cvData: { fullName, email, phone, location },
  } = useCVContext();

  return (
    <header
      className="space-y-4 p-8 text-white"
      style={{
        backgroundColor: colors["header-bg"],
        color: colors["header-text"],
        fontFamily: fonts["text"],
      }}
    >
      <h1
        className="text-center text-4xl"
        style={{ fontFamily: fonts["headings"] }}
      >
        {fullName}
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-lg">
        {email && (
          <li className="flex items-center gap-2">
            <IoMdMail /> {email}
          </li>
        )}
        {phone && (
          <li className="flex items-center gap-2">
            <FaPhoneAlt />
            {phone}
          </li>
        )}
        {location && (
          <li className="flex items-center justify-center gap-2 text-center md:w-full">
            <IoLocationSharp />
            {location}
          </li>
        )}
      </ul>
    </header>
  );
}
