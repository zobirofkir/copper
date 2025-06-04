import GalleryComponent from '@/components/GalleryComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const GalleryPage = () => {
  return (
    <section className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Head title='Galerie'/>
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Galerie de Portfolio
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400">
              Une collection de nos meilleurs travaux démontrant notre savoir-faire et notre attention aux détails.
            </p>
          </div>
        </div>
        <GalleryComponent />
      </div>
    </section>
  )
}

export default GalleryPage