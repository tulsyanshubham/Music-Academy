'use client';
import React from 'react'
import {courseData} from '@/data/courses'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { StaticImageData } from 'next/image';

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image?: StaticImageData
}

export default function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center mx-8">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm pb-10 relative">
                                {/* <Image
                                    src={`/jordans.webp`}
                                    alt="jordans"
                                    height="400"
                                    width="400"
                                    className="object-contain"
                                /> */}
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className='absolute bottom-5'>
                                        <button className="px-5 py-1 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>

                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 text-center">
                <Link href={"/courses"}>
                    <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            View All courses
                        </div>
                    </button>
                </Link>
            </div>

        </div>
    )
}
