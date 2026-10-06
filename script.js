"use strict";
const options = {
  explore: {
    kicker: "A LIGHT START",
    title: "A conversation and a focused session.",
    text: "Discuss one priority, explore a relevant example and identify whether further support would be useful.",
    result: "Outcome: a short note of options and possible next steps."
  },
  clarify: {
    kicker: "TARGETED PREPARATION",
    title: "Work through one meaningful use case.",
    text: "Bring the right business and technical people together for a small series of online sessions and practical demonstrations, scheduled around their availability.",
    result: "Outcome: clearer requirements, an option comparison and initial acceptance criteria."
  },
  deepen: {
    kicker: "SUPPORT AS YOU PROGRESS",
    title: "Add depth where it brings value.",
    text: "Select further workshops, technology training, procurement preparation or architecture and project coordination. Agree each next piece of work as priorities develop.",
    result: "Outcome: a more detailed plan and support tailored to your chosen direction."
  }
};
const detail = document.getElementById("pace-detail");
document.querySelectorAll("[data-pace]").forEach(button => {
  button.addEventListener("click", () => {
    const option = options[button.dataset.pace];
    document.querySelectorAll("[data-pace]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    detail.querySelector(".pace-kicker").textContent = option.kicker;
    detail.querySelector("h3").textContent = option.title;
    detail.querySelector("p:not([class])").textContent = option.text;
    detail.querySelector(".pace-result").textContent = option.result;
  });
});
