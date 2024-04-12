"use client"

// Importing necessary components and hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/button";

// Home page heading component
export const Heading = () => {
    // Using useRouter hook from Next.js for navigation
    const route = useRouter();
    // State to manage the loading animation
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle button click and start loading animation
    const handleButtonClick = () => {
        setIsLoading(true);
        // Simulating an asynchronous operation before navigation
        setTimeout(() => {
            route.push("/login");
        }, 1000); // Adjust the timeout as needed
    };

    return (
        <div className="max-w-3xl space-x-4 relative">
            {/* Text content */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                "Faites passer vos messages professionnels via"
                <span className="underline"> U-Chat</span>
            </h1>
            <h3 className="
                text-base
                sm:text-xl
                md:text-2xl
                font-medium
                mb-4
             ">
                U-Chat est l'espace de travail connecté où <br/>
                une communication meilleur et plus rapide est effectué.
            </h3>

            {/* Loading animation or Button */}
            {isLoading ? (
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <div className="w-6 h-6 border-2 border-r-emerald-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <Button
                    onClick={handleButtonClick}
                    className="relative mb-4"
                    style={{ transition: "opacity 0.5s ease-in-out" }}
                >
                    Let's go
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
            )}
        </div>
    );
};