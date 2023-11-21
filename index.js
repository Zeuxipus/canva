function draw(){
    let canvas2 = document.querySelector("#canvas2");
    if(canvas2.getContext){ 
        let ctx = canvas2.getContext("2d");
        let img1 = new Image();
        img1.addEventListener("load",function (){
            ctx.drawImage(img1,0,0,img1.width/1, img1.height/2);
            ctx.beginPath(),
            ctx.moveTo(21,170);
            ctx.lineTo(70,30);
            ctx.lineTo(110,60);
            ctx.lineTo(200,30)
            ctx.stroke()
        })
        img1.src = "./backdrop.png"
}else {
    console.log("navigateur non supporté !");
  }
};

// function draw() {
//   let canvas = document.querySelector("#canvas");
//   // console.log(canvas);
//   if (canvas.getContext) {
//     // Créer une variable pour mettre le contexte
//     let ctx = canvas.getContext("2d");

//     // Insérer une image
//     let img = new Image();
//     img.addEventListener("load", function () {
//       ctx.drawImage(img, 230, 100, img.width / 5, img.height / 5);
//     });
//     img.src =

    // img.src = "./Rondoudou.jpg";

    // Mise en forme de texte
    // ctx.font = "48px serif";
    // ctx.fillText("Rondoudou", 10, 50);

    // ctx.font = "48px serif";
    // ctx.strokeText("Rondoudou", 10, 90);

    // Creer des cercles
    // for (let i=0; i<6; i++){
    //     for (let j=0; j<6; j++){
    //         ctx.strokeStyle = "rgb(" + Math.floor(255 - 42.5*i) +
    //          ","+ Math.floor(255 - 42.5*j)
    //           + ",0)";

    //     ctx.beginPath();
    //     ctx.arc(12.5 + j * 25,12.5 + i*25,10,0, Math.PI*2, true)
    //     ctx.stroke()
    //     }
    // }

    // Créer un dégradé de couleurs en mode tableau
    // let mot = "";
    // for (let i=0; i<6; i++){
    //     for (let j=0; j<6; j++){
    //         ctx.fillStyle = "rgb(" + Math.floor(255 - 42.5*i) +
    //          ","+ Math.floor(255 - 42.5*j)
    //           + ",0)";
    //     ctx.fillRect(j * 25, i*25,25,25)
    //     }
    //     console.log(mot);
    // }

    // let p = new Path2D("M10 10 h 80 v 80 h -80 Z")
    // ctx.fill(p)

    // const rectangle = new Path2D();
    // rectangle.rect(10, 10, 50, 50);

    // const cercle = new Path2D();
    // cercle.moveTo(125, 35);
    // cercle.arc(100, 35, 25, 0, 2 * Math.PI);

    // ctx.stroke(rectangle);
    // ctx.fill(cercle)

    // faire un coeur
    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(80, 25, 75, 37, 75, 40);
    // ctx.fill();

    //faire une bulle de BD
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();

    // faire 2 triangles et 1 cercle
    // ctx.beginPath()
    // ctx.moveTo(30, 30) // Coordonnée de départ du trait
    // ctx.lineTo(30, 100) // Coordonnée de trajet du trait
    // ctx.lineTo(100, 30) // Coordonnée de trajet du trait
    // ctx.lineTo(30, 30) // Coordonnée d'arrivé du trait
    // ctx.fill();

    // ctx.moveTo(120,120);
    // ctx.lineTo(120,50);
    // ctx.lineTo(50,120);
    // ctx.lineTo(120, 120)
    // ctx.stroke();

    // ctx.beginPath()
    // ctx.arc(50,50,50,0,2*Math.PI, false);
    // ctx.stroke()

    // faire un smiley :
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    // ctx.moveTo(75, 70);
    // ctx.lineTo(75, 90);
    // ctx.fillStyle = "rgba(0,0,200,0.5)";
    // ctx.stroke();

    // ctx.beginPath()
    // ctx.moveTo(75, 50) // Coordonnée de départ du trait
    // ctx.lineTo(100, 75) // Coordonnée de trajet du trait
    // ctx.lineTo(100, 25) // Coordonnée d'arrivé du trait
    // ctx.fill();

    // ctx.fillRect(25,25,100,100);
    // ctx.clearRect(45,45,60,60);
    // ctx.strokeRect(50,50,50,50)

    // 1er element
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(95,15,100,100);

    // // 2em element
    // ctx.fillStyle = "rgba(0,0,200,0.5)";
    // ctx.fillRect(150,35,100,100);
//   } else {
//     console.log("navigateur non supporté !");
//   }
// }
