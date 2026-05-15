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
import BeATutor from "../Pages/BeATutor/BeATutor";
import PrivateRoute from "./PrivateRoute";
import PostTuitionForm from "../Pages/PostTuition/PostTuition";
import PostTuition from "../Pages/PostTuition/PostTuition";
import MyTuitions from "../Pages/Dashboard/MyTuition/MyTuitions";
import DashboardLayout from "../Layouts/DashboardLayout";


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
      },
      {
        path: "become-tutor",
        element: <PrivateRoute>
          <BeATutor></BeATutor>
        </PrivateRoute>
      },


      {
        path: "post-tuition",
        element: <PostTuition></PostTuition>
      },
      {
        path: "be-a-tutor",
        element: <BeATutor></BeATutor>
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

  {
    path: 'dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: 'my-tuitions',
        element: <MyTuitions></MyTuitions>
      }
    ]
  }



]);


export default router;
