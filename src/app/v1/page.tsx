import NextButton from "@/components/NextButton"
import Image from "next/image"
import DrnrLogo from "@/drnr-assets/drnr-photobooth-new.png"
import Funsies from "@/drnr-assets/funsies.png"
import Bear from "@/drnr-assets/bear.png"
import Love from "@/drnr-assets/lope.png"


export default function Home() {
    return (
        <>
            <main className="w-full h-dvh bg-[#fbbf17]">
                <div className="flex justify-center pt-28">
                    <Image src={DrnrLogo} className="w-4/5 md:w-28" alt="drnr-logo" />
                </div>

                <div className="mt-10 ms-5">
                    <Image src={Funsies} className="w-1/2 md:w-28" alt="drnr-logo" />
                </div>

                <div className="mt-4 flex justify-end mr-5">
                    <Image src={Bear} className="w-1/2 md:w-28" alt="drnr-logo" />
                </div>

                <div className="flex justify-center mt-20">
                    <NextButton url="v1/tutorial" />
                </div>

                <div className="flex justify-center mt-4">
                    <Image src={Love} className="w-2/5 md:w-28" alt="drnr-logo" />
                </div>
            </main>
        </>
    )
}