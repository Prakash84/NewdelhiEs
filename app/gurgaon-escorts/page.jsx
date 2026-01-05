import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Gurgaon Escorts & Noida Escorts | Night Stay with Russian Girls",
  description: "Book Gurgaon escorts & Noida escorts from ₹2,499—fastest escort service in Noida & Gurgaon with free room, Pay on arrival. 15-min delivery, 24×7 open.",
  openGraph: {
    title: "Gurgaon Escorts & Noida Escorts | Night Stay with Russian Girls",
    description: "Book Gurgaon escorts & Noida escorts from ₹2,499—fastest escort service in Noida & Gurgaon with free room, Pay on arrival. 15-min delivery, 24×7 open.",
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
  return <Outpage />;
}
