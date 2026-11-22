const WHATSAPP_PHONE = "79667557814";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const message = encodeURIComponent(
    `Здравствуйте! Новая заявка с сайта DIGITAL STUDIO.\n\nИмя: ${name}\nКонтакт: ${form.get("contact")}\nУслуга: ${form.get("service")}\nБюджет: ${form.get("budget") || "Не указан"}\n\nЗадача:\n${form.get("message") || "Не указана"}`
  );
  document.getElementById("submissionModalText").textContent =
    `${name}, ваша заявка принята. Мы свяжемся с вами в ближайшее время.`;
  const modal = document.getElementById("submissionModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-close-modal]").forEach(control => {
  control.addEventListener("click", () => {
    document.getElementById("submissionModal").hidden = true;
    document.body.classList.remove("modal-open");
  });
});
