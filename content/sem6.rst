Vidéo 1: Dessin avec la balise <canvas>
---------------------------------------

...

Vidéo 2: Animation avec la balise <canvas>
------------------------------------------

Principe général
~~~~~~~~~~~~~~~~

Fonction setInterval()

- modification du contexte: transformations, effacement de tout ou partie du dession
- (re)dessine

::

    <canvas id="dessin" width="640" height="480"></canvas>

    <script>
        var cv = document.getElementById('dessin');
        if(cv.getContext) {
            var ctx = cv.getContext('2d');

            ctx.fillStyle = "blue";
            ctx.translate(ctx.width/2, ctx.height/2);

            ctx.fillRect(0, 0, 200, 20);
        } else {
            alert("Canvas non supporté par ce navigateur");
        }
    </script>

