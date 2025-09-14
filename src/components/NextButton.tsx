"use client"

import { Button } from "./ui/button"
import { redirect, RedirectType } from "next/navigation"

const NextButton = ({ url }: { url: string }) => {
    const handleClick = () => {
            redirect(url, RedirectType.push);
    }

    return (
        <>
        <div className="border-4 border-black ps-1 bg-white pt-1">
           <Button
           className="border-b-4 border-[#868686] border-e-4 h-auto text-lg font-semibold tracking-widest"
                onClick={handleClick}
            >
                pencet sini kaks
            </Button> 
        </div>
            
        </>
    )
}

export default NextButton;