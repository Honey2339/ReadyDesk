import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/ui/navbar";
import SparklesCore from "@/components/ui/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReadyDesk",
  description: "A Modern Support System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_-10000px,transparent_0px,black)]">
              <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="w-full absolute inset-0 h-screen">
                  <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
