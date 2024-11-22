import fitnessTraining1 from "../assets/Xcross.jpg";
import fitnessTraining2 from "../assets/Xdiet.jpg";
// import fitnessTraining3 from "../assets/home2.png";

// Home Swiper Images
import homeSwiperImh1 from "../assets/Xtimg.png";
import homeSwiperImh2 from "../assets/Xtimg.png";

// Trainers Data Images
import trainer1 from "../assets/XVis.png";

// The Story Behind Our Gym imege
import story from "../assets/about5.png";

// allOurTrainersData Images
import ourTrainer1 from "../assets/home4.png";
import ourTrainer2 from "../assets/home2.png";
import ourTrainer3 from "../assets/home3.png";
import ourTrainer4 from "../assets/classes2.png";
import ourTrainer5 from "../assets/classes3.png";
import ourTrainer6 from "../assets/classes4.png";

import ourTrainers1 from "../assets/tr1.png";


import blogArticle1 from "../assets/Xb12.jpg";
import blogArticle2 from "../assets/blog3.png";
import blogArticle3 from "../assets/blog4.png";
import blogArticle4 from "../assets/blog5.png";
import blogArticle5 from "../assets/blog6.png";
import blogArticle6 from "../assets/blog7.png";

// Small Images
import thumbnail1 from "../assets/Xb12.jpg";
import thumbnail2 from "../assets/blog9.png";
import thumbnail3 from "../assets/blog10.png";
import thumbnail4 from "../assets/blog11.png";
import thumbnail5 from "../assets/blog12.png";
import thumbnail6 from "../assets/blog13.png";

export const headerLinksData = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "About",
    to: "/about",
  },
  {
    id: 3,
    title: "Classes",
    to: "/classes",
  },
  {
    id: 4,
    title: "Trainers",
    to: "/trainers",
  },
  {
    id: 5,
    title: "Blog",
    to: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    to: "/contact",
  },
];

export const fitnessTrainingData = [
  {
    id: 1,
    title: "CrossFit Workout",
    description: "CrossFit is a high-intensity workout combining strength, cardio, and functional movements to boost overall fitness and adaptability.",
    image: fitnessTraining1,
    to: "/yogaClass",
  },

  {
    id: 2,
    title: "Nutrition & Diet",
    description: "CrossFit nutrition emphasizes balanced meals with lean protein, healthy fats, and complex carbs to fuel energy, aid recovery, and enhance performance.",
    image: fitnessTraining2,
    to: "/yogaClass",
  },

  // {
  //   id: 3,
  //   title: "CrossFit Workout",
  //   description: "containing Lorem Ipsum passage sand more recently with",
  //   image: fitnessTraining3,
  //   to: "/",
  // },
];

export const homeSwiperData = [
  {
    id: 1,
    name: "Ananya Patel",
    title: "Mumbai",
    image: homeSwiperImh1,
    description: `Joining X Engine transformed my fitness journey. The personalized workout routines and diet plans crafted by Rahul Sharma not only helped me shed 10 kg but also boosted my energy levels. His engineering precision in designing CrossFit programs is truly commendable.`,
  },

  {
    id: 2,
    name: "Ravi Kumar",
    title: "Bengaluru",
    image: homeSwiperImh2,
    description: `As a software engineer, I struggled with a sedentary lifestyle. X Engine's tailored approach provided me with effective workouts and nutrition guidance that fit into my busy schedule. I've gained muscle mass and improved my overall health, all thanks to Rahul's expertise.`,
  },

  {
    id: 3,
    name: "Priya Singh",
    title: "Delhi",
    image: homeSwiperImh1,

    description: `I was skeptical about CrossFit, but X Engine's customized plans made it accessible and enjoyable. The combination of structured workouts and a balanced diet plan helped me achieve my fitness goals faster than I imagined. Rahul's dedication and knowledge are evident in every session.`,
  },

  {
    id: 4,
    name: "Nattasha",
    title: "Athletics /Trainer",
    image: homeSwiperImh1,
    description: `There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour`,
  },
];

export const trainersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    title: "CrossFit Trainer",
    image: trainer1,
    to: "https://www.linkedin.com/in/the-mustafa-khaled/",
  },

];

export const gymAmenitiesData = [
  {
    id: 1,
    title: "Personalized Plans",
    description: "Tailored diet and workout routines designed to match your fitness goals.  ",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: `  Direct access to Rahul Sharma's expertise as a CrossFit trainer and engineer.`,
  },

  {
    id: 3,
    title: "Exclusive Content",
    description: `Members-only fitness videos, tips, and resources curated by Rahul Sharma.`,
  },

  {
    id: 4,
    title: "Flexible Consultations",
    description: "Schedule personal phone or video sessions for customized support.",
  },

  {
    id: 5,
    title: "Progress Tracking",
    description: "Regular updates and adjustments to plans for optimal results",
  },

  {
    id: 6,
    title: "Transformational Results",
    description: `Achieve sustainable health and fitness improvements under expert care.`,
  },
];

export const ourPlansData = [
  {
    id: 1,
    title: "Basic",
    offer: "$25 / month",
    description: "30% Off for Beginners",
    icon: "fa-solid fa-heart",
  },
  {
    id: 2,
    title: "Standard",
    offer: "$35 / month",
    description: "Most popular",
    icon: "fa-solid fa-star",
  },

  {
    id: 3,
    title: "Premium",
    offer: "$50 / month",
    description: "10% Off for Yoga Class",
    icon: "fa-solid fa-gem",
  },
];

export const articlesNewsData = [
  {
    id:1,
    about: "Cross-Fit",
  }
];

