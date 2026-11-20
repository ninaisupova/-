// Перед публикацией укажите рабочий адрес электронной почты.
const CONTACT_EMAIL = "your-email@example.com";

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
  if (CONTACT_EMAIL === "your-email@example.com") {
    document.getElementById("formStatus").textContent =
      "Форма готова. Для отправки заявок укажите рабочий e-mail в файле script.js.";
    return;
  }
  const subject = encodeURIComponent("Заявка с сайта DIGITAL STUDIO");
  const body = encodeURIComponent(
    `Имя: ${form.get("name")}\nКонтакт: ${form.get("contact")}\nУслуга: ${form.get("service")}\nБюджет: ${form.get("budget") || "Не указан"}\n\nЗадача:\n${form.get("message") || "Не указана"}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
