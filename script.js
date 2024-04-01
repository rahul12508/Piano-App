let volumeSlider = document.querySelector("#volume");
let whiteKeys = document.querySelectorAll(".keys-white");
let blackKeys = document.querySelectorAll(".keys-black");



 whiteKeyArrays = Array.from(whiteKeys);
 blackKeyArrays = Array.from(blackKeys);

  whiteKeyArrays.forEach((element)=>{
    const audio =  new Audio(`tunes/${element.id}.wav`)

     element.addEventListener("click", () =>{
      audio.play()
      audio.volume = volumeSlider.value/100;
     })
  })

  blackKeyArrays.forEach((element)=>{
    const audio = new Audio(`tunes/${element.id}.wav`)

    element.addEventListener("click", ()=>{
      audio.volume = volumeSlider.value/100;
      audio.play()
    })

    document.addEventListener("keydown", (e)=>{
      console.log(e.key)
  
      whiteKeyArrays.forEach((element) =>{
        if(element.id == e.key){
          element.click();
          element.classList.add("active")
        } else{
          element.classList.remove("active")
        }
      })


    })
  })

  

  document.addEventListener("keydown", (e)=>{
    console.log(e.key)

    blackKeyArrays.forEach((element) =>{
      if(element.id == e.key){
        element.click();
        
      }
      })
  })
 
   





    