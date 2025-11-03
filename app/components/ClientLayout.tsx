// app/ClientLayout.tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Transition from "./Transition";
import FrozenRoute from "./FrozenRoutes";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <Header />
      <TopLeftImg />

      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="h-full">
          <Transition />
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
