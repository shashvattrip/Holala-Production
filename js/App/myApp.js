// Add due date functionality
// Add Star Marked/Favorited functionality
// Add Followers functionality on individual Tasks
// Add Tags on Individual Tasks
// Add Filter based on Tags

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

    $scope.isStarred=function(TID)
    {
        // console.log($scope.JsonData[TID-1].star);
        if($scope.JsonData[TID-1].star===1)
            return 1;
        else
            return 0;
    }

    $scope.logMessage=function()
    {
        var message="Shashvat Rocks!"
        var client=new XMLHttpRequest();
        client.open("GET","JsonTasks.json");
        client.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
        client.send(message);
    }
    
    $scope.sendJSON=function()
    {
        var data;
        var path="JsonTasks.json";
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4 && xhr.status === 200) 
            {
                JSON.parse(xhr.responseText);
                console.log("JSON loaded");
                console.log(xhr.responseText);
                data=xhr.responseText;
            }
        }
        
        xhr.open("GET",path,false);
        xhr.send();
               
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
            templateUrl:"partials/Tasks.html",
            controller:"DataCtrl"
            }
        }
      
    })
        .state('route1.task',
            {
                url:"/task/:TID",
                templateUrl:"partials/IndiTasks.html",
                controller:"DataCtrl"
            })

    .state('route2',
    {
        url:"/route2",
        views:
        {
            "ProjectPane":
            {
              templateUrl:"partials/route2.list.html",
              controller:"DataCtrl"
            }

          // "TaskPane":{templateUrl:"partials/testing.html"}
        }
      
    })
        .state('route2.task',
            {
              url:"/task",
              templateUrl:"partials/testing2.html"
              // views:
              // {
              //   "TaskPane":{templateUrl:"partials/testing.html"}
              // }
            })
        

    .state('route3',
    {
        url:"/route3",
        views:
        {
            "ProjectPane":
            {
              templateUrl:"partials/route3.list.html", 
              controller:"DataCtrl"
            }

              // "TaskPane":{templateUrl:"partials/testing.html"}
        }
      
    })
        .state('route3.task',
            {
                url:"/task",
                templateUrl:"partials/testing2.html"
                // views:
                // {
                //   "TaskPane":{templateUrl:"partials/testing.html"}
                // }
            })
})