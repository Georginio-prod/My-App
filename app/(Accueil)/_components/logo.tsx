"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import {useRouter} from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {
    const route = useRouter();
    return(
        <div className="hidden md:flex items-center gap-x-2">

            <Image
                onClick={() => {
                    route.push("/")
                }}
                src="/logo.png"
                alt="Logo"
                height="40"
                width="40"
                className="hidden dark:block"
            />

            <Image
                onClick={() => {
                    route.push("/")
                }}
                src="/logo.png"
                alt="Logo"
                height="40"
                width="40"
                className="dark:hidden"
            />

            <p className={cn("font-semibold","flex", font.className)}>
                UChat
            </p>

        </div>
    )
}