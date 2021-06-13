import Main from "@/components/Main";
import Head from "next/head";
import Layout from "@/components/Layout";
import { getData } from "lib/api";
import Faqs from "@/components/Faqs";
import { Box } from "@chakra-ui/layout";
import About from "@/components/About";
import SingleTestimonial from "@/components/SingleTestimonial";
import Testimonials from "@/components/Testimonials";

export default function Home({ data }) {
  console.log(data);
  return (
    <Box overflow="hidden">
      <Head>
        <title></title>
        <link
          rel="preload"
          href="/fonts/ApercuPro-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout details={data.scholarship}>
        <Main details={data.scholarship} />
        <About details={data.scholarship} />
        <Testimonials />
        <Faqs faqs={data.scholarship.faqs} />
      </Layout>
    </Box>
  );
}

export async function getStaticProps(context) {
  const data = await getData(
    "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
  );
  return {
    props: { data }, // will be passed to the page component as props
  };
}
