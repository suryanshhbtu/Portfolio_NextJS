import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainNavigation from "@/components/Layout/MainNavigation";
import Projects from "@/components/projects/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MainNavigation/>
    <Projects/>
    </>
  );
}
