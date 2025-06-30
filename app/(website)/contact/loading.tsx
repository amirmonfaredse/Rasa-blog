export default function Loading() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col justify-center items-center w-[50%] max-h-screen bg-gray-700  transition animate-pulse duration-75">
        <div className="text-3xl mb-5"></div>
        <div className="my-4 flex flex-col justify-center items-center items-start">
          <div className="text-lg text-gray-300"></div>
          <div className="flex justify-center gap-10 py-4">
            <div className=""> </div>
            <div className=""> </div>
            <div className=""> </div>
          </div>
        </div>
        <div className="flex gap-4 my-4">
          <div className=""> </div>
          <div className=""> </div>
          <div className=""> </div>
        </div>
        <div className="flex my-4 gap-4">
          <div className=""> </div>
          <div className=""> </div>
          <div className=""> </div>
        </div>
      </div>
      <div className="flex flex-col w-[50%] max-h-screen bg-gray-700  transition animate-pulse duration-75">
        <div className=""> </div>
        <div
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          name="fullName"
          required
        ></div>
      </div>
    </div>
  );
}
