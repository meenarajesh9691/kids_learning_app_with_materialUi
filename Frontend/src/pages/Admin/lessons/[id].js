import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import All_lesson from "src/components/Admin/lessons/All_lesson";
const Page = () => {
  return (
    <>
      <All_lesson />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
