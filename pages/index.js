import Head from "next/head";
import Image from "next/image";
import Main from "../components/Home/Main";
import Animator from "../components/UI/Animator";
const style = {};

export default function Home() {
  let featuredData = "";
  return (
    <Animator>
      <div className="w-[100vw] overflow-x-hidden">
        <Main featuredData={featuredData} />
      </div>
    </Animator>
  );
}
