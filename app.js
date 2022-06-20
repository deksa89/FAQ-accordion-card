const arr1 = document.getElementById("arr1");
const arr2 = document.getElementById("arr2");
const arr3 = document.getElementById("arr3");
const arr4 = document.getElementById("arr4");
const arr5 = document.getElementById("arr5");

const pitanje1 = document.querySelector("#q1");
const pitanje2 = document.querySelector("#q2");
const pitanje3 = document.querySelector("#q3");
const pitanje4 = document.querySelector("#q4");
const pitanje5 = document.querySelector("#q5");

const noviDiv1 = document.querySelector("#an1");
const noviDiv2 = document.querySelector("#an2");
const noviDiv3 = document.querySelector("#an3");
const noviDiv4 = document.querySelector("#an4");
const noviDiv5 = document.querySelector("#an5");

arr1.addEventListener("click", () => {
    let strelicaGore = arr1.classList.toggle("arrow-up");
    if (strelicaGore) {
        pitanje1.style.fontWeight = "700";
        noviDiv1.classList.add("show-kartica");
        noviDiv1.innerHTML = `<div>You can have up to 5 team members.</div>`;
    }
    else {
        pitanje1.style.fontWeight = "400";
        noviDiv1.classList.remove("show-kartica");
        noviDiv1.innerHTML = ``;
    }
})

arr2.addEventListener("click", () => {
  let strelicaGore = arr2.classList.toggle("arrow-up");
  if (strelicaGore) {
      pitanje2.style.fontWeight = "700";
      noviDiv2.classList.add("show-kartica");
      noviDiv2.innerHTML = `<div>Maximum upload size is 50 GB.</div>`;
  } else {
      pitanje2.style.fontWeight = "400";
      noviDiv2.classList.remove("show-kartica");
      noviDiv2.innerHTML = ``;
  }
});

arr3.addEventListener("click", () => {
  let strelicaGore = arr3.classList.toggle("arrow-up");
  if (strelicaGore) {
      pitanje3.style.fontWeight = "700";
      noviDiv3.classList.add("show-kartica");
      noviDiv3.innerHTML = `<div>Click on settings and reset my password.</div>`;
  } else {
      pitanje3.style.fontWeight = "400";
      noviDiv3.classList.remove("show-kartica");
      noviDiv3.innerHTML = ``;
  }
});

arr4.addEventListener("click", () => {
  let strelicaGore = arr4.classList.toggle("arrow-up");
  if (strelicaGore) {
      pitanje4.style.fontWeight = "700";
      noviDiv4.classList.add("show-kartica");
      noviDiv4.innerHTML = `<div>To cancel subscription send us a mail about cancelations of subscription.</div>`;
  } else {
      pitanje4.style.fontWeight = "400";
      noviDiv4.classList.remove("show-kartica");
      noviDiv4.innerHTML = ``;
  }
});

arr5.addEventListener("click", () => {
  let strelicaGore = arr5.classList.toggle("arrow-up");
  if (strelicaGore) {
      pitanje5.style.fontWeight = "700";
      noviDiv5.classList.add("show-kartica");
      noviDiv5.innerHTML = `<div>We encourage you to call us if having issues with app.</div>`;
  } else {
      pitanje5.style.fontWeight = "400";
      noviDiv5.classList.remove("show-kartica");
      noviDiv5.innerHTML = ``;
  }
});