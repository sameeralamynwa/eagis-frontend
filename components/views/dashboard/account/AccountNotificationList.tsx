import Pagination from "@/components/Pagination";
import { TbBell } from "react-icons/tb";

export default function AccountNotificationList() {
  return (
    <div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((notification) => (
          <NotificationItem key={notification} />
        ))}
      </div>
      <br />
      <div className="flex justify-end">
        <Pagination links={[]} nextPageUrl={null} prevPageUrl={null} />
      </div>
    </div>
  );
}

const NotificationItem = () => {
  return (
    <div className="p-3 border border-base-200 rounded-lg flex justify-between gap-3 items-center bg-base-100 hover:bg-base-100">
      <div>
        <TbBell className="text-primary size-6" />
      </div>
      <div className="grow">
        <div className="font-bold">Lorem ipsum dolor sit amet.</div>
        <p className="text-primary/70 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, alias.
        </p>
      </div>
      <span className="icon-[tabler--x] size-5 text-primary shrink-0 cursor-pointer"></span>
    </div>
  );
};
