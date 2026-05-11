import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tutors from "../Pages/Tutors/Tutors";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layouts/AuthLayout";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import LearnMore from "../Components/LearMore";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "tuitions",
        element: <Tuitions></Tuitions>,
      },
      {
        path: "tutors",
        element: <Tutors></Tutors>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndCondition></TermsAndCondition>
      },
      {
        path: "learn-more",
        element: <LearnMore></LearnMore>
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);


export default router;
