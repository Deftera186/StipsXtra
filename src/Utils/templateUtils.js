export function AddItem(darkmode) {
  const form = document.createElement("form");
  form.setAttribute("id", "my-form");
  form.setAttribute("autocomplete", "off");
  const msgInput = document.createElement("textarea");
  msgInput.setAttribute("id", "msg");
  msgInput.setAttribute("name", "msg");
  msgInput.setAttribute("required", "");
  msgInput.setAttribute("placeholder", "כתוב הודעה בקיר הזה בעזרת StipsXtra: ");
  msgInput.setAttribute("style", "width: 75%;");
  if (darkmode) {
    msgInput.setAttribute("style", msgInput.getAttribute("style") + "background-color: #2c2c2c;");
  }
  form.appendChild(msgInput);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  if (darkmode) {
    submitButton.setAttribute("style", "background-color: #2c2c2c;");
  }
  const img = document.createElement("img");
  img.setAttribute("src", darkmode ? "https://img.icons8.com/ios-filled/34/ffffff/paper-plane.png" : "https://img.icons8.com/ios-filled/34/000000/paper-plane.png");
  img.setAttribute("alt", "send");
  submitButton.appendChild(img);

  form.appendChild(submitButton);
  return form;
}

export function negativeScore(score, attribute) {
  const scoreSpan = document.createElement("span");
  scoreSpan.textContent = score;
  scoreSpan.setAttribute(attribute, "");
  scoreSpan.classList.add("score");
  return scoreSpan;
}