Vidéo 1: Compléments Javascript
-------------------------------

Tableaux imbriqués
~~~~~~~~~~~~~~~~~~

::

    var t1 = [["...", 2], ["...", 1, "..."]];

Les éléments des tableaux ne sont pas forcement de la même longueur ni du même
type.

Objets
~~~~~~

Possède un type de des propriétés.

Instanciation et initialisation::

    // Meth 1.

    foo = new Object();

    foo.ppt1 = ...;
    foo.ppt2 = ...;

    // Meth 2.

    foo = {"ppt1": ..., "ppt2": ...};  // ça c'est un objet, pas un dictionnaire (?)

Écriture des propriétés::

    foo.ppt1 = ...;          // meth. 1
    foo["ppt1"] = ...;       // meth. 2

Accès aux propriétés::

    ... = foo.ppt1;          // meth. 1
    ... = foo["ppt1"];       // meth. 2

Alert
~~~~~

Peut être pratique pour afficher facilement des valeurs (comme on le ferait
avec l'instruction "print" dans d'autres langage)::

    alert("hello");

    var foo = 3;
    alert(foo);

Formulaire (cf. projet1)
~~~~~~~~~~~~~~~~~~~~~~~~

Définir un formulaire en HTML ("<fieldset>" n'est pas obligatoirement présent)::

    <form id="..." method="..." action="..." name="...">
        <fieldset>

            <legend ...> ... </legend>
            <label ...> ... </label>

            <!-- Liste déroulante -->

            <select name="...">
                <option value="val1"> Choix 1 </option>
                <option value="val2"> Choix 2 </option>
                <option value="val3"> Choix 3 </option>
            </select>

            <!-- Textarea -->

            <textarea ...>... 

            <!-- Button -->

            <input type=... name=... value=...>

        </fieldset>
    </form>

Comment récupérer/traiter les données des formulaires en JS (exemple pour une
liste déroulante )::

    // Get

    var selected_index = document.forms["nom"].elements["nom"].selectedIndex;
    var selected_value = document.forms["nom"].elements["nom"].options[selected_index].value;

    // Set

    document.forms["nom"].elements["nom"].selectedIndex = ...;

Liens / boutons qui déclenchent une fonction JS::

    <a href="..." onclick="foo()"> ... </a>

    <!-- Button (peut être placé en dehors de l'élément "<form>") -->

    <input type="submit" name="..." id="..." value="OK" onclick="foo()" />

où ``foo()`` est une fonction JS.
