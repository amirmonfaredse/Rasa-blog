"use client";
import { useTags } from "_data/fetchers";
import { useAdminStore } from "_lib/store/store";
import { Mode } from "_lib/store/types";
import DeleteTagButton from "./DeleteTagButton";
import TagForm from "./TagForm";

export default function Page() {
  const { tags } = useTags();
  const onFormMode = useAdminStore.use.onTagFormMode();
  const onTagFields = useAdminStore.use.onTagFields();
  const setTagId = useAdminStore.use.setTagId();
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <TagForm />
      <div className="w-full lg:w-[50%] py-5 px-2 flex flex-col gap-5">
        <h2 className="text-lg text-ghost-900 border border-ghost-700 px-5 py-2 rounded-md mb-4">
          همه برچسب ها{" "}
        </h2>
        {tags?.length > 0 ? (
          tags.map((tag, index) => (
            <div
              className="w-full h-[35px] flex items-center justify-between border-2 border-folly-200 rounded-sm  px-2"
              key={`${index}-${tag.id}`}
            >
              <p className="text-ghost-900 p-1 text-sm rounded-full">
                {index + 1}
              </p>
              <h4 className="flex justify-start text-ghost-900">{tag.title}</h4>
              <div>
                <button
                  onClick={() => {
                    onFormMode(Mode.Put);
                    onTagFields(tag);
                    setTagId(tag.id);
                  }}
                  className="text-xs mx-2 "
                >
                  ویرایش
                </button>
                <DeleteTagButton tagId={tag.id} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-ghost-900 text-sm">تگی یافت نشد ...</div>
        )}
      </div>
    </div>
  );
}
