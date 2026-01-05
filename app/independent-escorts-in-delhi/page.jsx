import Categorypage from "./Categorypage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Independent Escorts in Delhi ₹2k | Night Stay with Delhi Girls",
  description: "150+ independent escorts in Delhi — college girls, housewives, Russians, celebrity. Cheap call girls to high-profile escorts, zero advance, pay after service.",
  openGraph: {
    title: "Independent Escorts in Delhi ₹2k | Night Stay with Delhi Girls",
    description: "150+ independent escorts in Delhi — college girls, housewives, Russians, celebrity. Cheap call girls to high-profile escorts, zero advance, pay after service.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Categorypage/>;
}
