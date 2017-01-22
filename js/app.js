(function(){
	var app = angular.module('store',[]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualites beyond their luster, beyond their shine...',
			canPurchase: true,
			images: [
		        "images/gem-01.gif",
		        "images/gem-03.gif",
		        "images/gem-04.gif"
      		]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '.................................................................................',
			canPurchase: false,
		    images: [
		        "images/gem-06.gif",
		        "images/gem-07.gif",
		        "images/gem-10.gif"
		    ]			
		}
	]
})();