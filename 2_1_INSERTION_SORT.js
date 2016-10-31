/*
INSERTION_SORT
*/

function Solution(A){
	for( j=1 ; j<A.length ; j++ ){
		key = A[j];
		;
		for( i=j-1 ; i>=0 && A[i]>key ; i-- ){
			A[i+1] = A[i];
		}
		A[i+1] = key;
	}
}

var test_data = [[10,40,30],[1,5,7,4,2,3]];

/*
function Solution(){
	this.run = INSERTION_SORT;
}

var Solution = { 
	createNew : function(){
		var sol = {};
		sol.run = function(test_data){
			var data = $.parseJSON(test_data);
			INSERTION_SORT(data);
			return data;
		};
		return sol;
	};
};*/