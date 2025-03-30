var curcol = "white";

const themechange = ()=>{

    curcol = (curcol==="white")? "hsl(0, 3%, 18%);":"white";
    document.body.style = `background-color:${curcol}`;
    document.body.style.color = (curcol==="white")? "hsl(0, 3%, 18%);":"white";
    // const elements = document.querySelectorAll(`#front1,#front2`)
    // elements.forEach( (e)=>{
    //     e.style.setProperty('color', (curcol === "white") ? "hsl(0, 3%, 18%)" : "white", 'important');
    // })
    document.getElementById('d_left').style.backgroundColor = (curcol !== "white") ? "hsl(0, 3%, 18%)" : "white";
    
  


    const icon =  document.getElementById('theme-icon')

    if(icon){
        icon.classList.toggle('fa-sun', curcol==="white")
        icon.classList.toggle('fa-moon', curcol!=="white");

        icon.style.setProperty('color',  (curcol === "white") ? "hsl(0, 3%, 18%)" : "white", 'important')
    }
    

}

