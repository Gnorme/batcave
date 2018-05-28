//this library sets all the appropriate variables for the screen size and star placement

//global variables
var current_width	= screen.availWidth;
var current_height	= screen.availHeight;

//screen width and height
var w=0;
var h=0;


//this code determines the size of the screen either through AGI or through the HTML5 webview
function get_screen_size()
{
	//update width and height from AGI
	current_width	= screen.availWidth;
	current_height	= screen.availHeight;
	
	//on a failure, get them from HTML
	if (current_width <= 0 || current_height <= 0)
	{
		AppMobi.webview.execute("get_screen_size();");
	}

}

//this function sets up several constants for use with the star animation and screen size
//it is called from starBackground.js
function set_size_variables()
{
	get_screen_size();
	
	w=current_width;
	h=current_height;

}



