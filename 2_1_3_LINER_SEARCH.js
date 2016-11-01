var NIL = -1;
function LINER_SEARCH(A,v){
	for( i=0 ; i<A.length ; i++ ){
		if( v == A[i])
			return i;
	}
	return NIL;
}


// test
var test_data = [{A:[10,40,30],v:40},{A:[1,5,7,4,2,3],v:8}];
function Solution(jsonData){
	A = jsonData.A;
	v = jsonData.v;
	var r = LINER_SEARCH(A,v);
	return r;
}
