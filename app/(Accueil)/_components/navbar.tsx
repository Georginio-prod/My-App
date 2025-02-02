"use client"

import {cn} from "@/lib/utils";
import {Logo} from "@/app/(Accueil)/_components/logo";
import {useScrollTop} from "@/hooks/use-scroll-top";
import {ModeToggle} from "@/components/mode-toggle";

const Navbar =() => {
    const scrolled = useScrollTop();
    return(
        <div className={ cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo/>
            <div className="md:ml-auto md:justify-end
            justify-between w-full flex items-center gap-x-2">

                <ModeToggle/>
            </div>
        </div>
    )
}
//code permettant l'affichage du logo et login sur l'entête de la page
export default Navbar;