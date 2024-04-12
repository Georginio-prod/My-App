import Image from "next/image";
import React from "react";
import AuthFrom from "@/app/(Connexion)/component/AuthFrom";




export default function Home() {
    return (
        <div
            className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-6
        bg-gray-100
        "
        >

            <div className= "sm:mx-auto sm:w-full sm:max-w-md ">
                <img
                    alt="logo"
                    height="8"
                    width="8"
                    className="mx-auto w-auto  mr-4"
                    src="/logo.png"

                />

                <h2
                    className="
                mt-6
                text-center
                text-3xl
                font-bold
                tracking-tight
                text-gray-900


                "
                >
                    Connectez-vous à votre compte
                </h2>

            </div>
           <AuthFrom/>
        </div>
    )
}