let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext("2d");

ctx.beginPath();
// ctx.arc(105, 105, 100, -Math.PI/2,   0 * Math.PI,false);
ctx.lineWidth = 4;
ctx.stroke();

ctx.font = "15px Arial";
ctx.texAlign = "center"





function animate() {
    let i = 1;
    let timerID =  setInterval(()=>{
        if (i<=100){
            ctx.beginPath();
            ctx.arc(105,105,100,-Math.PI/2 , -Math.PI/2 + i/50 * Math.PI,false)
            ctx.lineWidth = 12;
            ctx.stroke();
            ctx.closePath();
            // ctx.fillText(i,100,100);


            i++;
            console.log('sa')
        }else{
            clearInterval(timerID)
        }
    },10)
}

animate();