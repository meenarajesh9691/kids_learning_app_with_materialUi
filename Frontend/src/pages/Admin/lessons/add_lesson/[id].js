import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Add_lesson from "src/components/Admin/lessons/Add_lesson";
const Page = () => {
  return (
    <>
      <Add_lesson />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;