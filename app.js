const shareLinks = document.querySelector(".share-links-desktop");
const shareArrow = document.querySelector(".share-arrow-container-desktop");

shareArrow.addEventListener("click", () => {
  // if (shareLinks.style.display == "none") {
  //   shareLinks.style.display = "flex";
  // } else {
  //   shareLinks.style.display = "none";
  // }
  shareLinks.classList.toggle("linksHide");
});
