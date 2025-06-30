import toast from "react-hot-toast";

export const fireToast = (message: {
  type: "error" | "warn" | "info" | "success";
  desc: string;
}) => {
  switch (message.type) {
    case "error":
      toast.error(message.desc, { duration: 5000 });
      break;
    case "warn":
      toast(message.desc, { duration: 5000 });
      break;
    case "info":
      toast(message.desc, { duration: 5000 });
      break;
    case "success":
      toast.success(message.desc, { duration: 5000 });
      break;
  }
};
