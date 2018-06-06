// Modal variable
var menu = document.getElementById('menu');

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

    if (apiRequest.statusText === "OK") {
        
	// Set up url for fetching menu data.
	var url = "http://entree-s18.herokuapp.com/v1/menu";
	

	// Code that fetches data from the API URL and stores it in results.
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
    }
	else {
		errorMessage.innerHTML = apiRequest.statusText;
}
}

function httpRequestOnError() {
	errorMessage.innerHTML = 'Something went wrong. Try again later.'
}

function catchResponse() {

		var response = JSON.parse(apiRequest.responseText);

		menuItem1.innerHTML = menu_items.0.description.text;
		menuItem2.innerHTML = ;
		menuItem3.innerHTML = ;
		menuItem4.innerHTML = ;
		menuItem5.innerHTML = ;
		menuItem6.innerHTML = ;
        menuItem7.innerHTML = ;
        menuItem8.innerHTML = ;
}