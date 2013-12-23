// Add due date functionality
// Add Star Marked/Favorited functionality
// Add Followers functionality on individual Tasks
// Add Tags on Individual Tasks
// Add Filter based on Tags


hello=function()
{
    console.log("Hello");
}

var myapp=angular.module('myapp',['ui.state']);

myapp.controller('DataCtrl',function($scope,$http,$stateParams,JSONData,GetTags,GetMembers)
{
    // To load JSON file 
    
    // $http.get('JsonTasks.json')
    //     .then(function(res)
    //     {
    //         $scope.JsonData=res.data;
            
    //     });

    $scope.JsonData=JSONData;
    $scope.state=$stateParams;
    $scope.routeTID=$stateParams.TID;
    $scope.routePID=$stateParams.PID;

    $scope.arrayOfTags=GetTags;
    $scope.arrayOfMembers=GetMembers;
    
    $scope.SaveTask=function(TID, PID)
    {
        console.log($scope.JsonData[TID-1].TN);
        console.log($scope.JsonData[TID-1].TD);
        
        console.log($scope.JsonData[TID-1].fol);
        console.log($scope.JsonData[TID-1].star);
    }

    $scope.isChecked=function(TID)
    {
        // console.log($scope.JsonData[TID-1].done);
        return ($scope.JsonData[TID-1].done);
    }
   

    
});


myapp.config(function($stateProvider,$urlRouterProvider,$routeProvider)
{
  //
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("") 
   

  $stateProvider
    .state('route1',
    {
        url:"/:PID",
        views:
        {
            "ProjectPane":
            {
            templateUrl:"css/partials/Tasks.html",
            controller:"DataCtrl"
            }            
        }
      
    })



        // .state('route1.task',
            .state('route1.task',
            {
                url:"/task/:TID",
                views:
                {
                    // The @ suffix addresses the view in the higher state
                    "TaskPane@": 
                    {
                        templateUrl:"css/partials/IndiTasks.html",
                        controller:"DataCtrl"        
                    }
                    
                }
                
            })


});