import { Banner } from "@/components/Home/Banner";
import { Courses } from "@/components/Home/Courses";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-wider mx-auto py-24">
     <Banner/>
     <Courses/>
    </main>
  );
}
