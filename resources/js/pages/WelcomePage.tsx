import AboutComponent from "@/components/AboutComponent"
import SliderComponent from "@/components/SliderComponent"
import { Head } from "@inertiajs/react"

const WelcomePage = () => {
  return (
    <div className='dark:text-white text-black'>
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