export const gymStoryData = [
  {
    id: 1,
    welcome: "Welcome",
    title: "The Story Behind Our Gym",
  },

  {
    id: 2,
    title: "Story",
    image: story,
  },
  {
    id: 3,
    title: "Our Mission",
  },

  {
    id: 4,
    title: "Our Value",
  },
];

export const valuesBoxes = [
  {
    id: 1,
    icon: "fa-regular fa-newspaper",
    title: "Certified trainer",
  },
  {
    id: 2,
    icon: "fa-solid fa-apple-whole",
    title: "Nutrition & diet",
  },

  {
    id: 3,
    icon: "fa-solid fa-person",
    title: "Years of experience",
  },
];

export const valuesNumbers = [
  {
    id: 1,
    number: "10+",
    description: "Year of Experience",
  },

  {
    id: 2,
    number: "500+",
    description: "Happy Clients",
  },

  {
    id: 3,
    number: "50+",
    description: "Expert Trainers",
  },

  {
    id: 4,
    number: "15k",
    description: "Instagram followers",
  },
];

export const allOurTrainersData = [
  {
    id: 1,
    title: "Pilates Training",
    image: ourTrainer1,
    to: "/yogaClass",
  },

  {
    id: 2,
    title: "CrossFit",
    image: ourTrainer2,
    to: "/",
  },

  {
    id: 3,
    title: "Aerobic",
    image: ourTrainer3,
    to: "/",
  },

  {
    id: 4,
    title: "Yoga As Therapy",
    image: ourTrainer4,
    to: "/",
  },

  {
    id: 5,
    title: "Boxing",
    image: ourTrainer5,
    to: "/",
  },

  {
    id: 6,
    title: "Energy Dance",
    image: ourTrainer6,
    to: "/",
  },
];

export const ourTrainers = [
  {
    id: 1,
    image: trainer1,
    name: "Rahul Sharma",
  },

];

export const blogArticlesNewsData = [
  {
    id: 1,
    title: "21 spices for healthy holiday foods",
    description: `Herbs and spices packed with antioxidants and other beneficial compounds bring satisfying flavors to favorite foods.`,
    blog: `The holiday season is one of the hardest times of the year to resist salty, fatty, sugary foods. Who doesn't want to enjoy the special dishes and treats that evoke memories and meaning — especially during the pandemic? Physical distancing and canceled gatherings may make you feel that indulging is a way to pull some joy out of the season.

But stay strong. While it's okay to have an occasional bite or two of marbled roast beef, buttery mashed potatoes, or chocolate pie, gorging on them frequently can lead to weight gain, and increased blood pressure, blood sugar, and "bad" LDL cholesterol.

Instead, skip the butter, cream, sugar, and salt, and flavor your foods with herbs and spices.

The bounty of nature's flavor-makers go beyond enticing tastes, scents, and colors. Many herbs and spices contain antioxidants, flavonoids, and other beneficial compounds that may help control blood sugar, mood, and inflammation.

Amp up holiday foods with herbs and spices
Try flavoring your foods with some of the herbs and spices in the list below. Play food chemist and experiment with combinations you haven't tried before. The more herbs and spices you use, the greater the flavor and health rewards. And that's a gift you can enjoy all year through.

Allspice: Use in breads, desserts, and cereals; pairs well with savory dishes, such as soups, sauces, grains, and vegetables.

Basil: Slice into salads, appetizers, and side dishes; enjoy in pesto over pasta and in sandwiches.

Cardamom: Good in breads and baked goods, and in Indian dishes, such as curry.

Cilantro: Use to season Mexican, Southwestern, Thai, and Indian foods.

Cinnamon: Stir into fruit compotes, baked desserts, and breads, as well as Middle Eastern savory dishes.

Clove: Good in baked goods and breads, but also pairs with vegetable and bean dishes.

Cumin: Accents Mexican, Indian, and Middle Eastern dishes, as well as stews and chili.

Dill weed: Include in potato dishes, salads, eggs, appetizers, and dips.

Garlic: Add to soups, pastas, marinades, dressings, grains, and vegetables.

Ginger: Great in Asian and Indian sauces, stews, and stir-fries, as well as beverages and baked goods.

Marjoram: Add to stews, soups, potatoes, beans, grains, salads, and sauces.

Mint: Flavors savory dishes, beverages, salads, marinades, and fruits.

Nutmeg: Stir into fruits, baked goods, and vegetable dishes.

Oregano: Delicious in Italian and Mediterranean dishes; it suits tomato, pasta, grain dishes, and salads.

Parsley: Enjoy in soups, pasta dishes, salads, and sauces.

Pepper (black, white, red): Seasons soups, stews, vegetable dishes, grains, pastas, beans, sauces, and salads.

Rosemary: Try it in vegetables, salads, vinaigrettes, and pasta dishes.

Sage: Enhances grains, breads, dressings, soups, and pastas.

Tarragon: Add to sauces, marinades, salads, and bean dishes.

Thyme: Excellent in soups, tomato dishes, salads, and vegetables.

Turmeric: Essential in Indian foods; pairs well with soups, beans, and vegetables.`,
    category: "Nutrition",
    name: "Heidi Godman",
    image: blogArticle1,
    thumbnail: thumbnail1,
  },
  
];

export const contactInfoData = [
  {
    id: 1,
    title: "Phone",
    icon: "fa-solid fa-phone",
    cta: "+91 97804 15584",
  },
  {
    id: 2,
    title: "Email",
    icon: "fa-solid fa-envelope",
    cta: "rahulsharma@gmail.com",
  },

  {
    id: 3,
    title: "Location",
    icon: "fa-solid fa-location-dot",
    cta: "Dehradun, India",
  },
];
