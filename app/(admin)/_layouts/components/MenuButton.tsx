"use client";

import { useSliderContext } from "(admin)/_providers/NavigationProvider";


function MenuButton() {
  const { openDrawer, setOpenDrawer } = useSliderContext();

  const onClickDrawer: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div
      onClick={onClickDrawer}
      className="fixed top-12 right-0 flex md:hidden  bg-cles-700 shadow-xl p-2 rounded-l-lg z-30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </div>
  );
}

export default MenuButton;
