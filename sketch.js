var foodS;
var database;
var dog,Dog,dogHappy;
var foodStock;

function preload(){
Dog=loadImage("dogImg.png");
dogHappy=loadImage("dogImg1.png")
}
function setup() {
database=firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);
createCanvas(500, 500);
dog=createSprite(250,250,10,10)
dog.addImage(Dog)
}
function draw() {  
background(46,139,87)
fill(255)
text("Food Remaining:"+foodS,210,190)
if (keyWentDown("up")) {
writeStock(foodS)
dog.addImage(dogHappy)
}
drawSprites();
fill(255)
text("Press UP ARROW Key To Feed Drago Milk",140,30)
}
function writeStock(x){
database.ref('/').update({ 
Food:x
})
if (x<=0) {
x=0;
}else{
x=x-1
}
}
function readStock(data){
foodS=data.val();
}



