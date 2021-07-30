var moreInfoTab = document.getElementById('more-info-plate-tab');
var chevronDropdown = document.getElementsByClassName('fa-chevron-right');
var dropdownPlates = document.getElementsByClassName('dropdown-plate');
var topNav = document.getElementById('topNav');
var hero = document.getElementById('hero');
/* TODO

    - Buscar cómo acceder al valor por defecto de las propiedades de position absolute para utilizarlos como variable. Utilizarlos como tipo int.

*/
function establishingInitialStyles() {
    for (var i = 0; i < chevronDropdown.length; i++) {
        var platesListLength = chevronDropdown[i].parentElement.parentElement.lastElementChild.children.length;
        var cat = chevronDropdown[i].parentElement.parentElement;

        for (var j = 1; j < platesListLength + 1; j++) {
            var plates = cat.lastElementChild.childNodes[2 * j - 1];

            // plates.style.transform = 'translateY(' + j * (-100) + '%)';
            plates.style.transform = 'translateX(-100%)';
            plates.style.zIndex = -10;
            plates.style.opacity = 0;
            plates.style.visibility = "hidden";
        }
    }
}
function processingID(id, charToStartCut, charToEndCut) {
    id = id.substring(charToStartCut, charToEndCut);

    return id;
}
window.addEventListener('scroll', () => {

    let scrollValue = window.scrollY;

    if (Math.floor(scrollValue) < 60) {
        topNav.innerHTML = `
            <div id="title-menu" class="title-menu">
                <h1>La Carta</h1>
            </div>
        `;

        hero.innerHTML = `
            <div id="logo-header" class="logo">
                <h1>LOGO</h1>
            </div>

            <p class="welcome">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus aliquid voluptate officiis
                exercitationem maiores atque distinctio doloribus sunt! Voluptates?
            </p>
        `;
        var logoHeader = document.getElementById('logo-header');
        var titleMenu = document.getElementById('title-menu');

        titleMenu.style.top = 'auto';
        titleMenu.style.right = 37.5 + scrollValue * -0.55 + '%';
        titleMenu.childNodes[1].style.fontSize = 1.7 + scrollValue * -0.01 + 'em';


        logoHeader.style.top = 35 + scrollValue * -0.25 + '%';
        logoHeader.style.left = 37.5 + scrollValue * -0.65 + '%';
        logoHeader.childNodes[1].style.fontSize = 1.8 + scrollValue * -0.01 + 'em';

    } else if (Math.floor(scrollValue) >= 60) {
        topNav.innerHTML = `
                <div class="logo">
                    <h1>LOGO</h1>
                </div>

                <div id="title-menu" class="title-menu">
                    <h1>La Carta</h1>
                </div>
            `;
        hero.innerHTML = `
                <p class="welcome">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus aliquid voluptate officiis
                    exercitationem maiores atque distinctio doloribus sunt! Voluptates?
                </p>
            `;


        var titleMenu = document.getElementById('title-menu');
        titleMenu.classList.add('titleToRight');
    }
});

let plateTabOpen = false;
function showMoreInfoPlate() {

    if (!plateTabOpen) {
        moreInfoTab.classList.add('active');
        plateTabOpen = true;
    } else {
        moreInfoTab.classList.remove('active');
        plateTabOpen = false;
    }
}


let dropdownOpen = false;
function toggleDropdown(id) {
    var idLength = id.length;
    let clearedID = processingID(id, 8, idLength);
    var chevronSelected = chevronDropdown[clearedID - 1];
    var platesSelected = chevronSelected.parentElement.parentElement.lastElementChild.childNodes;
    var platesSelectedList = chevronSelected.parentElement.parentElement.childNodes[3];
    var platesSelectedListLength = platesSelectedList.children.length;

    chevrons = [];

    for (var i = 0; i < chevronDropdown.length; i++) {
        chevrons.push(chevronDropdown[i]);
    }


    if (!chevronSelected.classList.contains('dropdown-showing')) {
        chevrons.forEach(chevron => {
            var platesListLength = chevron.parentElement.parentElement.lastElementChild.children.length;
            var plates = chevron.parentElement.parentElement.lastElementChild.childNodes;

            if (chevron.classList.contains('dropdown-showing')) {
                chevron.classList.remove('dropdown-showing');
                chevron.parentElement.style.maxHeight = 30 + 'px';
                chevron.parentElement.parentElement.childNodes[3].style.maxHeight = 0 + 'px';

                for (var i = 1; i < platesListLength + 1; i++) {
                    plates[2 * i - 1].style.transform = 'translateX(-100%)';
                    plates[2 * i - 1].style.zIndex = -10;
                    plates[2 * i - 1].style.opacity = 0;
                    plates[2 * i - 1].style.visibility = "hidden";
                }
            }
        });

        chevronSelected.classList.add('dropdown-showing');
        chevronSelected.parentElement.style.maxHeight = 40 + 'px';
        platesSelectedList.style.maxHeight = 9999 + 'px';

        for (var i = 1; i < platesSelectedListLength + 1; i++) {
            // platesSelected[2 * i - 1].style.transform = 'translateY(0)';
            platesSelected[2 * i - 1].style.transform = 'translateX(0)';
            platesSelected[2 * i - 1].style.zIndex = 1;
            platesSelected[2 * i - 1].style.opacity = 1;
            platesSelected[2 * i - 1].style.visibility = "visible";
        }

    } else {
        chevronSelected.classList.remove('dropdown-showing');
        chevronSelected.parentElement.style.maxHeight = 30 + 'px';
        platesSelectedList.style.maxHeight = 0 + 'px';

        for (var i = 1; i < platesSelectedListLength + 1; i++) {
            // platesSelected[2 * i - 1].style.transform = 'translateY(' + i * (-100) + '%)';
            platesSelected[2 * i - 1].style.transform = 'translateX(-100%)';
            platesSelected[2 * i - 1].style.zIndex = -10;
            platesSelected[2 * i - 1].style.opacity = 0;
            platesSelected[2 * i - 1].style.visibility = "hidden";
        }
    }
}

establishingInitialStyles();