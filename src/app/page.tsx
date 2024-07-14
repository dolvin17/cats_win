import Image from "next/image";
import { useEffect } from "react";
import Stage from "@/components/Firstplace/Stage";
import Incentivos from "@/components/Firstplace/Incentivos";
import Navbar from "@/components/Navigation/Navigation";


export default function Home() {
  return (
    <>
<Navbar />
<div className="flex flex-wrap">

<Stage />
<Incentivos />
</div>
	</>
  );
}
