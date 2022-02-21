import { Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Content } from "../components/Content";
import { Continent } from "../components/Continent";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Continent />
    </>
  )
}
