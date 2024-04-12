import Image from "next/image";

//fait référence a l'image afficher sur la page d'acceuil
export const Heroes = () => {
    return(
        <div
            className="
            flex
            flex-col
            items-center
            justify-center
            max-w-5xl
        ">
            <div
                className="
                flex
                items-center
            ">
                {/*affichage du premier image */}
                <div
                    className="
                        relative
                        w-[300px]
                        h-[300px]
                        sm:w[350px]
                        sm:h-[350px]
                        md:h-[400px]
                        md:w-[400px]
                    ">
                    <Image
                        src="/document.png"
                        alt="Documents"
                        fill
                        className="object-contain dark:hidden"
                    />

                     <Image
                        src="/documents-dark.png"
                        alt="Documents"
                        fill
                        className="object-contain hidden dark:block"
                    />

                </div>
                {/*affichage du second image (lecteur sur la chaise */}
                <div className="
                    relative
                    h-[400px]
                    w-[400px]
                    hidde
                    md:block
                ">
                    <Image
                        src="/documents-dark.png"
                        alt="Reading"
                        fill
                        className="object-contain dark:hidden"
                    />

                     <Image
                        src="/document.png"
                        alt="Reading"
                        fill
                        className="object-contain hidden dark:block"
                    />
                </div>
            </div>
        </div>
    )
}

export default Heroes;