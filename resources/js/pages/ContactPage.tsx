import ContactComponent from '@/components/ContactComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const ContactPage = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <Head title='Contact'/>
      <ContactComponent />
    </section>
  )
}

export default ContactPage