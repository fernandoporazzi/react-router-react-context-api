export const getThumbnails = (images) => {
  return {
    thumbnails: images.filter(image => image.format === 'thumbnail')
  }
};
export const getGalleryImages = (images) => {
  return {
    galleryImages: images.filter(image => image.format === 'product')
  }
};