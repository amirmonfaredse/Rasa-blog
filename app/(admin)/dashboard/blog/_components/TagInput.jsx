"use client";

import Image from "next/image";
import { useState } from "react";

function TagInput({ tagList, tagged = [] }) {
  const [tags, setTags] = useState(tagList);
  const [filteredTags, setFilteredTags] = useState([]);
  console.log(tagged)

  const idsInTagged = new Set(tagged.map((tag) => tag.tagId));

  const [confirmedTags, setConfirmedTags] = useState(() =>
    tagList.filter((tag) => idsInTagged.has(tag.id))
  );
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
  function onAddToConfirmedTag(title, slug, id) {
    if (!confirmedTags?.some((tag) => tag.title === title.trim())) {
      setConfirmedTags([
        ...confirmedTags,
        {
          id: Number(id),
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
          <h2 className=" text-ghost-900">برچسب ها :</h2>
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
          type="text"
          className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2 "
        />
      </label>
      {inpFocused && (
        <div className="w-full  min-h-[80px] h-auto flex flex-wrap gap-1 overflow-auto no-scrollbar p-1">
          {filteredTags.length > 0 ? (
            filteredTags.map((tag, index) => (
              <div
                className="w-fit h-[35px] flex items-center bg-cles-500 px-2 cursor-pointer rounded-full"
                key={`${tag.id}-${index}`}
                onClick={() => {
                  onAddToConfirmedTag(tag.title, tag.slug, tag.id);
                }}
              >
                <div className=" text-white rounded-full pl-2">
                  {index + 1}-
                </div>
                <div className="text-white text-sm">{tag.title}</div>
              </div>
            ))
          ) : (
            <div className="text-sm text-ghost-900 m-2">
              برچسب مشابه وجود ندارد
            </div>
          )}
        </div>
      )}
      {confirmedTags?.length > 0 && (
        <div className="w-full">
          <h3 className="text-sm text-ghost-900 my-2">انتخاب شده ها:</h3>
          <div className="flex gap-2">
            {confirmedTags?.map((tag, index) => (
              <div
                key={`${tag.slug}-${index}`}
                className="w-fit h-[30px] flex items-center text-white text-sm bg-ghost-900 px-2 rounded-md cursor-pointer"
              >
                {tag.title}
                <Image
                  onClick={() => {
                    handleRemoveTagFromList(tag.slug);
                  }}
                  src="/svg/close.svg"
                  width={18}
                  height={18}
                  alt="حذف"
                  className="mr-1"
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
