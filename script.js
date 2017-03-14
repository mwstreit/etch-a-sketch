// function that builds a grid in 'container'

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var col = 0; col < x; col ++) {
        $(".container").append("<div class = 'grid'></div>");
    };
  };
  $(".grid").width(960/x);
  $(".grid").height(960/x);
};


//function to clear the grid.  swaps the background-color back to the default
function clearGrid(){
  $(".grid").css("background-color", "#eee");
};
//function to completely remove the grid.  must be followed by 'createGrid' function
//in order to avoid generating no grid
function removeGrid(){
  $(".grid").remove();
};
//function to 'draw' on the grid.  changes the background-color when a div is entered
function draw(){
  $(".grid").mouseenter(function(){
    $(this).css("background-color", "#333");
  });

};


$(document).ready(function(){
  createGrid(32);
  draw();

  $(".button1").click(function(){
    clearGrid();
  });

  $(".button2").click(function(){
    removeGrid();
    var gridSize = prompt('How many squares per side?')
    createGrid(gridSize);
    draw();
  });
});
