import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Allsubjects from "src/components/Admin/subjects/Allsubjects";

const Page = () => {
  return (
    <>
      <Allsubjects />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
