import GalleryComponent from '@/components/GalleryComponent'
import { Head } from '@inertiajs/react'
import React from 'react'

interface GalleryPageProps {
  galleries: {
    id: number;
    src: string;
    alt: string;
    category_id: number;
    category_title?: string;
  }[];
  categories?: {
    id: number;
    title: string;
  }[];
}

const GalleryPage = ({ galleries, categories = [] }: GalleryPageProps) => {
  return (
    <section className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Head title='Galerie'/>
      <div className="pt-8 pb-16">
        <GalleryComponent galleries={galleries} categories={categories} />
      </div>
    </section>
  )
}

export default GalleryPage