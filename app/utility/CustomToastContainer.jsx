import { Bounce, ToastContainer } from "react-toastify";

function CustomToastContainer({
  position = "top-right",
  autoClose = 5000,
  hideProgressBar = false,
  newestOnTop = true,
  closeOnClick = true,
  rtl = true,
  pauseOnFocusLoss = true,
  draggable = true,
  pauseOnHover = true,
  theme = "dark",
  transition = Bounce,
}) {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      rtl={rtl}
      pauseOnFocusLoss={pauseOnFocusLoss}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      theme={theme}
      transition={transition}
    />
  );
}

export default CustomToastContainer;
