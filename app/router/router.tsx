import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import HomePage from '../../pages/Home/HomePage'
import ServicesPage from '../../pages/Services/ServicesPage'
import ProgramsPage from '../../pages/Programs/ProgramsPage'
import ContactsPage from "../../pages/Contacts/ContactsPage"
import AboutPage from '../../pages/About/AboutPage'
import ReviewsPage from "../../pages/Reviews/ReviewsPage"
import ExercisesPage from "../../pages/Exercises/ExercisesPage"
import NutritionPage from "../../pages/Nutrition/NutritionPage"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "/reviews",
        element: <ReviewsPage />
      },
      {
        path: "/exercises",
        element: <ExercisesPage />
      },
      {
        path: "/nutrition",
        element: <NutritionPage />
      }
    ]
  }
])
