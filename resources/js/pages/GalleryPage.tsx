import GalleryComponent from '@/components/GalleryComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

const GalleryPage = () => {
  return (
    <section>
      <Head title='Gallery'/>
        <GalleryComponent />
    </section>
  )
}

export default GalleryPage