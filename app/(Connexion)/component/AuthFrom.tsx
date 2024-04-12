"use client";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "@/app/(Connexion)/component/AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import {useRouter} from "next/navigation";
import Input from "@/components/input/Input";
import Button from "@/components/Button";


type Variant = 'LOGIN ' | 'REGISTER';

const AuthFrom = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN ');
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter();//je dois le sup après

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN ') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN ');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //créer une première action
        }
        if (variant === 'LOGIN ') {
            //connexion a la base de donné
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //connexion aves les compte
    }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
            style={{ backgroundColor: '#FFFFFF' }} // Remplacez '#FFFFFF' par la couleur souhaitée
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
                "
            >

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id="email"
                        label="Email Address"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        label="password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />

                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === 'LOGIN ' ? 'Sign in ' : 'Register'}
                        </Button>
                    </div>
                </form>
                {/*pour afficher le texte */}
                <div className="mt-6">
                    <div className="relative">
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                            ">

                            <div
                                className="
                                    w-full
                                    border-t
                                    border-gray-300
                                "
                            />
                        </div>
                        <div className="
                            relative
                            flex
                            justify-center
                            text-sm
                        ">
                            <span className="
                                bg-white
                                px-2
                                text-gray-500
                            ">
                                Ou continue avec

                            </span>

                        </div>

                    </div>

                </div>

                <div className="mt-6 flex gap-2">
                    {/*route.push("/document")  code que je doit normalement utiliser */}
                    <AuthSocialButton
                        icon={BsGithub}
                        onClick={() => socialAction('github')}


                    />
                    <AuthSocialButton
                        icon={BsGoogle}
                        onClick={() => socialAction('google')}
                    />
                </div>
            </div>

            <div className="
                flex
                gap-2
                justify-center
                text-sm
                mt-6
                px-2
                text-gray-500
            ">
                <div>
                    {variant === 'LOGIN ' ? 'Nouveau sur U-Chat?' : 'Vous avez déjà un compte?'}
                </div>
                <div
                    onClick={toggleVariant}
                    className="underline cursor-pointer"
                >
                    {variant === 'LOGIN ' ? 'Créer un compte' : 'login'}
                </div>
            </div>
        </div>
    )
}

export default AuthFrom;