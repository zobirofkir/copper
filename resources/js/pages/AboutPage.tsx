import AboutComponent from '@/components/AboutComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const AboutPage = () => {
  return (
    <section>
        <Head title='About Us'/>
        <div>
            <AboutComponent />
        </div>
    </section>
    )
}

export default AboutPage