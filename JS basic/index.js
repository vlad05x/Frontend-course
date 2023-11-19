// Task 1
let box = document.getElementById("black_div");
let css_btn = document.getElementById("CSS");
let js = document.getElementById("JS");
let css_js = document.getElementById("CSS_JS");

css_btn.addEventListener("click", () => {
  box.style.display = "none";
});
js.addEventListener("click", () => {
  box.remove();
});
css_js.addEventListener("click", () => {
  box.classList.toggle("hidden");
});

// Task 2
let box2 = document.getElementById("black_div2");
let css_js2 = document.getElementById("CSS_JS-2");
let BoxHidden = false;

css_js2.addEventListener("click", () => {
  if (BoxHidden) {
    box2.style.display = "block";
    BoxHidden = !BoxHidden;
  } else {
    box2.classList.toggle("hidden");
  }
});

// Task 3
let box3 = document.querySelectorAll(".black_box2");
let css_js3 = document.getElementById("CSS_JS-3");

css_js3.addEventListener("click", () => {
  box3.forEach((element) => {
    if (BoxHidden) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  BoxHidden = !BoxHidden;
});
// Task 4
let btn_click = document.getElementById("btn");

btn_click.addEventListener("click", () => {
  let selector = document.getElementById("selectorInput").value;
  let elements = document.querySelectorAll(selector);

  elements.forEach(function (element) {
    element.style.display =
      element.style.display === "none" || element.style.display === ""
        ? "block"
        : "none";
  });
});
// Task 5
let YellowBox = document.getElementById("yellow_box");
let ClickCount = 0;

function Click() {
  if (ClickCount == 0) {
    alert("Привіт");
  } else if (ClickCount == 1) {
    YellowBox.style.display = "none";
  }
  ClickCount++;
}
YellowBox.addEventListener("click", Click);

// Task 6
let redSquare = document.getElementById("yellowSquare");
let btnHover = document.getElementById("btn5");

btnHover.addEventListener("mouseenter", () => {
  redSquare.style.display = "none";
});
btnHover.addEventListener("mouseleave", () => {
  redSquare.style.display = "block";
});

// Task 7
let greenSquare = document.getElementById("greenSquare");
let InputHover = document.getElementById("InputHover");

InputHover.addEventListener("focus", () => {
  greenSquare.style.display = "block";
});
InputHover.addEventListener("input", () => {
  greenSquare.remove();
});

// Task 8
function ShowImage() {
  let InputImg = document.getElementById("InputImg");
  let ImageContainer = document.getElementById("image-container");

  let image = document.createElement("img");
  image.src = InputImg;
  image.alt = "Image";
  ImageContainer.appendChild(image);
}

// Task 9
function ShowImg() {
  let textarea = document.getElementById("TextAreaImg");
  let imgContainer = document.getElementById("img-container");
  let links = textarea.value.split("\n");

  links.forEach(function (link) {
    if (link.trim() !== "") {
      var image = document.createElement("img");
      image.src = link;
      image.alt = "Image";
      imgContainer.appendChild(image);
    }
  });
}

// Task 10
document.querySelector(".blockCursor").onmousemove = function (event) {
  document.querySelector("#offx").innerHTML = event.offsetX;
  document.querySelector("#offy").innerHTML = event.offsetY;
};

// Task 11
let userLanguage = navigator.language;
let infoLanguage = (document.querySelector(".info-language").innerHTML =
  "Language: " + userLanguage);

// Task 12
let BlockPosition = document.querySelector("._position");
let locationElement = document.querySelector(".location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationElement.innerHTML = "Позицію не найдено";
  }
}
function showPosition(position) {
  locationElement.innerHTML =
    "Широта: " +
    position.coords.latitude +
    "<br>Довгота: " +
    position.coords.longitude;
}
getLocation();

// Task 14
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll("#butt_scroll");

for (let elm of elements) {
  observer.observe(elm);
}

const BtnScrollUp = document.getElementById("butt_scroll");
BtnScrollUp.addEventListener("click", ScrollUp);

function ScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Task 15
let BigBox = document.querySelector(".block1");
let SmallBox = document.querySelector(".block2");

BigBox.addEventListener("click", () => {
  alert("This is big box!");
});
SmallBox.addEventListener("click", () => {
  alert("This is small box!");
});

// Task 16
let BigBtn = document.getElementById("btnShow");
let TransparentBlock = document.querySelector(".block_shodow");

BigBtn.addEventListener("click", () => {
  TransparentBlock.style.display = "block";
  document.body.style.overflow = "hidden";
});
TransparentBlock.addEventListener("click", () => {
  TransparentBlock.style.display = "none";
  document.body.style.overflow = "scroll";
});

// Task 17
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

// Task 18
function FileName() {
  const fileInput = document.getElementById('fileInput');
  const selectedFile = document.getElementById('selectedFile');

  if (fileInput.files.length > 0) {
    selectedFile.textContent = `Обраний файл: ${fileInput.files[0].name}`;
  } else {
    selectedFile.textContent = " ";
  }
}

const fileLabel = document.getElementById('fileLabel');

fileLabel.addEventListener('dragover', function(event) {
  event.preventDefault();
  this.classList.add('dragover');
});

fileLabel.addEventListener('dragleave', function() {
  this.classList.remove('dragover');
});

fileLabel.addEventListener('drop', function(event) {
  event.preventDefault();
  this.classList.remove('dragover');

  const fileInput = document.getElementById('fileInput');
  fileInput.files = e.dataTransfer.files;

  FileName();
});