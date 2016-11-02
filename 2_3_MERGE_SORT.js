function MERGE_SORT(A,s,e){
	if( s >= e )
		return A;
	var m = parseInt( (e+s)/2 );
	MERGE_SORT(A,s,m);
	MERGE_SORT(A,m+1,e);
	MERGE(A,s,m,e);
	return A;
}

function MERGE(A,s,m,e){
	var T = new Array();
	for( i=0 ; i<m-s+1 ; i++ ){
		T[i] = A[s+i];
	}
	i = 0;
	j = m+1;
	for( k=s ; k<=e ; k++ ){
		if( j>e || (i<m-s+1 && T[i]<A[j]) ){
			A[k] = T[i];
			i++;
		}else{
			A[k] = A[j];
			j++;
		}
	}

	return A;
}

// test
var test_data = [[50,40,30],[1,5,7,4,23,88,22,91,2,3]];
function Solution(jsonData){
	A = jsonData;
	s = 0;
	e = A.length-1;
	MERGE_SORT(A,s,e);
	return A;
}
