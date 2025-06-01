import React from 'react';
import PhotoAlbum from 'react-photo-album';
import { motion } from 'framer-motion';

const photos = [
  { src: 'https://lh5.googleusercontent.com/proxy/-yRg0E2RmAwZ1pLWg2CNPvpd_OxOEBxDUiF4xZS9-b994YRL9-FRgtWx_u8kvvdHsnP6BDB_SN7SaKlYSueSaCe2ptJ-f4DTQUIGbTQQUKIHCpGWhbzc1148fCHSNg', width: 800, height: 600 },
  { src: 'https://www.quebec-cite.com/sites/otq/files/styles/gallery_desktop/public/simpleview/roses-plate_FED586A4-2066-4AD0-9DB9E21D4756D49C_1b08faea-3213-4da6-a724048165c69583.jpg?itok=7MpRKP3r', width: 1200, height: 800 },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3TAzn_BDav5W6yl70ahhKdkYTbMJEl5Vn0uAYBPTYx1-xX8zpKllIxIR_bH59IOnj0E&usqp=CAU', width: 600, height: 800 },
  { src: 'https://lh6.googleusercontent.com/proxy/gSHyCMJ8tbLnM_T1i9p0P0iBrXoaVF0C6VyFh0BmTc5Zny6jJHYKXlBAjPj9g2wi4FMXVtnR9UYRa26HR4FcJQRYmfpqKf0cp2OQiUO40gJyYbI58-C31S-ahhO6gQdaVg', width: 900, height: 600 },
  
];

const GalleryComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Our Photo Gallery
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          spacing={10}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
        />
      </motion.div>
    </div>
  );
};

export default GalleryComponent;
