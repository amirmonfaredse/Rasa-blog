"use client";
import DeleteButton from "(admin)/_components/DeleteButton";
import { useMessages } from "_data/fetchers";

export default function Page() {
  const { messages } = useMessages();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-ghost-900 px-2 mb-4">
      <h1 className="w-full h-28 flex items-center justify-start text-2xl px-2">
        پیام ها
      </h1>
      {messages.map((mess, index) => (
        <div
          key={`${mess.id}-${index}`}
          className="w-full flex flex-col justify-start items-start  border border-avocado-400 rounded-xl p-4 "
        >
          <div className="w-[90%] min-h-14 h-fit gap-2 md:gap-1 flex flex-col justify-center">
            <div className="flex items-center md:gap-2 md:mx-2">
              <h3 className="text-md text-ghost-800">شناسه پیام : </h3>
              <h4 className=" px-2 rounded-md">{mess.id}</h4>
            </div>
            <div className="flex items-center md:gap-3 md:mx-2">
              <h3 className="text-lg text-ghost-800">نام : </h3>
              <h4 className="text-md flex items-center px-4  rounded-md">
                {mess.fullName}
              </h4>
            </div>
            <div className="flex items-center md:gap-3 md:mx-2">
              <h3 className="text-lg text-ghost-800">آدرس ایمیل : </h3>
              <h4 className="text-md flex items-center  px-4 rounded-md">
                {mess.email}
              </h4>
            </div>
          </div>
          <div className="w-[90%] flex flex-col">
            <h3 className="text-lg text-ghost-400 my-3">متن پیام : </h3>
            <p className=" w-full h-fit min-h-14 rounded-md p-2 px-4 bg-ghost-100 text-ghost-1000">
              {mess.message}
            </p>
          </div>
          <DeleteButton id={mess.id} />
        </div>
      ))}
    </div>
  );
}
