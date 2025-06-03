import React, { useState } from "react";

const GalleryComponent = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      src: "https://media.istockphoto.com/id/1279278493/fr/photo/pile-de-tige-de-cuivre-de-ferraille.jpg?s=612x612&w=0&k=20&c=5Lo4wgnZt26C2dp9RbPVc45t0m4H1XLPnvaZnDPTWeU=",
      alt: "Photo 1",
    },
    {
      src: "https://www.zintilon.com/wp-content/uploads/2024/02/copper-parts-and-components.jpg",
      alt: "Photo 2",
    },
    {
      src: "https://media.istockphoto.com/id/1279278493/fr/photo/pile-de-tige-de-cuivre-de-ferraille.jpg?s=612x612&w=0&k=20&c=5Lo4wgnZt26C2dp9RbPVc45t0m4H1XLPnvaZnDPTWeU=",
      alt: "Photo 3",
    },
    {
      src: "https://www.zintilon.com/wp-content/uploads/2024/02/copper-parts-and-components.jpg",
      alt: "Photo 4",
    },
    {
      src: "https://media.istockphoto.com/id/1279278493/fr/photo/pile-de-tige-de-cuivre-de-ferraille.jpg?s=612x612&w=0&k=20&c=5Lo4wgnZt26C2dp9RbPVc45t0m4H1XLPnvaZnDPTWeU=",
      alt: "Photo 5",
    },
    {
      src: "https://www.zintilon.com/wp-content/uploads/2024/02/copper-parts-and-components.jpg",
      alt: "Photo 6",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Photo Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            onClick={() => setSelectedPhoto(photo)}
            className="w-full h-auto object-cover rounded-lg cursor-pointer"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation(); // prevent closing when clicking button
                setSelectedPhoto(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
