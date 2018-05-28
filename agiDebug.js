//AGI debug help

//Use this function to help debug the AGI view portion of the application since the regular console.log method is not available on device
var maxDebugLevel = 0;
function dbg(txt,debugLevel) {
	if (debugLevel <= maxDebugLevel) {
		AppMobi.webview.execute("document.getElementById('debugMessage').innerText = '" + txt + "';");
		try { console.log(txt); } catch(e) {}
	}
}