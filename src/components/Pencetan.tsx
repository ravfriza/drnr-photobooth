"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { Toaster } from "./ui/sonner"
import { redirect, RedirectType } from "next/navigation"

const Pencetan = () => {

    const handleClick = () => {
        toast("semoga cepet sembuh dan betmutnya ilang 😁")

        setTimeout(() => {
            redirect('/photoshot', RedirectType.push);
        }, 2000)
    }

    return (
        <>
            <Button
                variant="outline"
                className="rounded-full flex items-center justify-center text-lg px-6 py-3 md:text-4xl md:px-16 md:py-8 border-4 md:border-8 border-black font-medium tracking-wide"
                onClick={handleClick}
            >
                pencet sini kak
            </Button>
            <Toaster />
        </>
    )
}

export default Pencetan;