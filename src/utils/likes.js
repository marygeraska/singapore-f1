export function getLikedPhotos() {
  return JSON.parse(localStorage.getItem("likedPhotos")) || [];
}

export function saveLikedPhotos(ids) {
  localStorage.setItem("likedPhotos", JSON.stringify(ids));
}
