import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Resume from "@/components/resume/Resume";
import MainNavigation from "@/components/Layout/MainNavigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MainNavigation/>
    <Resume/>
    </>
  );
}
