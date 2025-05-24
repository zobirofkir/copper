import AboutComponent from "@/components/AboutComponent"
import ProjectComponent from "@/components/ProjectComponent"
import SliderComponent from "@/components/SliderComponent"
import ContactComponent from "@/components/ContactComponent"
import { Head, usePage } from "@inertiajs/react"

const WelcomePage = () => {
  const { projects, categories } = usePage().props as any;
  
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

      {
        /**
         * Contact Component
         */
      }
      <ContactComponent/>
    </div>
  )
}

export default WelcomePage