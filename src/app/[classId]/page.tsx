import Image from "next/image";

import { getClassBySlug } from "@/@@/lib/api";
import { TTimetable } from "@/@@/types";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const { data } = await getClassBySlug(classId);
  const classItem = data[0];
  const timetables: TTimetable[] = classItem.timetables;
  const locations = [...new Set(timetables.map((timetable) => timetable.gym))];

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-3xl font-extrabold text-center">
          {classItem.title}
        </h1>
        <div className="flex gap-8">
          <div className="text-white">Locations:</div>
          <div className="text-white flex flex-col gap-1">
            {locations.map((location) => (
              <div key={location}>{location}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={classItem.featuredImage.url}
          width={500}
          height={500}
          alt="class image"
        />
      </div>
    </div>
  );
}
