import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Calisthenics from "./components/Calisthenics/Calisthenics";
import Cardio from "./components/Cardio/Cardio";
import WeightTraining from "./components/WeightTraining/WeightTraining";
import Nutrition from "./components/Nutrition/Nutrition";
import CrossFit from "./components/CrossFit/CrossFit";



const About = React.lazy(() => import("./components/about/About"));
const Classes = React.lazy(() => import("./components/classes/Classes"));
const YogaClass = React.lazy(() => import("./components/yogaClass/YogaClass"));
const TrainersPage = React.lazy(() =>
  import("./components/trainersPage/TrainersPage")
);
const TrainerSingle = React.lazy(() =>
  import("./components/trainerSingle/TrainerSingle")
);
const Blog = React.lazy(() => import("./components/blog/Blog"));
const BlogSingle = React.lazy(() =>
  import("./components/blogSingle/BlogSingle")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Schedule = React.lazy(() => import("./components/schedule/Schedule"));
const ErrorPage = React.lazy(() => import("./components/errorPage/ErrorPage"));

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="yogaClass" element={<YogaClass />} />
          <Route path="Calisthenics" element={<Calisthenics />} />
          <Route path="Cardio" element={<Cardio />} />
          <Route path="WeightTraining" element={<WeightTraining />} />
          <Route path="Nutrition" element={<Nutrition />} />
          <Route path="CrossFit" element={<CrossFit />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="singleClass" element={<TrainerSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogSingle" element={<BlogSingle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
          
          <Route path="errorPage" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blog/single/:id" element={<BlogSingle />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
