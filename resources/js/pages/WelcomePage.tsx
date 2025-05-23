import AboutComponent from "@/components/AboutComponent"
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
    </div>
  )
}

export default WelcomePage