import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
      <Main />
    </div>
  );
}
