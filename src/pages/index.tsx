import { Inter } from "next/font/google";
import { Switch, useColorMode } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toggleColorMode } = useColorMode();

  function calcBirthday() {
    const date = Date();
    console.log(date);
  }
  calcBirthday();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-row">
        <input
          className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
          type="text"
          placeholder="DD"
        />
        <input
          className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white ml-2"
          type="text"
          placeholder="MM"
        />
        <input
          className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white ml-2"
          type="text"
          placeholder="YYYY"
        />
      </div>

      <Switch onChange={toggleColorMode} />
    </main>
  );
}
