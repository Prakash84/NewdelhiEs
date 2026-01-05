import Abour from "./Abour";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "About Delhi Escorts by Delhi Girl | Safe, Verified, Zero Advance",
  description: "Meet the team behind Delhi’s safest escort service. Delhi Girl offers verified Delhi escorts—college to high-profile—with zero advance, 24×7 support & NDA option.",
  openGraph: {
    title: "About Delhi Escorts by Delhi Girl | Safe, Verified, Zero Advance",
    description: "Meet the team behind Delhi’s safest escort service. Delhi Girl offers verified Delhi escorts—college to high-profile—with zero advance, 24×7 support & NDA option.",
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
  return <Abour/>;
}
