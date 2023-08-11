import { toast, Slide } from "react-toastify";

const toastError = (errorMessage: string) =>
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "error",
    transition: Slide,
  });

const toastSuccess = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "success",
    transition: Slide,
  });

const toastWarning = (message: string) =>
  toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "warning",
    transition: Slide,
  });
const toastLoading = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    toastId: "loading",
    transition: Slide,
  });

export { toastError, toastSuccess, toastWarning, toastLoading };
