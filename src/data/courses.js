import guitar from "./images/guitar.jpg";
import piano from "./images/piano.jpg";
import vocalist from "./images/vocalist.jpg";
import drumming from "./images/drumming.jpg";
import jazz from "./images/jazz.jpg";
import musicProd from "./images/music-prod.jpg";
import songWriting from "./images/song-writing.jpg";
import edm from "./images/edm.jpg";
import classicalMusic from "./images/classical-music.jpg";
import blues from "./images/blues.jpg";
import ukulele from "./images/ukulele.jpg";

export const courseData = {
  courses: [
    {
      id: 1,
      title: "Guitar Fundamentals",
      slug: "guitar-fundamentals",
      description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
      price: 99.99,
      instructor: "John Doe",
      isFeatured: true,
      image: guitar
    },
    {
      id: 2,
      title: "Piano for Beginners",
      slug: "piano-for-beginners",
      description: "Start your musical journey with foundational piano skills taught by expert instructors.",
      price: 109.99,
      instructor: "Jane Smith",
      isFeatured: false,
      image: piano
    },
    {
      id: 3,
      title: "Advanced Vocal Techniques",
      slug: "advanced-vocal-techniques",
      description: "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
      price: 119.99,
      instructor: "Emily Johnson",
      isFeatured: true,
      image: vocalist
    },
    {
      id: 4,
      title: "Drumming Mastery",
      slug: "drumming-mastery",
      description: "Master the drums with our comprehensive course covering all skill levels.",
      price: 129.99,
      instructor: "Mike Brown",
      isFeatured: false,
      image: drumming
    },
    {
      id: 5,
      title: "Jazz Improvisation",
      slug: "jazz-improvisation",
      description: "Learn the art of jazz improvisation with this course designed for all levels.",
      price: 139.99,
      instructor: "Chris Davis",
      isFeatured: false,
      image: jazz
    },
    {
      id: 6,
      title: "Music Production Fundamentals",
      slug: "music-production-fundamentals",
      description: "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
      price: 149.99,
      instructor: "Alex Wilson",
      isFeatured: true,
      image: musicProd
    },
    {
      id: 7,
      title: "Songwriting Essentials",
      slug: "songwriting-essentials",
      description: "Learn the essentials of songwriting to express your musical creativity.",
      price: 159.99,
      instructor: "Samantha Miller",
      isFeatured: false,
      image: songWriting
    },
    {
      id: 8,
      title: "Electronic Music Production",
      slug: "electronic-music-production",
      description: "Create compelling electronic music with our course designed for beginners to advanced users.",
      price: 169.99,
      instructor: "Luke Harris",
      isFeatured: true,
      image: edm
    },
    {
      id: 9,
      title: "Classical Music History",
      slug: "classical-music-history",
      description: "Explore the rich history of classical music from its origins to the present day.",
      price: 179.99,
      instructor: "Grace Lee",
      isFeatured: false,
      image: classicalMusic
    },
    {
      id: 10,
      title: "Blues Guitar Techniques",
      slug: "blues-guitar-techniques",
      description: "Discover the techniques of blues guitar to add soul and depth to your playing.",
      price: 189.99,
      instructor: "Ethan Moore",
      isFeatured: true,
      image: blues
    },
    {
      id: 11,
      title: "Ukulele Basics",
      slug: "ukulele-basics",
      description: "Learn the basics of playing the ukulele with this beginner-friendly course.",
      price: 79.99,
      instructor: "Sarah Johnson",
      isFeatured: true,
      image: ukulele
    }
  ]
};
