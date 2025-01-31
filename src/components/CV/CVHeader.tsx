import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useCVContext } from "../../context/CVContextProvider";
import { useThemeContext } from "~/context/ThemeContextProvider";
import { cn } from "~/utils/utils";

export default function CVHeader() {
  const {
    theme: { colors, fonts, layout },
  } = useThemeContext();

  const {
    cvData: { fullName, email, phone, location },
  } = useCVContext();

  return (
    <header
      className="space-y-4 p-4 text-white"
      style={{
        backgroundColor: colors["header-bg"],
        color: colors["header-text"],
        fontFamily: fonts.text,
      }}
    >
      <h1
        className="text-center text-3xl"
        style={{ fontFamily: fonts.headings }}
      >
        {fullName}
      </h1>
      <ul
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-lg",
          { "justify-start": layout === "left" || layout === "right" },
        )}
      >
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
          <li
            className={cn(
              "flex items-center justify-center gap-2 text-center",
              {
                "w-auto": layout === "left" || layout === "right",
                "md:w-full": layout === "top",
              },
            )}
          >
            <IoLocationSharp />
            {location}
          </li>
        )}
      </ul>
    </header>
  );
}
