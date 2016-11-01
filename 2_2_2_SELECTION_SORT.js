function SELECTION_SORT(A){
	for( j=0 ; j<A.length-1 ; j++ ){
		k = j;
		for( i=j ; i<A.length ; i++ ){
			if( A[i]<A[k] )
				k = i;
		}
		t=A[j];A[j]=A[k];A[k]=t;
	}
}

// test
var test_data = [[10,40,30],[1,5,7,4,23,88,22,91,2,3]];
function Solution(jsonData){
	A = jsonData;
	SELECTION_SORT(A);
	return A;
}
