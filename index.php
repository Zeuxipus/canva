<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./index.js"defer></script>
    <link rel="stylesheet" href="style.css">
    <title>Canvas</title>
</head>
<body onload="draw()">
    <p>canva peut etre utilisé pour créer des graphismes via des scripts</p>
    <ul>
        <li>dessiner des graph</li>
        <li>animations 3d avec "web Gl"</li>
    </ul>
    <p>il ne faut rien mettre entre les deux balises</p>
    <p>l'element canva a une methode getContext</p>
    <canvas id="canvas"></canvas>
    <p>pour commencer à dessiner il faut prendre en compte le système de coordonnées
        1 unité dans la grille correspond à 1 pixel sur le canvas
        la seule forme supportee est le rectangle qu'o peut decliner en 3 fonctions :
        <ul>
            <li>fillRect</li>
            <li>clearRect</li>
            <li>strokeRect</li>
        </ul>
    </p>

    <p>les trajets</p>
    <p>liste de points reliés par des stream_get_contentson cree un trajet, puis instructions de dessins, fermer le trajet, tracer ou remplir pour le faire apparaitre</p>
    <p>methode :
        <ul>
            <li>beginPath</li>
            <li>closePath</li>
            <li>stroke()</li>
            <li>fill()</li>
        </ul>
    </p>
    <canvas id="canvas2"></canvas>
</body>
</html>