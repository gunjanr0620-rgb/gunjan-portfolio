// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});


// PROPERTY SEARCH

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

  const location = document.getElementById("location")
    .value.trim().toLowerCase();

  const type = document.getElementById("type").value;

  const price = document.getElementById("price").value;

  const cards = document.querySelectorAll(".property-card");

  let visibleCount = 0;

  cards.forEach(card => {

    const propertyLocation =
      card.dataset.location.toLowerCase();

    const propertyType = card.dataset.type;

    const propertyPrice = Number(card.dataset.price);

    const locationMatch =
      !location || propertyLocation.includes(location);

    const typeMatch =
      type === "all" || propertyType === type;

    const priceMatch =
      price === "all" || propertyPrice <= Number(price);

    if (locationMatch && typeMatch && priceMatch) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }

  });

  document.getElementById("noResults").hidden =
    visibleCount !== 0;

  document.getElementById("resultMessage").textContent =
    `Showing ${visibleCount} matching properties`;

  document.getElementById("properties")
    .scrollIntoView({ behavior: "smooth" });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value;

  if (!name || !email || !phone || !interest) {
    document.getElementById("formMessage").textContent =
      "Please complete all required fields.";
    return;
  }

  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your enquiry has been received.`;

  contactForm.reset();

});