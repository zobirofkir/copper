import { motion } from "framer-motion";
import AboutComponent from "@/components/AboutComponent"
import ProjectComponent from "@/components/ProjectComponent"
import SliderComponent from "@/components/SliderComponent"
import ContactComponent from "@/components/ContactComponent"
import { Head, usePage } from "@inertiajs/react"
import CompanyComponent from "@/components/CompanyComponent"
import SubscriptionComponent from "@/components/SubscriptionComponent";

const WelcomePage = () => {
  const { projects, categories, companies } = usePage().props as any;

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Head title="Accueil"/>
      {
        /**
         * Slider Component
         */
      }
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <SliderComponent />
      </motion.div>

      {
        /**
         * About Component
         */
      }
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <AboutComponent />
      </motion.div>

      {
        /**
         * Project Component
         */
      }
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <ProjectComponent />
      </motion.div>

      {
        /**
         * Company Component
         */
      }
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <CompanyComponent companies={companies} />
      </motion.div>

      {
        /**
         * Subscription Component
         */
      }
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <SubscriptionComponent />
      </motion.div>
    </div>
  )
}

export default WelcomePage