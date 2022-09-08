let decreaseBtn = document.querySelector(".decrease");
let increaseBtn = document.querySelector(".increase");
let sizeBtn = document.querySelector(".size");
let colorInput = document.querySelector("input");
let clearAllBtn = document.querySelector(".clear");
let currentSize = Number(sizeBtn.textContent);
let canvas = document.querySelector(".paint-display");
const ctx = canvas.getContext('2d');  
var rect = canvas.getBoundingClientRect();
let currentColor = "#000";
let isMouseDown = false;

//Increase button
increaseBtn.addEventListener("click",function(){
    if (currentSize<50) {
        currentSize += 5;
    }
    sizeBtn.textContent = currentSize;
}); 

//Decrease button
decreaseBtn.addEventListener("click",function(){
    if (currentSize>5) {
        currentSize -= 5;
    }
    sizeBtn.textContent = currentSize;
}); 

//Get current color
colorInput.addEventListener("change",function(e){
    currentColor = e.target.value;
})

//Clear All Button click
clearAllBtn.addEventListener("click",function(){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

//Monitor mouse down
canvas.addEventListener("mousedown",function(e){
    isMouseDown = true;
    ctx.moveTo(e.screenX - rect.left, e.screenY - rect.top);
    ctx.beginPath();
    ctx.lineWidth = currentSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
});
canvas.addEventListener("mouseup", (e) => {
    isMouseDown = false;
  });
  canvas.addEventListener("mouseleave", () => {
    isMouseDown = false;
});
canvas.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
        console.log('movin...');
      ctx.lineTo(e.screenX - rect.left, e.screenY - rect.top);
      ctx.stroke();
    }
  });


//-----------------------------------------------------------------------------------
