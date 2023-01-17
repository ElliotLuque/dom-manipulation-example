"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearInput = document.getElementById("year");
  const textInput = document.getElementById("text");

  const addButton = document.getElementById("add");

  addButton.addEventListener("click", () => {
    const year = yearInput.value;
    const text = textInput.value;

    addCardToTimeline(year, text);
  });
});

const createCard = (year, text) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const yearElement = document.createElement("h2");
  yearElement.innerText = year;

  const textElement = document.createElement("p");
  textElement.innerText = text;

  card.appendChild(yearElement);
  card.appendChild(textElement);

  return card;
};

const addCardToTimeline = (year, text) => {
  const timelineContainers = document.querySelectorAll(".timeline > *");

  // Create new container
  const timelineContainer = document.createElement("div");
  timelineContainer.classList.add("container");

  // Determine if next container is right or left
  const lastContainer = timelineContainers[0];
  const lastContainerWasLeft = lastContainer.classList.contains("left");

  lastContainerWasLeft
    ? timelineContainer.classList.add("right")
    : timelineContainer.classList.add("left");

  const card = createCard(year, text);
  timelineContainer.appendChild(card);

  document.querySelector(".timeline").prepend(timelineContainer);
};

// Event bubbling

const wrapper = document.querySelector(".wrapper");
const title = document.getElementById("title");

title.addEventListener("click", (event) => {
  event.stopPropagation();
});

wrapper.addEventListener("click", (event) => {
  document.body.classList.add("animated");
});
