function INSERTION_SORT(A){
	for( j=1 ; j<A.length ; j++ ){
		key = A[j];
		for( i=j-1 ; i>=0 && A[i]>key ; i-- ){
			A[i+1] = A[i];
		}
		A[i+1] = key;
	}
}

// test
var test_data = [[10,40,30],[1,5,7,4,2,3]];
function Solution(jsonData){
	A = jsonData;
	INSERTION_SORT(A);
	return A;
}
