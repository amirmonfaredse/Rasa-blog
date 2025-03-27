import { getMessages } from "@/app/_data/data-services";
import DeleteButton from "../../_components/contact/DeleteButton";

export default async function Page() {
  const messages = await getMessages();
  return (
    <div className="flex flex-col w-full h-full text-gray-200 ">
      <div className="flex flex-row w-full h-[100px]">مدیریت پیام ها</div>
      {messages.map((mess) => (
        <div key={mess.id} className="flex flex-col bg-gray-500 my-3">
          <div>{mess.id}</div>
          <div>{mess.fullName}</div>
          <div>{mess.email}</div>
          <div>{mess.message ?? "خالی"}</div>
          <DeleteButton id={mess.id} />
        </div>
      ))}
    </div>
  );
}
