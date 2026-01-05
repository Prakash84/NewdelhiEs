import HomeClient from "./HomeClient";
export const metadata = {
  title: "Delhi Escorts ₹2k | Escort Service in Delhi with College Girls",
  description: "Book 150+ profile at Delhi escorts like College girls, Russians, celebs & independent escorts in Delhi. Best escort service in Delhi, Gurgaon, Noida, Aerocity — Pay on arrival.",
  openGraph: {
    title: "Delhi Escorts ₹2k | Escort Service in Delhi with College Girls",
    description: "Book 150+ profile at Delhi escorts like College girls, Russians, celebs & independent escorts in Delhi. Best escort service in Delhi, Gurgaon, Noida, Aerocity — Pay on arrival.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};
export default function page() {
  return <HomeClient/>;
}
