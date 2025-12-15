'use strict';

/*----------------------------------------------------
 🌟 1. Element Toggle Utility
----------------------------------------------------*/
const toggleClass = (elem, className = "active") => {
  elem.classList.toggle(className);
};

/*----------------------------------------------------
 🌗 2. Dark Mode Toggle
----------------------------------------------------*/
const themeBtn = document.querySelector("[data-theme-btn]");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.classList.toggle("active");
  });
}

/*----------------------------------------------------
 🧭 3. Sidebar Toggle (Mobile)
----------------------------------------------------*/
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => toggleClass(sidebar));
}

/*----------------------------------------------------
 💬 4. Testimonials Modal (Enhanced Animations)
----------------------------------------------------*/
const testimonialItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const openModal = () => toggleClass(modalContainer, "active");
const closeModal = () => toggleClass(modalContainer, "active");

testimonialItems.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    openModal();
  });
});

modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*----------------------------------------------------
 🎚 5. Custom Select (Filter Menu)
----------------------------------------------------*/
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", () => toggleClass(select));

const filterFunc = (value) => {
  filterItems.forEach(item => {
    const category = item.dataset.category;
    item.classList.toggle("active", value === "all" || value === category);
  });
};

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const value = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    toggleClass(select);
    filterFunc(value);
  });
});

/* Large screen filter */
let lastFilterButton = filterButtons[0];
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;

    filterFunc(value);
    lastFilterButton.classList.remove("active");
    btn.classList.add("active");
    lastFilterButton = btn;
  });
});

/*----------------------------------------------------
 📨 6. Contact Form Validation
----------------------------------------------------*/
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

/*----------------------------------------------------
 📄 7. Page Navigation (Smooth Fade Transition)
----------------------------------------------------*/
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const targetPage = link.innerHTML.toLowerCase();

    pages.forEach((page, i) => {
      const isActive = page.dataset.page === targetPage;

      page.classList.toggle("active", isActive);
      navLinks[i].classList.toggle("active", isActive);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/*----------------------------------------------------
 ⌨️ 8. Typewriter Effect
----------------------------------------------------*/
const typewriterElem = document.querySelector("[data-typewriter]");
if (typewriterElem) {
  const text = typewriterElem.dataset.text;
  let idx = 0;

  const typewriter = () => {
    typewriterElem.innerText = text.slice(0, idx);
    idx++;
    if (idx <= text.length) setTimeout(typewriter, 75);
  };

  typewriter();
}

/*----------------------------------------------------
 🎭 9. Scroll Reveal Animations
----------------------------------------------------*/
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/*----------------------------------------------------
 🖼️ 10. Project Hover Lift Animation
----------------------------------------------------*/
const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {
  item.addEventListener("mouseenter", () => item.classList.add("hover"));
  item.addEventListener("mouseleave", () => item.classList.remove("hover"));
});
