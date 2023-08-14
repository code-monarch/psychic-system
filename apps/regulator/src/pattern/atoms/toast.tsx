import { toast, Slide } from "react-toastify";

export const toastError = (errorMessage: string) => {
  return toast.error(errorMessage, {
    position: toast.POSITION.TOP_CENTER,
    toastId: "error",
    transition: Slide,
    onClose: () => toast.dismiss("loading"),
    icon: false,
  });
};

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    toastId: "success",
    onClose: () => toast.dismiss("loading"),
    transition: Slide,
    theme: "colored",
    icon: false,
  });
};

export const toastWarning = (message: string) => {
  return toast.warning(message, {
    position: toast.POSITION.TOP_CENTER,
    toastId: "warning",
    transition: Slide,
    onClose: () => toast.dismiss("loading"),
    icon: false,
  });
};

export const toastLoading = (message: string) => {
  return toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    toastId: "loading",
    transition: Slide,
  });
};
