/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
    document.getElementById("mySideMenu").style.width = "100%";
}

function closeNav2() {
    document.getElementById("mySideMenu").style.width = "0";
}




/*animatie hartjes */

var hartjesstatus = 'leeg';
var hartjesLeeg = document.querySelector('.favorieten');
var hartjesVol = document.querySelector('.favorieten');

function hartjesvullen() {
    if (hartjesstatus == 'leeg') {
        hartjesLeeg.src = 'images/hartjevol.png';
        hartjesstatus = 'vol';
        return hartjesstatus;
    } else {
        hartjesLeeg.src = 'images/hartjeleeg.png';
        hartjesstatus = 'leeg';
        return hartjesstatus;
    }

}
hartjesLeeg.addEventListener('click', hartjesvullen);
hartjesVol.addEventListener('click', hartjesLeeg);


/* navigatie links */
var filterKnop = document.querySelector('#filterIcon');
