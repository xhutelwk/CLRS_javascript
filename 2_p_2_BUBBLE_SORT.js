function BUBBLE_SORT(A){
    for( i=0 ; i<A.length-1 ; i++ ){
        for( j=A.length-1 ; j>i ; j-- ){
            if( A[j]<A[j-1] ){
                t = A[j];
                A[j] = A[j-1];
                A[j-1] = t;
            }
        }
    }
}

// test
var test_data = [[50,40,30],[1,5,7,4,23,88,22,91,2,3]];
function Solution(jsonData){
	A = jsonData;
	BUBBLE_SORT(A);
	return A;
}