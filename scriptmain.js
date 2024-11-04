document.addEventListener("DOMContentLoaded", () => {
    const addProjectBtn = document.querySelector(".add-project");
    const addProjectWrapper = document.querySelector(".add-project-wrapper");
    const addProjectCloseBtn = document.querySelector(".add-project-header .close");

    // Toggle form visibility when "+" button is clicked
    addProjectBtn.addEventListener("click", () => {
      addProjectWrapper.classList.toggle("active");
    });

    // Close form when "x" button is clicked
    addProjectCloseBtn.addEventListener("click", () => {
      addProjectWrapper.classList.remove("active");
    });

    // Close form if clicking outside of it
    document.addEventListener("click", (e) => {
      if (!addProjectWrapper.contains(e.target) && e.target !== addProjectBtn) {
        addProjectWrapper.classList.remove("active");
      }
    });
  });