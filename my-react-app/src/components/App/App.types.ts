export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  results: Photo[];
}

export interface ErrorMessageProps {
  message: string;
}

export interface ImageCardProps {
  image: Photo;
}

export interface ImageGalleryProps {
  images: Photo[];
  onImageClick: (image: Photo) => void;
}

export interface ImageModalProps {
  image: Photo | null;
  onClose: () => void;
}
