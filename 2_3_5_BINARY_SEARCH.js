function BINARY_SEARCH(A,v,s,e){
	if( e-s<2 ){
		return (A[e]==v)?e:
		       (A[s]==v)?s:
				-1;
	}
	var m = parseInt( (s+e)/2 );
	if( A[m] > v ){
		m = BINARY_SEARCH(A,v,s,m-1);
	}else if( A[m] < v ){
		m = BINARY_SEARCH(A,v,m+1,e);
	}
	return m;
}


// test
var test_data = [{'A':[1,2,3,4,5,6,7,8,9],'v':1},{'A':[1,2,3,4,5,6,7,8,9],'v':10}];
function Solution(jsonData){
	A = jsonData.A;
	v = jsonData.v;
	i = BINARY_SEARCH(A,v,0,A.length-1);
	return i;
}
