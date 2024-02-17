import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from  "../ui/dashboard/Dashboard.module.css"
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DAshboard page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}