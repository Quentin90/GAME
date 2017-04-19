document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
       // document.getElementById("X").style.height=document.getElementById("X").style.height-1;
        var element = document.getElementById('X'),
            style = window.getComputedStyle(element),
            top = style.getPropertyValue('top');
        console.log(top);
        top=top.replace('px','');
        top=Number(top);
        console.log(top);
        console.log((top-3)+"px");
        if(top-3<0) {
            console.log("erreur");


        }
        else{
            element.style.top = (top - 6) + "px";
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        var element = document.getElementById('X'),
            style = window.getComputedStyle(element),
            top = style.getPropertyValue('top');
        console.log(top);
        top=top.replace('px','');
        top=Number(top);
        console.log(top);
        console.log((top+3)+"px");
        console.log(window.innerHeight);
        console.log(window.innerWidth);


        if(top+3>window.innerHeight-12) {
            console.log("erreur");
        }
        else{
            console.log("do it");
            element.style.top = (top + 6) + "px";
        }
    }
    else if (e.keyCode == '37') {

        // left arrow
        var element = document.getElementById('X'),
            style = window.getComputedStyle(element),
            left = style.getPropertyValue('left');
        console.log(left);
        left=left.replace('px','');
        left=Number(left);
        console.log(left);
        console.log((left-3)+"px");
        if(left-3<0) {
            console.log("erreur");
        }
        else{
            element.style.left = (left - 6) + "px";
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        var element = document.getElementById('X'),
            style = window.getComputedStyle(element),
            left = style.getPropertyValue('left');
        console.log(left);
        left=left.replace('px','');
        left=Number(left);
        console.log(left);
        console.log((left+3)+"px");
        if(left+3>window.innerWidth-12) {
            console.log("erreur");
        }
        else{
            element.style.left = (left + 6) + "px";
        }
    }

}
