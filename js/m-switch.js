function selectClassInstance (className, index) {
	return document.getElementsByClassName(className)[index];
}
function getOffsetRect(elem) {
    // (1)
    var box = elem.getBoundingClientRect()
    
    var body = document.body
    var docElem = document.documentElement
    
    // (2)
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    
    // (3)
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    
    // (4)
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    
    return { top: Math.round(top), left: Math.round(left) }
}
var galleryTemplateString = selectClassInstance('gallery-template', 0).innerHTML;
var galleryTemplate = _.template(galleryTemplateString);
var galleries = {
	'jamfan': {
		title: 'JamFeed',
		subtitle: 'Breaking News For Your Favorite Music!',
		description1: 'See the top stories for your favorite artists and bands all in one place, and stay up-to-date on the music you love right at your fingertips! Be the first to see news and concert updates for all your favorite musicians!',
		features: [
			"Allow Push Notifications To Receive News Alerts And Updates!",
			"Pick the musicians you love and get real-time updates so you can see your favorite artists' news first.",
			"Share what you find with all your friends through Facebook, Twitter, Text, or Email."
		],
		description2: "Open up JamFeed for concert updates, pictures, and music videos from all of the best sources on the internet - national websites, local papers, Twitter, blogs, and JamFeed.",
		imgs: [
			'"http://a5.mzstatic.com/us/r30/Purple5/v4/c1/c9/f5/c1c9f5d8-e203-9c7d-fc72-b71c8d1fa499/screen568x568.jpeg"',
			'"http://a2.mzstatic.com/us/r30/Purple3/v4/ee/35/3d/ee353d16-86e3-3122-6e2d-bf4b92eb5799/screen568x568.jpeg"',
			'"http://a4.mzstatic.com/us/r30/Purple3/v4/e2/5b/0e/e25b0e82-aaec-d1c0-59b7-9d43a48e099a/screen568x568.jpeg"',
			'"http://a3.mzstatic.com/us/r30/Purple3/v4/85/df/77/85df778b-436d-dbcc-3423-2695a4c437f6/screen568x568.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/jamfan/id812540294"
	},
	'bean-mobile': {
		title: 'Beanstream',
		subtitle: 'Your Business on the Move!',
		description1: 'Turn your mobile device into a portable cash register and make that sale on the go.',
		features: [
			"Offers fully encrypted card swipe technology with no card data stored on your mobile device.",
			"Works with all major merchant account acquirers or any of Beanstream's turnkey solutions.",
			"Gives the option of calculating and applying two distinct tax rates.",
			"Seamlessly moves you between any one of up to 150 currencies even from within the transaction.",
		],
		description2: "Beanstream has been in the business of secure electronic processing for over a decade. We've developed our mobile technology with security in mind at every step of the transaction process.",
		imgs: [
			'"http://a5.mzstatic.com/us/r30/Purple/v4/6e/10/fb/6e10fb94-aab0-3825-a2db-b48f0e17e2a9/screen568x568.jpeg"',
			'"http://a1.mzstatic.com/us/r30/Purple/v4/40/42/44/404244dd-6f61-7bb9-6252-c2a1e7321cc3/screen568x568.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/beanstream-mobile-payments/id505084781?mt=8"
	},
	'umote': {
		title: 'U-Mote',
		subtitle: 'Breaking News For Your Favorite Music!',
		description1: 'The U-verse Easy Remote free iPhone app is just that; easy to use, easy to see and even easy to hear with VoiceOver enabled. This app is specifically designed to work with the U-verse receiver and allow full control of the channel navigation with a gesture pad or voice recognition as well single touch access to Closed Captioning. There are 2 settings for font size and multiple color themes to maximize the display based on need or preference.',
		features: [
			"Easy access to remote control features of U-verse TV.",
			"Optimized for Accessible and Senior audiences.",
			"Features voice commands and search capabilities.",
			"Supports Voice Over feature."
		],
		description2: "Free to download, but AT&T U-verse High Speed Internet service is required to connect a qualifying device to an AT&T U-verse receiver.",
		imgs: [
			'"http://a2.mzstatic.com/us/r30/Purple/v4/e7/7d/f1/e77df1ac-70dc-e6d4-5353-2371270a6b59/screen568x568.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/u-verse-easy-remote/id544707717?mt=8"
	},
	'home': {
		title: 'FindMyHome',
		subtitle: 'The Home of Your Dreams, Right in Your Pocket',
		description1: 'FindMyHome shows you the property listings closest to your location and offers a simple yet powerful search function that allows you to quickly find the home of your dreams!',
		features: [
			"See properties close to you, inside and out.",
			"Get the information you need about a listing quickly, all in one place.",
			"Connect with a real estate agent about listings you like."
		],
		description2: "A real estate app that helps you find the perfect home, wherever you are.  With just a tap, see a map and photos of nearby homes for sale; even ones not listed elsewhere.",
		imgs: [
			'"http://a4.mzstatic.com/us/r30/Purple2/v4/0a/08/89/0a0889c2-54ca-4bd5-a8d9-b7ece6d31966/screen568x568.jpeg"',
			'"http://a1.mzstatic.com/us/r30/Purple2/v4/14/63/20/14632054-4e8d-6f69-6c9a-d523dd296953/screen568x568.jpeg"',
			'"http://a5.mzstatic.com/us/r30/Purple2/v4/1d/df/b6/1ddfb655-13ad-f609-767c-96fd8d867084/screen568x568.jpeg"',
			'"http://a2.mzstatic.com/us/r30/Purple/v4/e1/4c/67/e14c670a-6520-dc86-3474-62fce9158f2e/screen568x568.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/find-my-home-find-real-estate/id622300103?mt=8"
	},
	'network': {
		title: 'CanWeNetwork',
		subtitle: 'Discover Opportunities Across Your Network',
		description1: 'Using a powerful machine learning engine, CanWeNetwork recommends people nearby who you should meet for professional networking & business opportunities by incorporating your LinkedIn profile & geo-spatial technologies.',
		features: [
			"Recommends valuable network connections based on location, skill set, experience, shared interests and personality traits extracted from LinkedIn profiles.",
			"Invite your matches for a conversation, a call or a time to meet. Send a personal intro about yourself and why you'd like to meet.",
			"Send messages to people in your network to communicate ideas, plans, and schedules using the in-app Message Center."
		],
		description2: "CanWeNetwork requires a LinkedIn user profile with more social networks coming soon!",
		imgs: [
			'"http://a5.mzstatic.com/us/r30/Purple/v4/d7/15/48/d71548d2-72e1-2f44-15c0-f99c0bd8776c/screen568x568.jpeg"',
			'"http://a1.mzstatic.com/us/r30/Purple4/v4/a4/63/91/a46391fc-85bd-f7bd-9e0b-59f92819c618/screen568x568.jpeg"',
			'"http://a1.mzstatic.com/us/r30/Purple6/v4/e6/fe/b4/e6feb4c7-155f-9b80-4882-b9e878af1ae1/screen568x568.jpeg"',
			'"http://a4.mzstatic.com/us/r30/Purple4/v4/67/45/e6/6745e6db-bb68-d2e8-ef77-175ba1a67c64/screen568x568.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/canwenetwork-business-connections/id562482616?mt=8"
	},
	'revcoin': {
		title: 'revCOIN',
		subtitle: 'A New Way to Process Mobile Payments',
		description1: 'revCOIN is a mobile payments solution that gives merchants a simple, low-cost method of accepting credit cards through their smartphone. We had the opportunity to develop the app and iterate upon it once it hit the App Store.',
		features: [
			"Accept payments and access funds instantly through revCOIN card.",
			"Track payments and manage spending.",
			"Process payments anywhere in the world."
		],
		description2: "RevCOIN is a 'business-in-a-box' mobile payments solution allowing any business or entrepreneur to start accepting payments the same day their account is set up, RevCOIN card reader not required.",
		imgs: [
			'"http://www.mfellis.com/img/phone1-zoom.png"',
			'"http://www.mfellis.com/img/phone2-zoom.png"'
		],
		link: "https://itunes.apple.com/us/app/rev-coin/id519693990?mt=8"
	},
	'bean-ipad': {
		title: 'JAMFAN',
		subtitle: 'Breaking News For Your Favorite Music!',
		description1: 'See the top stories for your favorite artists and bands all in one place, and stay up-to-date on the music you love right at your fingertips! Be the first to see news and concert updates for all your favorite musicians!',
		features: [
			"Allow Push Notifications To Receive News Alerts And Updates!",
			"Pick the musicians you love and get real-time updates so you can see your favorite artists' news first.",
			"Share what you find with all your friends through Facebook, Twitter, Text, or Email."
		],
		description2: "Open up JamFan for concert updates, pictures, and music videos from all of the best sources on the internet - national websites, local papers, Twitter, blogs, and JamFan.",
		imgs: [
			'"jamfan1.jpeg"',
			'"jamfan2.jpeg"',
			'"jamfan3.jpeg"',
			'"jamfan4.jpeg"'
		],
		link: "https://itunes.apple.com/us/app/jamfan/id812540294"
	}
};


var linkContainer = selectClassInstance('pop-up-presentation', 0);
var galleryContainer = selectClassInstance('gallery-container', 0);

linkContainer.addEventListener('click', function(event){	
	var selectedPortfolioItem, portfolioItemName, renderedTemplate;
	var targetParent = event.target.parentElement,
		target = event.target;
	if (target.classList.contains('portfolio-item-preview') || targetParent.classList.contains('portfolio-item-preview')){
		event.preventDefault();
		(target.tagName == "A") ? selectedPortfolioItem = target : selectedPortfolioItem = targetParent;
		portfolioItemName = selectedPortfolioItem.id;
	}
	if( galleries[portfolioItemName] != undefined ){
		renderedTemplate = galleryTemplate(galleries[portfolioItemName]);	
	} else return;
	$(galleryContainer).html('');
	galleryContainer.insertAdjacentHTML('afterbegin', renderedTemplate);
	var animated = 'animated',
		fadeIn = 'fadeInDownBig',
		fadeOut = 'fadeOutUpBig',
		top = 'topLayer';
	var gallery = selectClassInstance('portfolio-item-expanded', 0);
	var closeButton = selectClassInstance('retract-item-button', 0);
	var galleryPreviews = selectClassInstance('gallery-previews', 0);
	var galleryFocusImg = selectClassInstance('gallery-focus', 0).children[0];
	function removeAnimationClasses () {
		gallery.classList.remove(animated, fadeIn, fadeOut);
	}
	function fadeInGallery () {
		gallery.classList.add(top, animated, fadeIn);
	}
	function fadeOutGallery () {
		gallery.classList.add(animated, fadeOut);
	}
	var projects = selectClassInstance('pop-up-presentation', 0);
	var projectsDivYCoord = getOffsetRect(projects).top;
	debugger;
	gallery.style.top = (window.scrollY - projectsDivYCoord + 50).toString() + 'px';
	
	if(window.innerWidth < 719) {
		var projects = selectClassInstance('pop-up-presentation', 0);
		var projectsDivYCoord = getOffsetRect(projects).top;
		gallery.style.top = (window.scrollY - projectsDivYCoord + 50).toString() + 'px';
	}
	galleryPreviews.addEventListener('click', function(event) {
		event.preventDefault();
		if (event.target.tagName == "IMG") {
			var previewImg = event.target;
			var newSrc = previewImg.attributes[0].value;
			galleryFocusImg.attributes[0].value = newSrc;
		}
		else return;
	});
	closeButton.addEventListener('click', function(){
		removeAnimationClasses();
		fadeOutGallery();
		window.setTimeout(function(){
			$(galleryContainer).html('');
		},1200);
	});
	removeAnimationClasses();
	fadeInGallery();

});