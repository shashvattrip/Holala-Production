myapp.factory('JSONData', function()
{
	var obj;
	obj=
	[
{
	"PID":1,
	"TID":1,
	"TN":"Task1sdsdoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflow",
	"TD":"Task1D1212",
	"TC":"Task1C",
	"fol":[1,2,3,4,5],
	"star":1,
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	
	"PID":1,
	"TID":2,
	"TN":"Task2",
	"TD":"Task2D",
	"TC":"Task2C",
	"fol":[1,2],
	"star":0,
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
},
{
	"PID":2,
	"TID":3,
	"TN":"Task3",
	"TD":"Task3D",
	"TC":"Task3C",
	"fol":[1,3,4,5],
	"star":1,
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":2,
	"TID":4,
	"TN":"Task4",
	"TD":"Task4D",
	"TC":"Task4C",
	"fol":[2,3,4,5],
	"star":1,
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
},
{
	"PID":3,
	"TID":5,
	"TN":"Task5",
	"TD":"Task5D",
	"TC":"Task5C",
	"fol":[1,2,3,4,5],
	"star":1,
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":3,
	"TID":6,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
}, 
{
	"PID":3,
	"TID":7,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
}, 
{
	"PID":3,
	"TID":8,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
}, 
{
	"PID":3,
	"TID":9,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":3,
	"TID":10,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":5,
	"TID":11,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
},
{
	"PID":5,
	"TID":12,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":4,
	"TID":13,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS","Python","C++"],
	"done":0
},
{
	"PID":4,
	"TID":14,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1,3],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
},
{
	"PID":4,
	"TID":15,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":0
},
{
	"PID":4,
	"TID":16,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1,3],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
},
{
	"PID":4,
	"TID":17,
	"TN":"Task6",
	"TD":"Task6D",
	"TC":"Task6C",
	"fol":[1,3],
	"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
	"done":1
}
]
	
	return obj;
});


myapp.factory('GetTags',function(JSONData)
{
	var arrayTags=[];
	var obj=JSONData;
	obj.forEach(function(value)
	{
		// console.log(value.TID);
		value.tags.forEach(function(value2)
		{
			var flag=0;
			arrayTags.forEach(function(elem)
			{
				if(value2===elem)
					flag=1;
			});
			if(flag===0)
				arrayTags.push(value2);
			// console.log(value2);
		});
	});

	return arrayTags;
});


myapp.factory('GetMembers',function(JSONData)
{
	var arrayMembers=[];
	var obj=JSONData;
	obj.forEach(function(value)
	{
		// console.log(value.TID);
		value.fol.forEach(function(value2)
		{
			var flag=0;
			arrayMembers.forEach(function(elem)
			{
				if(value2===elem)
					flag=1;
			});
			if(flag===0)
				arrayMembers.push(value2);
			// console.log(value2);
		});
	});

	return arrayMembers;
});