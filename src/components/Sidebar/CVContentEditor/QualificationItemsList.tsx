import { FaTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { useCVContext } from "~/context/CVContextProvider";
import { EducationOrExperience } from "~/types";

type Props = {
  items: EducationOrExperience[];
  handleEdit: (id: string) => void;
};
export default function QualificationItemsList({ items, handleEdit }: Props) {
  const { deleteEducation } = useCVContext();

  return (
    items.length > 0 && (
      <ul>
        {items.map(({ id, name }) => (
          <li className="flex gap-2 p-4 pl-6 text-lg">
            <p className="flex-1 font-medium">{name}</p>
            <button
              className="relative shrink-0 after:invisible after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-1/2 after:bg-black hover:after:visible active:scale-95"
              onClick={() => handleEdit(id)}
            >
              <MdModeEdit />
            </button>
            <button
              className="shrink-0 text-red-500 hover:text-red-800 active:scale-95"
              onClick={() => deleteEducation(id)}
            >
              <FaTrashCan />
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
