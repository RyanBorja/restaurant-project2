// Modal variable
var menu = document.getElementById('menuButton');

// Output variables
var menuItem1 = document.getElementById('menuItem1');
var menuItem2 = document.getElementById('menuItem2');
var menuItem3 = document.getElementById('menuItem3');
var menuItem4 = document.getElementById('menuItem4');
var menuItem5 = document.getElementById('menuItem5');
var menuItem6 = document.getElementById('menuItem6');
var menuItem7 = document.getElementById('menuItem7');
var menuItem8 = document.getElementById('menuItem8');

// Error variables
var error = document.getElementById("error");
var errorMessage = document.getElementById('errorMessage');

// Other
var apiRequest;

// Waits for page to load before firing
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// Initialize your application or run some code.
		menu.onclick = getMenu;
	}
};

function getMenu() {

	// Set up url for fetching menu data.
	var url = "http://entree-s18.herokuapp.com/v1/menu";
	

	// Code that fetches data from the API URL and stores it in results.
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
    
}

function httpRequestOnError() {
	errorMessage.innerHTML = 'Something went wrong. Try again later.'
}

function catchResponse() {
//if (apiRequest.statusText === "OK") {
		var response = JSON.parse(apiRequest.responseText);
		menuItem1.innerHTML = response.menu_items[0].description;
		menuItem2.innerHTML = response.menu_items[1].description;
		menuItem3.innerHTML = response.menu_items[2].description;
		menuItem4.innerHTML = response.menu_items[3].description;
		menuItem5.innerHTML = response.menu_items[4].description;
		menuItem6.innerHTML = response.menu_items[5].description;
        menuItem7.innerHTML = response.menu_items[6].description;
        menuItem8.innerHTML = response.menu_items[7].description;
//}
//	else {
//		errorMessage.innerHTML = apiRequest.statusText;
//}
}
