import Servicpage from "./Servicpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Escort Service in Delhi, Gurgaon, Noida | Delhi College Girls",
  description: "Best escort service in Delhi, Gurgaon, Noida, Dwarka, Mahipalpur & South Delhi. High-profile to cheap escort service in Delhi NCR — Pay on arrival, 15-min drop.",
  openGraph: {
    title: "Escort Service in Delhi, Gurgaon, Noida | Delhi College Girls",
    description: "Best escort service in Delhi, Gurgaon, Noida, Dwarka, Mahipalpur & South Delhi. High-profile to cheap escort service in Delhi NCR — Pay on arrival, 15-min drop.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};
export default function page() {
  return <Servicpage />;
}
