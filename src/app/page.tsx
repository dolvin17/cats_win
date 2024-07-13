import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  return (
    <>
	<Image
      src="/logom.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />

	<w3m-connect-button />
	</>
  );
}
