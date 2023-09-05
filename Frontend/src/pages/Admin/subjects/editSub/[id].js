import React from "react";
import Editsub from "src/components/Admin/subjects/Editsub";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const Page = () => {
  return (
    <>
      <Editsub />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
