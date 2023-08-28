import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Edit_lesson from "src/components/lessons/Edit_lesson";
const Page = () => {
  return (
    <>
      <Edit_lesson />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
