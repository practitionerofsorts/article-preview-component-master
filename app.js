const shareLinks = document.querySelector(".share-links-desktop");
const shareLinksMobile = document.querySelector(".share-links-mobile");
const shareArrow = document.querySelector(".share-arrow-container-desktop");
const shareArrowMobile = document.querySelector(
  ".share-arrow-container-mobile"
);
const profileaData = document.querySelector(".profile-data");
const profile = document.querySelector(".profile");
const share = document.querySelector(".share");

shareArrow.addEventListener("click", () => {
  shareLinks.classList.toggle("show");
});
shareArrowMobile.addEventListener("click", () => {
  profile.classList.toggle("change");
  profileaData.classList.toggle("hide");
  shareLinksMobile.classList.toggle("show");
  share.classList.toggle("change");
  shareArrowMobile.classList.toggle("show");
});
