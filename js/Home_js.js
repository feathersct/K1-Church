function myFunction(){
	$(".dropdown-content").fadeToggle();
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("menu_nav").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("menu_nav").style.marginLeft = "0";
}