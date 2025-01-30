import Input from "~/components/Input";
import { format } from "date-fns";
import { EducationOrExperience } from "~/types";
import { useCVContext } from "~/context/CVContextProvider";

export default function EducationInputs(
  editedEducation: EducationOrExperience,
) {
  const { editEducation } = useCVContext();

  const handleEditEducation = (
    property: keyof EducationOrExperience,
    value: string | null,
  ) => {
    editEducation(id, {
      ...editedEducation,
      [property]: value,
    });
  };

  const { id, degreeOrRole, endDate, location, name, startDate } =
    editedEducation;

  return (
    <div className="space-y-2 p-6 pt-0">
      <Input
        labelText="School"
        type="text"
        placeholder="Academy of the Sacred Heart"
        value={name}
        onChange={(e) => handleEditEducation("name", e.target.value)}
      />
      <Input
        labelText="Degree"
        type="text"
        placeholder="PhD"
        value={degreeOrRole}
        onChange={(e) => handleEditEducation("degreeOrRole", e.target.value)}
      />
      <Input
        labelText="Start Date"
        type="date"
        value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
        onChange={(e) => handleEditEducation("startDate", e.target.value)}
      />
      <label className="my-2 flex items-center justify-end gap-2 text-lg font-semibold">
        Active
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={endDate === null}
          onChange={({ target }) =>
            handleEditEducation(
              "endDate",
              target.checked ? null : new Date().toISOString(),
            )
          }
        />
      </label>
      {endDate !== null && (
        <Input
          labelText="End Date"
          type="date"
          value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
          onChange={(e) => handleEditEducation("endDate", e.target.value)}
        />
      )}
      <Input
        labelText="Location"
        type="text"
        placeholder="351 Elizabeth Avenue, Louisiana"
        value={location}
        onChange={(e) => handleEditEducation("location", e.target.value)}
      />
    </div>
  );
}
