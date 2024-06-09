'use client';
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';

const featuredWebinars = [
  {
    "title": "Understanding Music Theory",
    "description": "Explore the fundamentals of music theory, including scales, chords, and harmony. Enhance your musical skills and creativity with a solid theoretical foundation, suitable for all levels of musicianship.",
    "slug": "understanding-music-theory",
    "isFeatured": true
  },
  {
    "title": "The Art of Songwriting",
    "description": "Master the craft of songwriting, from finding inspiration and writing lyrics to crafting melodies and structuring songs. Ideal for beginners and those looking to refine their songwriting skills.",
    "slug": "the-art-of-songwriting",
    "isFeatured": true
  },
  {
    "title": "Mastering Your Instrument",
    "description": "Learn advanced techniques to master your instrument, improve practice routines, and enhance performance skills. Designed for serious musicians aiming to take their playing to the next level.",
    "slug": "mastering-your-instrument",
    "isFeatured": true
  },
  {
    "title": "Music Production Essentials",
    "description": "Start your journey in music production by learning the basics of audio engineering, digital audio workstations, and sound design. Perfect for aspiring producers.",
    "slug": "music-production-essentials",
    "isFeatured": true
  },
  {
    "title": "Live Performance Techniques",
    "description": "Enhance your live performance skills with tips on stage presence, audience engagement, and managing live sound. Gain confidence and deliver captivating performances.",
    "slug": "live-performance-techniques",
    "isFeatured": true
  },
  {
    "title": "Digital Music Marketing",
    "description": "Learn how to promote your music effectively online. Explore social media strategies, digital distribution, and ways to engage with your audience and build your brand.",
    "slug": "digital-music-marketing",
    "isFeatured": true
  }
]

export default function UpcomingWebinars() {
  return (
    <div className="p-12 px-1 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webiar => (
            {
              title: webiar.title,
              description: webiar.description,
              link: '/',
            }
          ))} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Webinars
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
