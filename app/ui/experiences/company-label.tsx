"use client";

import { Company } from "../../services/resume-loader";
import FontAwesomeIcon from "../font-awesome-icon";

export default function CompanyLabel({ item }: { item: Company }) {
  function handleOnClick() {
    window.open(item.website, "_blank");
  }

  return (
    <h4 className="flex items-center">
      {item.name}
      <a className="inline-grid" href={item.website}>
        <FontAwesomeIcon
          type="link"
          className="text-[0.6em] text-red-600 cursor-pointer pl-[6px] transition duration-300 ease-in-out hover:scale-110 hover:opacity-60"
          onClick={handleOnClick}
        />
      </a>
    </h4>
  );
}
