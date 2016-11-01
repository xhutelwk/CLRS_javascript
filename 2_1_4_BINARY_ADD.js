// left is high-order
function BINARY_ADD(A,B){
	c = 0;
	var S = new Array();
	for( i=A.length-1 ; i>=0 ; i-- ){
		t =  A[i] + B[i] + c;
		if( 1 >= t ){
			S[i+1] = t;
			c = 0;
		}else if( 2 == t ){
			S[i+1] = 0;
			c = 1;
		}else{
			S[i+1] = 1;
			c = 1;
		}			
	}
	S[0] = c;
	return S;
}


// test
var test_data = [{A:[1,0,1],B:[1,1,1]},{A:[1,1,1,1,1],B:[1,1,1,1,1]}];
function Solution(jsonData){
	A = jsonData.A;
	B = jsonData.B;
	var r = BINARY_ADD(A,B);
	return r;
}
