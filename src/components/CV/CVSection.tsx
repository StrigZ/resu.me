import { format } from "date-fns";

type Props = {
  title: string;
  fields: {
    id: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    name: string;
    degreeOrRole: string;
    description?: string;
  }[];
};
export default function CVSection({ title, fields }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="bg-gray-100 py-1 text-center text-2xl font-extrabold">
        {title}
      </h2>
      <ul className="flex flex-col gap-8">
        {fields.map((field) => (
          <li
            key={field.id}
            className="flex items-start justify-center gap-8 text-xl"
          >
            <div className="flex-1">
              <p>
                {format(field.startDate, "LL/u")} –{" "}
                {field.endDate ? format(field.endDate, "LL/u") : "present"}
              </p>
              <p>{field.location}</p>
            </div>
            <div className="w-3/5 space-y-2">
              <p className="font-bold">{field.name}</p>
              <p>{field.degreeOrRole}</p>
              {field.description && (
                <p className="break-words">{field.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
