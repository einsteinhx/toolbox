var head = document.head || document.getElementsByTagName('head')[0];

var saveLocalRes = function(key, value){
	
	try {
		localStorage.setItem( key, JSON.stringify(value) );
		return true;
	} catch( e ) {
		console.error(e);
	}

};

var applyLocalCSS = function(key) {
	//find key
	var style = document.createElement("style");
	style.innerHTML = module.data;
	head.appendChild(style);

};

var applyLocalJS = function(key){
	//find key
	var script = document.createElement("script");
	script.defer = true;
	script.text = module.data;
	head.appendChild( script );

}

var request = function(url, cb){

	var xhr = new XMLHttpRequest();
	xhr.open( 'GET', url );

	xhr.onreadystatechange = function() {
		if ( xhr.readyState === 4 ) {
			if( xhr.status === 200 ) {
				cb(xhr.responseText);
			} else {
				console.error(new Error( xhr.statusText ));
			}
		}
	};

	setTimeout( function () {
		if( xhr.readyState < 4 ) {
			xhr.abort();
		}
	}, 5 * 1000 );

	xhr.send();
	
}