/*
problem:
Describe a Θ(n lg n)-time algorithm that, 
given a set S of n integers and another integer x, 
determines whether or not there exist two elements in S whose sum is exactly x.
*/
function FIND_TWO_NUMBER(A,v){
    // sort first O(nlgn);
	MERGE_SORT(A,0,A.length-1);
    console.log(A);
    // find n times ,each time lgn
    for( i=0 ; i<A.length-1 ; i++ ){
        if( A[i]>=v )
            return "none";
        var t = v - A[i];
        var p = BINARY_SEARCH(A,t,i+1,A.length-1);
        if( -1 != p ){
            //console.log("i="+i+" p="+p);
            return "after sort:"+i+" + "+p;
        }
    }
	return "none";
}


// test
var test_data = [{'A':[8,7,3,1,9,5,2,4,6],'v':6},{'A':[8,7,3,1,9,5,2,4,6],'v':100}];
function Solution(jsonData){
	A = jsonData.A;
	v = jsonData.v;
	ret = FIND_TWO_NUMBER(A,v);
	return ret;
}


///////////////////////////////////////////////
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

function MERGE_SORT(A,s,e){
	if( s >= e ) return;
	var m = parseInt( (e+s)/2 );
	MERGE_SORT(A,s,m);
	MERGE_SORT(A,m+1,e);
	MERGE(A,s,m,e);
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
}