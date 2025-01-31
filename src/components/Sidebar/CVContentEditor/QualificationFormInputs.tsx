import Input from "~/components/Input";
import { format } from "date-fns";
import { type Qualification, type QualificationType } from "~/types";
import { useCVContext } from "~/context/CVContextProvider";

const inputPlaceholders: Record<
  QualificationType,
  Partial<Record<keyof Qualification, string>>
> = {
  education: {
    name: "Academy of the Sacred Heart",
    degreeOrRole: "PhD",
    location: "351 Elizabeth Avenue, Louisiana",
  },
  experience: {
    name: "Nvidia",
    degreeOrRole: "AI Engineer",
    location: "2788 San Tomas Expressway Santa Clara, CA 95051",
    description:
      "Supported senior researchers on accessibility standards for the open web.",
  },
};

const inputLabels: Record<
  QualificationType,
  Partial<Record<keyof Qualification, string>>
> = {
  education: {
    name: "School",
    degreeOrRole: "Degree",
    location: "Location",
  },
  experience: {
    name: "Company Name",
    degreeOrRole: "Position Title",
    location: "Location",
    description: "Description",
  },
};

export default function QualificationFormInputs(
  editedQualification: Qualification,
) {
  const { editQualification } = useCVContext();

  const handleEditQualification = (
    property: keyof Qualification,
    value: string | null,
  ) => {
    editQualification(id, {
      ...editedQualification,
      [property]: value,
    });
  };

  const {
    id,
    degreeOrRole,
    endDate,
    location,
    name,
    startDate,
    type,
    description,
  } = editedQualification;

  return (
    <div className="space-y-2 p-6 pt-0">
      <Input
        labelText={inputLabels[type].name!}
        type="text"
        placeholder={inputPlaceholders[type].name}
        value={name}
        onChange={(e) => handleEditQualification("name", e.target.value)}
      />
      <Input
        labelText={inputLabels[type].degreeOrRole!}
        type="text"
        placeholder={inputPlaceholders[type].degreeOrRole}
        value={degreeOrRole}
        onChange={(e) =>
          handleEditQualification("degreeOrRole", e.target.value)
        }
      />
      <Input
        labelText="Start Date"
        type="date"
        value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
        onChange={(e) => handleEditQualification("startDate", e.target.value)}
      />
      <label className="my-2 flex items-center justify-end gap-2 text-lg font-semibold">
        Active
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={endDate === null}
          onChange={({ target }) =>
            handleEditQualification(
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
          onChange={(e) => handleEditQualification("endDate", e.target.value)}
        />
      )}
      <Input
        labelText={inputLabels[type].location!}
        type="text"
        placeholder={inputPlaceholders[type].location}
        value={location}
        onChange={(e) => handleEditQualification("location", e.target.value)}
      />
      {description && (
        <div className="flex flex-col gap-1">
          <label
            htmlFor="experience-description"
            className="text-lg font-semibold"
          >
            {inputLabels[type].description}
          </label>
          <textarea
            className="w-full resize-y rounded-md bg-gray-200 p-2"
            name="experience-description"
            id="experience-description"
            placeholder={inputPlaceholders[type].description}
            value={description}
          ></textarea>
        </div>
      )}
    </div>
  );
}
