/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let cardNumber = document.getElementById("cardNumber");
let cvcNumber = document.getElementById("cvcNumber");
let amount = document.getElementById("amount");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let city = document.getElementById("city");
let postalCode = document.getElementById("postalCode");
let messageForm = document.getElementById("messageForm");
let state = document.getElementById("state");
let sendBtn = document.getElementById("sendBtn");
let message = document.getElementById("fieldsMissing");

function formValidation(event) {
  event.preventDefault();
  let hasError = false;
  //cardNumber
  if (cardNumber.value === "") {
    cardNumber.classList.add("is-invalid");
    hasError = true;
  } else cardNumber.classList.remove("is-invalid");
  //cvcNumber
  if (cvcNumber.value === "") {
    cvcNumber.classList.add("is-invalid");
    hasError = true;
  } else cvcNumber.classList.remove("is-invalid");
  //amount
  if (amount.value === "") {
    amount.classList.add("is-invalid");
    hasError = true;
  } else amount.classList.remove("is-invalid");
  //firstName
  if (firstName.value === "") {
    firstName.classList.add("is-invalid");
    hasError = true;
  } else firstName.classList.remove("is-invalid");
  //lastName
  if (lastName.value === "") {
    lastName.classList.add("is-invalid");
    hasError = true;
  } else lastName.classList.remove("is-invalid");
  //city
  if (city.value === "") {
    city.classList.add("is-invalid");
    hasError = true;
  } else city.classList.remove("is-invalid");
  //postalCode
  if (postalCode.value === "") {
    postalCode.classList.add("is-invalid");
    hasError = true;
  } else postalCode.classList.remove("is-invalid");
  //messageForm
  if (messageForm.value === "") {
    messageForm.classList.add("is-invalid");
    hasError = true;
  } else messageForm.classList.remove("is-invalid");
  //state
  if (state.value === "") {
    state.classList.add("is-invalid");
    hasError = true;
  } else state.classList.remove("is-invalid");
  //fieldmissing message
  if (hasError)
    message.innerHTML = `<div class="alert alert-danger text-start fw-semibold">Some fields are missing</div>`;
  else message.innerHTML = "";
  console.log("procesed");
}

sendBtn.addEventListener("click", formValidation);
