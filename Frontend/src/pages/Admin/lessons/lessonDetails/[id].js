import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Lesson_details from "src/components/Admin/lessons/Lesson_details";
const Page = () => {
  return (
    <>
      <Lesson_details />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
