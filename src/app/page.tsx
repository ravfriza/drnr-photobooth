// import { Button } from "@/components/ui/button"
import DrnrLogo from "@/drnr-assets/logo.png"
import PhotoboothText from "@/drnr-assets/photobooth-text.png"
import Sun from "@/drnr-assets/sun.png"
import Spark from "@/drnr-assets/spark.png"
import Glasses from "@/drnr-assets/glasses.png"
import Superman from "@/drnr-assets/superman.png"
import Jupiter from "@/drnr-assets/jupiter.png"
import Cring from "@/drnr-assets/cring.png"
import String from "@/drnr-assets/string.png"
import Telescope from "@/drnr-assets/telescope.png"
import Image from "next/image";
// import Toaster from "@/components/ui/sonner";
import Pencetan from "@/components/Pencetan";

export default function Home() {
  return (
    <div className="max-w-[100rem] mx-auto min-h-screen flex items-center justify-center">
      <main className="flex justify-between items-start">
        <div className="md:flex flex-col relative gap-16 w-2/5 hidden">
          <Image src={Sun} alt="sun" className="w-52" />
          <div className="absolute right-32 top-32">
          <Image src={Spark} alt="sun" className="w-24" />
          </div>
          <Image src={Glasses} alt="glasses" className="w-48" />
          <Image src={Superman} alt="superman" className="w-96" />
        </div>
        <div className="flex flex-col justify-start items-center gap-y-6 md:gap-y-36 mt-20">
          <div className="flex justify-start items-center flex-col gap-2">
            <Image src={DrnrLogo} alt="drnr-logo" className="w-1/3 md:w-2/5 h-fit" />
            <Image src={PhotoboothText} alt="photobooth-text" className="w-3/4 md:w-full h-fit" />
          </div>
          <div>
            {/* <Button
              variant="outline"
              className="rounded-full flex items-center justify-center text-lg px-6 py-3 md:text-4xl md:px-16 md:py-8 border-4 md:border-8 border-black font-medium tracking-wide"
            >
              pencet sini kak
            </Button>
            <Toaster/> */}
            <Pencetan/>
          </div>
        </div>
        <div className="md:flex flex-col w-2/5 relative hidden">
          <Image src={Jupiter} alt="sun" className="ms-40 w-44" />
          <div className="flex justify-end">
            <Image src={Cring} alt="glasses" className="w-32" />
          </div>
          <div className="flex justify-end mt-10">
            <Image src={String} alt="telescope" className="w-64" />
          </div>
          <div className="flex justify-end mt-10">
          <Image src={Telescope} alt="telescope" className="w-60" />
          </div>
        </div>
      </main>
    </div>
  );
}
