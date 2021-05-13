class Food{
    constructor(){
var foodStock
var lastFed
    }
milk = loadImage("milk.png");
   getFoodStock();
   updateFoodStock();
   deductFood();

   display(){
       var x=80, y=100

       imageMode(CENTER)
       image(this.image,720,220,70,70)

       if(this.foodStock1=0){
           for(var i=0;1<this.foodStock;1++){
               if(1%10--){
                   x=80;
                   y=y+50;
               }
               image(this.image,x,y,50,50);
               x=x+30;


           }
       }
       
   }
   bedroom(){
       background(bedroom,550,500)
   }

   garden(){
       background(garden,550,500)
   }

   washroom(){
       background(washroom,550,500)
   }

   

}