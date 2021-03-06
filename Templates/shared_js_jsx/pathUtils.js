//
// This code is shared between CEP/JavaScript and ExtendScript
//

if (! $$SHORTCODE$$.path) {
	$$SHORTCODE$$.path = {};
}

$$SHORTCODE$$.path.basename = function(filepath, separator) {
	
	if (! separator) {
		separator = $$SHORTCODE$$.path.SEPARATOR;
	}

	// toString() handles cases where filepath is an ExtendScript File/Folder object
	var splitPath = filepath.toString().split(separator);
	do {
		var endSegment = splitPath.pop();	
	}
	while (splitPath.length > 0 && endSegment == "");

	return endSegment;
};

$$SHORTCODE$$.path.dirname = function(filepath, separator) {
	
	if (! separator) {
		separator = $$SHORTCODE$$.path.SEPARATOR;
	}

	// toString() handles cases where filepath is an ExtendScript File/Folder object
	var splitPath = filepath.toString().split(separator);
	do {
		var endSegment = splitPath.pop();	
	}
	while (splitPath.length > 0 && endSegment == "");

	return splitPath.join(separator);
};

$$SHORTCODE$$.path.filenameExtension = function(filepath, separator) {
	
	var splitName = $$SHORTCODE$$.path.basename(filepath).split(".");
	var extension = "";
	if (splitName.length > 1) {
		extension = splitName.pop();
	}

	return extension.toLowerCase();
};

