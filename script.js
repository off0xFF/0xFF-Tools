const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];

for(let i=0;i<250;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:Math.random()*0.5+0.1
    });
}

const meteors=[];

function meteor(){
    meteors.push({
        x:-200,
        y:Math.random()*canvas.height/2,
        vx:18+Math.random()*8,
        vy:8+Math.random()*5,
        life:0
    });
}

setInterval(meteor,1200);

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(const star of stars){

        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();

        star.y+=star.s;

        if(star.y>canvas.height){
            star.y=0;
            star.x=Math.random()*canvas.width;
        }

    }

    for(let i=meteors.length-1;i>=0;i--){

        const m=meteors[i];

        ctx.strokeStyle="white";
        ctx.lineWidth=2;

        ctx.beginPath();
        ctx.moveTo(m.x,m.y);
        ctx.lineTo(m.x-180,m.y-70);
        ctx.stroke();

        m.x+=m.vx;
        m.y+=m.vy;

        m.life++;

        if(m.life>120){
            meteors.splice(i,1);
        }

    }

    requestAnimationFrame(animate);

}

animate();
