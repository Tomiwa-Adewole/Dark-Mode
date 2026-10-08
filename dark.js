const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
});
