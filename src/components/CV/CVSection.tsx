import { format } from "date-fns";
import { Qualification } from "~/types";

type Props = {
  title: string;
  fields: Qualification[];
};
export default function CVSection({ title, fields }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="bg-gray-100 py-1 text-center text-2xl font-extrabold">
        {title}
      </h2>
      <ul className="flex flex-col gap-8">
        {fields.map(
          ({
            id,
            degreeOrRole,
            description,
            endDate,
            location,
            name,
            startDate,
          }) => (
            <li
              key={id}
              className="flex items-start justify-center gap-8 text-xl"
            >
              <div className="flex-1">
                {(startDate || endDate) && (
                  <p>
                    {startDate && <span>{format(startDate, "LL/u")}</span>} –{" "}
                    {endDate !== undefined && (
                      <span>
                        {endDate === null ? "present" : format(endDate, "LL/u")}
                      </span>
                    )}
                  </p>
                )}
                {location && <p>{location}</p>}
              </div>
              <div className="w-3/5 space-y-2">
                {name && <p className="font-bold">{name}</p>}
                {degreeOrRole && <p>{degreeOrRole}</p>}
                {description && <p className="break-words">{description}</p>}
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
