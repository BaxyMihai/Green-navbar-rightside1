const icons = document.querySelectorAll(".icon");
const indicator = document.getElementById("indicator");

// Define an array for the top positions of each icon
const iconPositions = [
  45, // Position for the first icon (Menu)
  150, // Position for the second icon (Privacy)
  250, // Position for the third icon (Settings)
  360, // Position for the fourth icon (Folders)
  460, // Position for the fifth icon (Gallery)
];

// Add click event listeners to each icon
icons.forEach((icon, index) =>
  icon.addEventListener("click", () => moveIndicator(index))
);

function moveIndicator(index) {
  // Remove active class from all icons
  icons.forEach((icon) => icon.classList.remove("active"));

  // Add active class to the clicked icon
  icons[index].classList.add("active");

  // Move the indicator to the individual position for the clicked icon
  indicator.style.top = `${iconPositions[index]}px`; // Use the position from the array
  indicator.style.right = "0.6rem"; // Keep the indicator aligned to the right
}
