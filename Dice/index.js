function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 6);
  const rndInt2 = randomIntFromInterval(1, 6);
  let image="images/dice"+rndInt+".png";
  let image2="images/dice"+rndInt2+".png";
//   console.log(image);
   document.querySelectorAll("img")[0].setAttribute("src", image);
   document.querySelectorAll("img")[1].setAttribute("src", image2);

   if(rndInt==rndInt2){
    document.querySelector("h1").innerHTML="BOTH wins 🥇";
   }else if(rndInt>rndInt2){
    document.querySelector("h1").innerHTML="FIRST wins 🥇";
   }
   else if(rndInt<rndInt2){
    document.querySelector("h1").innerHTML="SECOND wins 🥇";
   }