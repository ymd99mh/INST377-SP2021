/* Put your javascript in here */
const imgArray = document.querySelector('#images');
console.log(imgArray)
const counter = 0; 

  function nextImage() {
    counter+=3;
    if(counter>imgArray.length-1) counter = 0;
    if(counter==6){
        document.getElementById("img1").src = imgArray[counter-2];    
        document.getElementById("img2").src = imgArray[counter-1];    
        document.getElementById("img3").src = imgArray[counter+0];
    }
    else{
        document.getElementById("img1").src = imgArray[counter+0];    
        document.getElementById("img2").src = imgArray[counter+1];    
        document.getElementById("img3").src = imgArray[counter+2];    
    }
}

  function prevImage() {
    counter-=3;
    if(counter<0) counter = 0;
        document.getElementById("img1").src = imgArray[counter+0];    
        document.getElementById("img2").src = imgArray[counter+1];    
        document.getElementById("img3").src = imgArray[counter+2];    
        
      }
  function clickToLoadPage() {
    document.querySelector('.prevImage').addEventListener('click', (event) => {
      prevImage();
    });
    document.querySelector('.nextImage').addEventListener('click', (event) => {
      nextImage();
    });
  }
      
      
      
      
