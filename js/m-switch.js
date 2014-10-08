(function(){
	var galleryPreviews = document.getElementsByClassName('gallery-previews')[0];
	var galleryFocusImg = document.getElementsByClassName('gallery-focus')[0].children[0];

	galleryPreviews.addEventListener('click', function(event) {
		event.preventDefault();
		if (event.target.tagName == "IMG") {
			var previewImg = event.target;
			var newSrc = previewImg.attributes[0].value;
			galleryFocusImg.attributes[0].value = newSrc;
		}
		else return;
	})
})();