var num =0;
function inc(){num++; display();}
function dec(){num--; display();}
function display(){
    var inpCtrl = document.getElementById("num");
    inpCtrl.value=num;
    if(num%3===0 &&! num%5===0 &&! num%7===0)
    {
        inpCtrl.style.color="red";
    }
    else if(num%3===0 &&! num%5===0 && num%7===0)
    {
        inpCtrl.style.fontFamily="italic";
        inpCtrl.style.color="red";
    }
    else if(num%3===0 && num%5===0 &&! num%7===0)
    {
        inpCtrl.style.fontWeight="bold";
        inpCtrl.style.color="red";
    }
    else if(!num%3===0 && num%5===0 &&! num%7===0)
    {
        inpCtrl.style.fontWeight="bold";
    }
    else if(!num%3===0 && num%5===0 && num&7===0)
    {
        inpCtrl.style.fontFamily="italic";
        inpCtrl.style.fontWeight="bold";
    }
    else if(!num%3===0 &&! num%5===0 && num%7===0)
    {
        inpCtrl.style.fontFamily="italic";
    }
    else if(!num%3===0 &&! num%5===0 &&! num%7===0)
    {
        inpCtrl.style.fontWeight="normal";
        inpCtrl.style.color="black";
    }
    //num%3===0 ? inpCtrl.style.color="red": 
}