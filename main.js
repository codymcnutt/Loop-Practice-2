var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


var mainController = function($scope){
	
	for(var i=0; i<animals.length; i++) {
		if (i < 4)
 console.log(animals[i]);
}



for(var i=0; i<animals.length; i++) {
	if ((i == 0) || (i == 2) || (i == 4))
 console.log(animals[i]);
}

for(var i=0; i<animals.length; i++) {
	if ((i == 0) || (i == 2) || (i == 4))
 console.log(animals[i]);
}
for(var i=animals.length-1; i>=0; i--) {
 console.log(animals[i]);
}

for(var i=0; i<animals.length; i++) {

 console.log(animals[i]);
if ((i>0) && (i<animals.length-1)) 
	 console.log(animals[i]);
}
}

angular.module('app',[])
    .controller('mainController', ['$scope', mainController])