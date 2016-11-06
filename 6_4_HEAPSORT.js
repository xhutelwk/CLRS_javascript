
var hl = 0;

function HEAPSORT(A){    
    BUILD_MAX_HEAP(A);
    console.log( "HEAPSORT:hl="+hl );
    for( i=hl-1 ; i > 0 ; i-- ){
        SWAP ( 0,i );
        hl --;
        MAX_HEAPIFY( A, 0 );
    }
}

function BUILD_MAX_HEAP( A ){    
    hl = A.length;
    console.log( "BUILD_MAX_HEAP:hl="+hl );
    var i= parseInt( (hl-2)/2 );
    for(  ; i >= 0 ; i-- ){
        MAX_HEAPIFY( A,i );
    }
    console.log("heap:");
    console.log( A );
}

function MAX_HEAPIFY( A, i ){
    console.log( "MAX_HEAPIFY:i="+i );
    var l = LEFT(i);
    var r = RIGHT(i);
    var b = i;
    if( l < hl && A[l] > A[b] )
        b = l;
    if( r < hl && A[r] > A[b] )
        b = r;
    if( b != i ){
        SWAP ( i,b );
        MAX_HEAPIFY( A,b );
    }
}
function LEFT( n ){
    return 2*n+1;
}
function RIGHT( n ){
    return 2*n + 2;
}
function SWAP( a,b ){
    var t = A[a];
    A[a] = A[b];
    A[b] = t;
}
function PARENT( n ){
    return parseInt( (n-1)/2 );
}
// test
var test_data = [[50,40,30],[1,5,7,4,23,88,22,91,2,3]];
function Solution(jsonData){
	A = jsonData;
	HEAPSORT(A);
	return A;
}
