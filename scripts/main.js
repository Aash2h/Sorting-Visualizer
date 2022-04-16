import { BubbleSort } from "./bubble_sort.js";
import { InsertionSort } from "./insertion_sort.js";
import { Merge } from "./merge_sort.js";
import { Quick } from "./quick_sort.js";
import { SelectionSort } from "./selection_sort.js";
///////////Selecting Elements///////////
////Containers
const root = document.querySelector(":root");
///////
////////////////Colors
export const swapFailColor = getComputedStyle(root).getPropertyValue(
  "--swap-failed-color"
);
export const swapColor = getComputedStyle(root).getPropertyValue("--swap-color");
export const SortedColor = getComputedStyle(root).getPropertyValue("--sorted-color");
export const comparisonColor = getComputedStyle(root).getPropertyValue(
  "--comparision-tower-color"
);
export const defaultTowerColor = getComputedStyle(root).getPropertyValue(
  "--default-tower-color"
);

////////////////
const towersContainer = document.querySelector(".towers-container");
const visualizerContainer = document.querySelector(".visualizer-container");
const btnContainer = document.querySelector(".btn-container");
/////////Buttons
const mergeSortbtn = document.querySelector(".mergesortbtn");
const selectionSortbtn = document.querySelector(".selectionsortbtn");
const insertionSortbtn = document.querySelector(".insertionsortbtn");
const heapSortbtn = document.querySelector(".heapsortbtn");
const bubbleSortbtn = document.querySelector(".bubblesortbtn");
const genarraybtn = document.querySelector(".generate-array");
const quickSortbtn = document.querySelector(".quicksortbtn");
////////Sections
const footer = document.querySelector(".footer");
//////////////////////////////////
///////////////////////Inputs
const sizeSlider = document.getElementById("size-slider");
const speedSlider = document.getElementById("speed-slider");
/////////////////////
///////////////////Variables
export let sizeofArr = sizeSlider.value;
export let speedofAlgo = 1;
export let divs = [];
export let towers_sizes = [];
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
/////////////////////
function initialSetup() {
  genArray(sizeofArr);
}
initialSetup();
////////////////////Functions

function genNewArray() {
  genArray(sizeofArr);
}

function genArray(size) {
  towers_sizes = [];
  towers_sizes = Array.from(
    { length: size },
    () => 1 + Math.floor(Math.random() * size)
  );
  renderTowers(towers_sizes, size);
}
function renderTowers(towers_sizes, size) {
  divs = [];
  towersContainer.innerHTML = "";
  towers_sizes.forEach(function (ele) {
    const tower = document.createElement("div");
    divs.push(tower);
    if (size > 32) tower.style.height = `${0.33 * ele}rem`;
    else tower.style.height = `${ele}rem`;
    tower.classList.add("tower");
    towersContainer.appendChild(tower);
  });

}
function changeSize(e) {
  sizeofArr = this.value;
  towersContainer.innerHTML = "";
  genArray(sizeofArr);
}
function changeSpeed(e) {
  speedofAlgo = this.value;
}
export function towers_update(tower_1, tower_2) {
  let height = tower_2.style.height;
  tower_2.style.height = tower_1.style.height;
  tower_1.style.height = height;
}
export function towers_update_color(tower_1, tower_2, color) {
  // console.log("here to update color");
  tower_2.style.backgroundColor = tower_1.style.backgroundColor = color;
}
export function tower_update_color(tower, color) {
  tower.style.backgroundColor = color;
}
export function tower_update_height(tower, height) {
  tower.style.height = `${height}rem`;
}
////////////////////Event Listeners
sizeSlider.addEventListener("input", changeSize);
speedSlider.addEventListener("input", changeSpeed);
genarraybtn.addEventListener("click", genNewArray);
bubbleSortbtn.addEventListener("click", BubbleSort);
insertionSortbtn.addEventListener("click", InsertionSort);
mergeSortbtn.addEventListener("click", Merge);
selectionSortbtn.addEventListener("click", SelectionSort);
quickSortbtn.addEventListener("click", Quick);