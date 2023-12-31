import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Landing: React.FC<{}> = () => {
    return (
        <div className="w-full h-max absolute top-0 bg-[#F3F2EF]">
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
                    <Link href="/" passHref>
                        <a className="flex items-center self-center text-[24px] md:text-[32px] font-bold whitespace-nowrap">
                            College Talks
                        </a>
                    </Link>
                    <div className="flex items-center">
                        <Link href="/auth/register" passHref>
                            <a className="mr-2 md:mr-6 text-[14px] md:text-[18px] font-medium text-gray-500 duration-150 rounded-[30px] px-[10px] md:px-[20px] py-[10px] hover:bg-neutral-100">
                                Sign up
                            </a>
                        </Link>
                        <Link href="/auth/login" passHref>
                            <a className="text-[14px] md:text-[18px] font-medium text-blue-600 duration-150 rounded-[30px] px-[10px] md:px-[20px] py-[10px] border-2 hover:bg-cyan-50">
                                Sign in
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="mx-10 mt-[50px] relative w-fit mb-8 overflow-hidden bg-palette-main">
                <div className="container grid !px-0 md:grid-cols-5">
                    <div className="relative z-50 grid items-center w-full h-full md:px-8 pb-4 md:col-span-2 text-common-dark">
                        <div className="max-w-md">
                            <header>
                                <h1
                                    id="main"
                                    className="mt-4 text-2xl font-semibold leading-tight cursor-default md:text-3xl lg:text-5xl"
                                >
                                    Meet your friends, teachers and seniors
                                </h1>

                                <h2 className="mt-4 text-base md:text-base">
                                    A one step destination for students, teachers and even college
                                    passouts to share there achivements and updates. It can be also
                                    used to share announcement.
                                </h2>
                            </header>

                            <div className="flex gap-4 mx-auto mt-8">
                                <Link href="/auth/register" passHref>
                                    <a className="grid w-40 py-3 font-semibold text-white rounded-md bg-blue-600 place-items-center text-palette-main">
                                        Join Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        {/* <div className="absolute inset-0 md:left-[40%] bg-common-gray" /> */}
                        <span className="hidden md:inline-block relative h-[calc(100vh-200px)] w-full">
                            <Image
                                src={require("@/images/students.png")}
                                alt="Students"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="10% 10%"
                            />
                        </span>
                        <span className="inline-block md:hidden relative max-h-[calc(100vh-200px)] w-full">
                            <Image src={require("@/images/students.png")} alt="Students" />
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};
