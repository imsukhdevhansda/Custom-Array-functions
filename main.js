

let j_a1 = [1,2,3,4];

console.log("j_a1 :",j_a1);


// CUSTOM ARRAY

  function myArray(){

   Object.defineProperty(this, "length",{

   value : 0,
   writable : true,
   enumerable : false, 
   });


     this.length = arguments.length;

     for(let i=0;i< this.length;i++){

        this[i] = arguments[i];
     };

  };

  let a1 = new myArray('a', 'b', 'c');
  let a2 = new myArray('jaidev','sukhdev','ramdev');


  //Push function 
myArray.prototype.धक्का = function(value){

   let index = this.length;
   this[index] = value;
   this.length++;
};


// Pop function 
myArray.prototype.हटाओ = function () {
   let index = this.length - 1;
 
   delete this[index];
 
   this.length--;
 };


 // Print top element function 
 myArray.prototype.ऊपर = function(){
    let index = this.length - 1;
    return this[index];
 }


 // Print length of arr function 
 myArray.prototype.लंबाई = function(){

   let index = this.length;
   return index ;
 };


 // Print function
 myArray.prototype.छापना = function(){

   let arr = this ;
   console.log(Object.values(arr));
 };


 // Print reverse all element in arr function 
 myArray.prototype.प्रिंट_रिवर्स = function(){

   let arr = [];

   for(let i= this.length -1;i >= 0 ; i--){

      arr.push(this[i])
    
   }

   console.log(Object.values(arr));
 }




a1.धक्का('dev')
a1.हटाओ()
a1.हटाओ()
a1.हटाओ()
a1.धक्का('b')
a1.धक्का('c')
a1.धक्का('d')





  console.log('a1 :', Object.values(a1));
  console.log(a1.ऊपर())
  console.log(a1.लंबाई())
  a1.छापना()
  a1.प्रिंट_रिवर्स()

  a2.छापना()
  a2.धक्का('manoj')
  a2.धक्का('raju')
  a2.छापना()
  a2.प्रिंट_रिवर्स()




