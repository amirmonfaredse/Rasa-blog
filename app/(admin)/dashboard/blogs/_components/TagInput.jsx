"use client";

import { actionDeleteTag } from "@/app/_data/blog/blogActions";
import Image from "next/image";
import { useState } from "react";

function TagInput({ tagList, blogTags = [] }) {
  const [tags, setTags] = useState(tagList);
  const [filteredTags, setFilteredTags] = useState([]);
  const [confirmedTags, setConfirmedTags] = useState(blogTags);

  const [inpFocused, setInpFocused] = useState(true);
  function handleSearchTag(e) {
    if (e.target.value !== "") {
      setFilteredTags(() =>
        tags.filter((tag) => tag.title.includes(e.target.value))
      );
    }
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
  function onAddToConfirmedTag(title, slug) {
    if (!confirmedTags?.some((tag) => tag.title === title.trim())) {
      setConfirmedTags([
        ...confirmedTags,
        {
          title: title.trim(),
          slug: slug.trim(),
        },
      ]);
    } else {
      alert("این برچسب انتخاب شده است");
    }
  }
  function handleRemoveTagFromList(tagSlug) {
    setConfirmedTags(confirmedTags.filter((tag) => tag.slug !== tagSlug));
  }
  return (
    <>
      <label className="flex flex-col gap-3 mt-5">
        <div className="flex gap-4 ">
          <h2 className=" text-gray-300">برچسب ها :</h2>
        </div>
        <input
          hidden
          readOnly
          value={JSON.stringify(confirmedTags)}
          name="blogTags"
          type=""
        />
        <input
          onChange={handleSearchTag}
          onKeyDown={handleEnter}
          // onFocus={() => setInpFocused(true)}
          // onBlur={() => setInpFocused(false)}
          type="text"
          className="w-[1000px] h-[50px]  bg-gray-500 p-2 text-md text-gray-100 focus:outline-none rounded-t-md "
        />
      </label>
      {inpFocused && (
        <div className="w-full min-h-[80px] h-auto overflow-auto no-scrollbar bg-gray-50 rounded-b-md">
          {filteredTags.length > 0 ? (
            filteredTags.map((tag, index) => (
              <div
                className="w-full h-[35px] flex items-center px-2 bg-gray-400 text-gray-800 cursor-pointer border-b border-gray-600"
                key={`${tag.id}-${index}`}
                onClick={() => {
                  onAddToConfirmedTag(tag.title, tag.slug);
                }}
              >
                <div className="bg-gray-800 text-gray-50 rounded-full px-1 mx-2">
                  {index}
                </div>
                <div>{tag.title}</div>
              </div>
            ))
          ) : (
            <div className="m-2">برچسب مشابه وجود ندارد</div>
          )}
        </div>
      )}
      {confirmedTags?.length > 0 && (
        <div className="w-full">
          <h3 className="text-gray-200 my-2">لیست برچسب ها</h3>
          <div className="flex gap-2">
            {confirmedTags?.map((tag, index) => (
              <div
                key={`${tag.slug}-${index}`}
                className="w-fit h-[30px] flex items-center text-gray-800  bg-gray-200 px-2  hover:bg-gray-700 hover:text-gray-50 rounded-xl  cursor-pointer"
              >
                {tag.title}
                <Image
                  onClick={() => {
                    handleRemoveTagFromList(tag.slug);
                  }}
                  src="/svg/close.svg"
                  width={20}
                  height={20}
                  alt="حذف"
                  className="mx-2"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TagInput;
