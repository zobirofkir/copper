export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category_id: number;
  category_title?: string;
}

export interface Category {
  id: number;
  title: string;
}

export interface GalleryProps {
  galleries: GalleryItem[];
  categories: Category[];
}