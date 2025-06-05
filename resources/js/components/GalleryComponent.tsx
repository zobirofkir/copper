import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import {
  CategoryFilter,
  DecorativeElements,
  GalleryGrid,
  PhotoModal,
  GalleryProps,
  GalleryItem
} from "./gallery";

const GalleryComponent: React.FC<GalleryProps> = ({ galleries, categories = [] }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredGalleries, setFilteredGalleries] = useState<GalleryItem[]>(galleries);
  const controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);
  
  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredGalleries(galleries);
    } else {
      setFilteredGalleries(galleries.filter(gallery => gallery.category_id === selectedCategory));
    }
  }, [selectedCategory, galleries]);
  
  const handleCategoryChange = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    controls.set("hidden");
    controls.start("visible");
  };

  const openPhotoModal = (photo: GalleryItem, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = (currentIndex + direction + filteredGalleries.length) % filteredGalleries.length;
    setSelectedPhoto(filteredGalleries[newIndex]);
    setCurrentIndex(newIndex);
  };

  const closePhotoModal = () => setSelectedPhoto(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl relative">
      <DecorativeElements />
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <GalleryGrid 
        galleries={filteredGalleries}
        isLoaded={isLoaded}
        loading={loading}
        controls={controls}
        onPhotoClick={openPhotoModal}
      />

      <PhotoModal 
        selectedPhoto={selectedPhoto}
        currentIndex={currentIndex}
        totalPhotos={filteredGalleries.length}
        onClose={closePhotoModal}
        onNavigate={navigatePhoto}
      />
    </div>
  );
};

export default GalleryComponent;