import { Metadata } from "next";
import PageHeader from "@/app/shared/page-header";

// SEO metadata
export const metadata: Metadata = {
  title: "MS Sportswear | Orders",
};

const pageHeader = {
  title: "NewPage",
  breadcrumb: [
    {
      href: "/",
      name: "Home",
    },
    {
      name: "NewPage",
    },
  ],
};

export default function NewPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </>
  );
}
