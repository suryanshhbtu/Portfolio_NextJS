
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Homes from  '../components/home/Homes';
import MainNavigation from "@/components/Layout/MainNavigation";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MainNavigation/>
    <Homes/>
    <h1>This Is Home Page</h1>
    </>
  );
}
