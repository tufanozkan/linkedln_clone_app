export const checkImageURL = (urL) => {
  if (!urL) return false;
  else {
    const pattern = new RegExp(
      "^https?: |/\\/.+|. (png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(urL);
  }
};
