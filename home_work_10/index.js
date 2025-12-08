const header = document.createElement("header");

const title = document.createElement("h1");
title.textContent = "To Do List";

header.appendChild(title);

document.body.prepend(header);

const container = document.getElementById("formContainer");

const form = document.createElement("form");
form.id = "addNewsForm";
form.action = "#";
// form.method = "POST";

const labelTitle = document.createElement("label");
labelTitle.textContent = "Поле ввода: ";
labelTitle.htmlFor = "labelTitle";

const inputText = document.createElement("input");
inputText.type = "text";
inputText.id = "inputText";
inputText.name = "inputText";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Добавить";

form.appendChild(labelTitle);
form.appendChild(inputText);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
container.appendChild(form);

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const text = document.createElement("p");
    text.textContent = document
        .getElementById("inputText")
        .value.trim();
    document.getElementById("inputText").value = "";
    container.appendChild(text);
});
