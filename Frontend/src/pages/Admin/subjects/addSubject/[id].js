import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Addsub from "src/components/Admin/subjects/Addsub";

const Page = () => {
  return (
    <>
      <Addsub />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
