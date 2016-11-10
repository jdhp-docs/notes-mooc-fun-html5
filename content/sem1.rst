Vidéo 1: HTML
-------------

Définitions:

- `pages statiques`: pour une page donnée, le serveur envoi toujours le même contenu
- `pages dynamiques`: pour une page donnée, le contenu envoyé par le serveur change (d'une requête à l'autre)

Outils de validation: http://validator.w3.org

Squelette type d'une page HTML::

    <!DOCTYPE html>
    <html>
        <head>
            ...
        </head>
        <body>
            ...
        </body>
    </html>

`Balises auto-fermantes`:

- <img> (notation HTML5) ou <img /> (notation XHTML)
- <br>  (notation HTML5) ou <br />  (notation XHTML)
- ...

`Attributs`: "src" dans ``<img src="...">``

Il existe 3 types de balises:

- contenu de flux (élément de structuration): a, p, div, header, ...
- contenu de phrasé (possède une valeur sémantique): a, em, strong, ...
- metadonnées: link, style, meta, script, ...

Encodage: utf-8

::

    <head>
        <meta charset="utf-8">
        ...
    </head>

Multipurpose Internet Mail Extension (MIME):

- défini le type de fichier
- dans l'entête HTTP

Vidéo 2: CSS
------------

CSS = Cascading Style Sheet

Outil de validation: http://jigsaw.w3.org/css-validator

Utilisation
~~~~~~~~~~~

- Dans le document HTML

::

    <head>
        <style type="text/css">
            ...
        </style>
        ...
    </head>

- Dans un fichier texte externe

::

    <head>
        <link type="text/css" rel="stylesheet" media="screen" href="style.css">
        ...
    </head>

Règles CSS
~~~~~~~~~~

Les `règles` CSS sont composées de 3 parties:

1. le `sélecteur` (ce qui est affecté par la règle): "body" dans l'exemple suivant
2. la `propriété` (quel aspect de l'affichage est paramètré): "color" dans l'exemple suivant
3. la `valeur` (la valeur de la propriété): "purple" dans l'exemple suivant

::

    body {
        color: purple;
    }

Le sélecteur peut être:

- une balise
- une classe d'éléments (ex: ``.nom`` affecte les éléments ``<... class="nom">``)
- un ensemble d'éléments

Exemples de sélecteurs:

- ``p.classname``
- ``.classname``
- ``#idname``
- ``p#idname`` (affecte les éléments ``<... id="nom">``)

Types d'éléments
~~~~~~~~~~~~~~~~

Éléments `bloc`: div, h1, h2, p, ...

- peuvent contenir:

  - d'autres éléments bloc
  - des éléments inline
  - du texte

- placés les uns sous les autres
- alignés à gauche


Éléments `inline`: span, a, img, code, ...

- ne peuvent contenir que:

  - d'autres éléments inline
  - du texte

- placés les uns à la suite des autres sur une même ligne
- alignés à gauche

Positionnement
~~~~~~~~~~~~~~

Positionnement relatif
**********************

::

    position: relative;
    bottom:   5px;
    left:     15px;

- permet d'inscrire un élément bloc ou inline normalement mais avec un décalage horizontal et/ou vertical
- le contenu suivant n'est pas affecté


Positionnement flottant
***********************

::

    float:  right;
    width:  100px;
    margin: 0px;

- retire un élément de son flux normal (bloc ou inline) pour le placer le plus à droite possible (right) ou le plus à gauche possible (left) à l'intérieur de son conteneur
- le texte du conteneur est adapté pour contourner la boîte flottante


Positionnement absolu
*********************

::

    position: absolute;
    top:      10px;
    left:     50px;
    width:    100px;

- retire l'élément concerné du flux normal
- sa position est déterminée par rapport aux limites de l'objet qui le contient

