//Create variables here
var database
var foodS
var foodStock
var happyDog
var dog

var foodObj

var changingGameState
var  readingGameState

var bedroom 
var garden
var washroom


function preload()
{
	//load images here
happyDog =loadImage("sprites/dogImg1.png")
dog =loadImage("dogImg.png")

bedroom =loadImage("Bed Room.png")
garden =loadImage("Garden.png")
washroom =loadImage("Wash Room.png")


}

function setup() {
	createCanvas(500, 500);
  database =firebase.database();
  dog = createSprite(250,250,50,50);
  dog =addImage("sprites/dogImg.png")
  foodStock =database.ref('food');
  foodStock.on("value",readStock);
  object(food.js);

  feed =CreateButton("fed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood =CreateButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

//read the gamestate from database
readState=database.ref('gameState')
readState.on("value",function(data){
  gameState=data.val();
})
}

function draw() { 
  background(46,139,87);
  if(lastFed>=12){
    text("Last Feed :"+ lastFeed%12 + "PM" ,350,30);
  }else if(lastFed==0){
    text("Last Fed : 12 AM ",350,30);
  }else{
    text("Last Feed :" + lastFed + "AM",350,30);
  }
  fedTime=database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();

  });

  if(gameState!="hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }

  currentTime=hour();
  if(currentTime===(lastFed+1)){
    update("playing");
    foodObj.garden();
  }else if(currentTime===(lastFed+2)){
    update("sleeping");
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("bathing");
    foodObj.washroom();
  }else{
    update("hungry");
    foodObj.display();
  }

    object.display();
  
  drawSprites();
  //add styles here
textSize(20);
Fill ("black");
stroke ("black");

text("Note:Press UP_ARROW key tofeed the dog",50,50);
text("Food remaining:"+ foodS ,250,200);
}

function readStock(data){
foodS =data.val();
}

function writeStock(x){
  database.ref('/').update({

    


    food:x
  })
}

//function to update food stock and the last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()

})
}

//function to add in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}

//function to update gameStates in database
function update(state){
  database.ref('/').update({
    gameState:state
  });
}
