"use client";
import Image from "next/image";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function SearchButton() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const handleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };
  return (
    <>
      <div
        onClick={handleSearchModal}
        className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:scale-110 duration-300"
      >
        <Image
          src="/header/search/search.svg"
          alt="جستجو در مجله رسا"
          width={40}
          height={40}
        />
      </div>
      {showSearchModal && <SearchModal handleSearchModal={handleSearchModal} />}
    </>
  );
}
