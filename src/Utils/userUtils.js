export function extractUserProfileImage() {
  return document.querySelector("img.ng-star-inserted").getAttribute("src");
}

export function extractUserID() {
  return location.href.split("/").at(-1);
}
