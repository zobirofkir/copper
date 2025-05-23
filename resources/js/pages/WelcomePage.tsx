import AboutComponent from "@/components/AboutComponent"
import ProjectComponent from "@/components/ProjectComponent"
import SliderComponent from "@/components/SliderComponent"
import { Head } from "@inertiajs/react"

const WelcomePage = () => {
  return (
    <div>
      <Head title="Accueil"/>
      {
        /**
         * Slider Component
         */
      }
      <SliderComponent />
      
      {
        /**
         * About Component
         */
      }
      <AboutComponent />
      
      {
        /**
         * Project Component
         */
      }
      <ProjectComponent />
    </div>
  )
}

export default WelcomePage