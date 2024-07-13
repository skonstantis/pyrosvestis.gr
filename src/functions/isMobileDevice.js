/* Author: Sotiris Konstantis */

export const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|Tablet/i.test(navigator.userAgent);
};
