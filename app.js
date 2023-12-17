"use strict"

// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseover", () => {
//   console.log("Button hovered!");
// });

// btn.addEventListener("mouseout", () => {
  //   console.log("Button unhovered!");
// });

// const callbackFn = () => {
  //   console.log("Common fn");
  // };
  
  // btn.addEventListener("mouseover", callbackFn);
  // btn.addEventListener("mouseout", callbackFn);
  
// const btn = document.querySelector(".btn");

// const callbackFn = () => {
// console.log("Triggered!");
// };

// btn.addEventListener("click", callbackFn);

// document.addEventListener("keydown", (event) => {
//   // console.log("event");
//   if (event.key === "Enter") {
//     console.log("entered");
//   };
// });

// const btnOpenModal = document.querySelector(".btn__open__modal");
// const btnCloseModal = document.querySelector(".btn__close__modal");
// const modal = document.querySelector(".modal")

// const openModal = () => {
//   modal.classList.remove("hidden");
// };

// const closeModal = () => {
//   modal.classList.add("hidden");
// };

// btnOpenModal.addEventListener("click", openModal);
// btnCloseModal.addEventListener("click", closeModal);
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     closeModal();
//   }
// });

// const outer = document.querySelector(".outer");
// const inner = document.querySelector("inner");

// document.body.addEventListener("click", () => {
//   console.log("Body!")
// });

// outer.addEventListener("click", () => {
//   console.log("outer div!");
// });

// outer.addEventListener("click", () => {
//   console.log("inner div!");
// });

// event delegation

// const outer = document.querySelector(".outer");

// outer.addEventListener("click", (event) => {
//   if(event.target.classList.contains("inner__one")){
//     document.body.style.backgroundColor = "pink"
//   }

//   if(event.target.classList.contains("inner__two")){
//     document.body.style.backgroundColor = "violet"
//   }

//   if(event.target.classList.contains("inner__three")){
//     document.body.style.backgroundColor = "red"
//   }
// });

const btnLight = document.querySelector(".light__theme");
const btnDark = document.querySelector(".dark__theme");

btnLight.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});

btnDark.addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});

const theme = document.querySelector(".theme");

theme.addEventListener("click", (event) => {
  if (event.target.classList.contains("light__theme")) {
    document.body.style.backgroundColor = "white";
  }

  if (event.target.classList.contains("dark__theme")) {
    document.body.style.backgroundColor = "black";
  }
});

const todoInput = document.querySelector(".todo__input");
const addBtn = document.querySelector(".add__btn");
const todoList = document.querySelector(".todo__list")

const createNewTodo = (task) => {
  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", function() {
    this.remove();
  });

  return li;
};

const addTodo = () => {
  const task = todoInput.value;

  if (task !== "") {
    const newTodo =createNewTodo(task);
    todoInput.value = "";
    console.log(newTodo)
    todoList.appendChild(newTodo)
  } else{
    alert("Please enter a valid task!");
  }
};

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "enter") {
    addTodo();
  }
});