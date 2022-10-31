import Head from "next/head";
import Image from "next/image";
import Main from "../components/Home/Main";
const style = {};

export default function Home() {
  let featuredData = "";
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Main featuredData={featuredData} />
    </div>
  );
}
