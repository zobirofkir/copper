import GalleryComponent from '@/components/GalleryComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const GalleryPage = () => {
  return (
    <section className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Head title='Galerie'/>
      <div className="pt-8 pb-16">
        <GalleryComponent />
      </div>
    </section>
  )
}

export default GalleryPage