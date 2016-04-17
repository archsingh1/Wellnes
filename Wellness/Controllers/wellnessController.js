var wellnessApp = angular.module('wellnessApp', []);


wellnessApp.controller('wellnessController', function($scope){
	$scope.wellness=[
		{id:'w01', image:"GroupImages/Wellness/heartHealth.jpg", title:'Nutrition', desc:"Natasha"},
		{id:'w02', image:"GroupImages/Wellness/wellRipped.jpg", title:'Fitness Training', desc:""},
		{id:'w03', image:"GroupImages/Wellness/breatheEasy.jpg", title:'Stress Relief and Yoga', desc:""},
		{id:'w04', image:"GroupImages/Wellness/golf.jpg", title:'Leadership', desc:""},
		{id:'w05', image:"GroupImages/Wellness/CardioWeights.jpg", title:'Weight Training', desc:""},
		{id:'w06', image:"GroupImages/Wellness/motivation.jpg", title:'Motivation', desc:""},
		{id:'w07', image:"GroupImages/Wellness/wellrun.jpg", title:'Massage', desc:""},
		{id:'w08', image:"GroupImages/Wellness/wellBooks.jpg", title:'Mindful', desc:""},
		{id:'w09', image:"GroupImages/Wellness/finance.jpg", title:'Money Talk', desc:""},
		{id:'w10', image:"GroupImages/Wellness/cardioYoga.jpg", title:'Yoga and Cleansing', desc:""},
		{id:'w11', image:"GroupImages/Wellness/heartHealth.jpg", title:'Heart Health', desc:""},
		{id:'w12', image:"GroupImages/Wellness/CardioKicks.jpg", title:'Kick Boxing', desc:""},
		{id:'w13', image:"GroupImages/Wellness/PushUps.jpg", title:'Weight Loss', desc:""},
		{id:'w14', image:"GroupImages/Wellness/Running_a_Race.jpg", title:'Run 5K', desc:""},
		{id:'w15', image:"GroupImages/Wellness/CardioStairs.jpg", title:'Aerobics', desc:""},
		{id:'w15', image:"GroupImages/Wellness/CardioFatBurn.jpg", title:'Fat Burn', desc:""},
		{id:'w15', image:"GroupImages/Wellness/CardioStep.jpg", title:'Cardio Exercises', desc:""},
		{id:'w15', image:"GroupImages/Wellness/kidsWalking.jpg", title:'Managing Kids', desc:""},
		{id:'w15', image:"GroupImages/Wellness/fit40.jpg", title:'Fit at 40', desc:""},
		{id:'w15', image:"GroupImages/Wellness/Pilates.jpg", title:'Pilates', desc:""},
		{id:'w15', image:"GroupImages/Wellness/suspensionTrng.jpg", title:'Suspension Training', desc:""},
		{id:'w15', image:"GroupImages/Wellness/CardioWorkouts.jpg", title:'On the Ball', desc:""},
		{id:'w15', image:"GroupImages/Wellness/cardioYoga.jpg", title:'Streches', desc:""},
		{id:'w15', image:"GroupImages/Wellness/chickPeas.jpg", title:'Easy Cooking', desc:""},
		{id:'w15', image:"GroupImages/Wellness/greenSalad.jpg", title:'Lets Cook Together', desc:""},
		{id:'w15', image:"GroupImages/Wellness/lowCarb.jpg", title:'Healthy Meals', desc:""},
		{id:'w15', image:"GroupImages/Wellness/wholeFoods.jpg", title:'Breakfast in Bed', desc:""},
		{id:'w15', image:"GroupImages/Wellness/sandwiches.jpg", title:'Snappy Meals', desc:""},
		{id:'w15', image:"GroupImages/Wellness/smoothies.jpg", title:'Munchikins', desc:""},
		{id:'w15', image:"GroupImages/Wellness/paleoDiet.jpg", title:'Paleo Diet', desc:""},
		{id:'w15', image:"GroupImages/Wellness/vegan.jpg", title:'Vegan Recipies', desc:""},
		{id:'w15', image:"GroupImages/Wellness/mentoring.jpg", title:'Mentoring 101', desc:""}
	];
	
	//Randomize the data
	//$scope.wellness.sort(function() { return 0.5 - Math.random() });
	
	//Sort the data alphabetically by title
	$scope.wellness.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});

	
	
	

});





	

