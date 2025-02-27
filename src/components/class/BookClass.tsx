import Image from "next/image";
import arrowRight from "@/@@/assets/arrow-right.svg";
import { TClass } from "@/@@/types";
import { Select } from "../Select";

interface Props {
  classItem: TClass;
}

export const BookClass = ({ classItem }: Props) => {
  // const slots = timetable[selectedGym]
  // const buttonDisabled = !selectedGym || !selectedSlotId
  // const bookingLink = `https://gymbox.legendonlineservices.co.uk/enterprise/Basket/AddPublicClassBooking?bookingId=${selectedSlotId}`
  const timetables = classItem.timetables;
  const locations = [...new Set(timetables.map((timetable) => timetable.gym))];
  console.log(classItem, "classItem");
  const selectLocations = locations.map((location) => ({
    label: location,
    value: location.toLowerCase(),
  }));

  return (
    <div className="grid grid-cols-2">
      <Select options={selectLocations} placeholder="Select gym" />
      <Select options={[]} placeholder="Choose time" className="border-l-0" />
      <a
        href=""
        className="flex justify-between bg-black text-white text-sm font-semibold py-[14px] px-4 border border-[#2D2D2D] border-t-0 group hover:bg-[#2D2D2D] col-span-2"
      >
        <span className="group-hover:text-orange uppercase">Book class?</span>
        <Image src={arrowRight} alt="right-arrow" />
      </a>
    </div>
  );
};
