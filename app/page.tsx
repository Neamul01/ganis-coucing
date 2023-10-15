import { Banner } from "@/components/Home/Banner";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-w-wider mx-auto min-h-screen flex-col items-center justify-between py-24">
     <Banner/>
    </main>
  );
}
