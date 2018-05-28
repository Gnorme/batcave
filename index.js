//use the context.include method to load external JavaScript libraries into the AGI layer
AppMobi.context.include( 'agiDebug.js' );
AppMobi.context.include( 'screenSizing.js' );
AppMobi.context.include( 'bat.js' );
AppMobi.context.include( 'caveBackground.js' );
AppMobi.context.include( 'events.js' );
AppMobi.context.include( 'spikes.js' );
AppMobi.context.include( 'loop.js' );

//hide the splash screen once everything is loaded
AppMobi.webview.execute("AppMobi.device.hideSplashScreen();");
//start the animation loop
function start_animation_loop() {
	boolGameLoopStarted = true;
	gameloop();
}
