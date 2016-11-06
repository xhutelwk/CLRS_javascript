var INT_MAX=1<<52;

var hl = 0;

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


function HEAP_MAXIMUM( A ){
    return A[0];
}
function HEAP_EXTRACT_MAX( A ){
    if( hl < 0 ){
        return -INT_MAX;
    }
    max = A[0];
    hl --;
    A[0] = A[hl];
    MAX_HEAPIFY( A,0 );
    return max;
}
function HEAP_INCREASE_KEY( A, i, key ){
    if( key < A[i] ){
        return -INT_MAX;
    }
    var p = PARENT( i );
    while( p>=0 && A[p] < key ){
        A[i] = A[p];
        i = p;
        p = PARENT( i );
    }
    A[i] = key;
}
function HEAP_INSERT( A,key ){
    A[hl] = -INT_MAX;    
    HEAP_INCREASE_KEY( A,hl,key );
    hl ++;
}

function HEAP_DELETE( A, i ){
    var tmp = A[i];
    hl --;
    if( A[hl] > tmp )
        HEAP_INCREASE_KEY( A,i,A[hl] );
    else if( A[hl] < tmp ){
        A[i] = A[hl];
        MAX_HEAPIFY( A,i );
    }else
        A[i] = A[hl];
    A[hl] = -INT_MAX;
}

// test
var test_data = [[15,13,9,5,12,8,7,4,0,6,2,1]];
function Solution(jsonData){
	A = jsonData;
    var ret = {};
	BUILD_MAX_HEAP(A);
    ret.heap = JSON.stringify(A);
    console.log( A );
    var m = HEAP_EXTRACT_MAX( A );
    ret.popmax = m;
    console.log( A );
    HEAP_INSERT( A,10 );
    ret.insert10 = JSON.stringify( A );
    console.log( A );
    HEAP_DELETE( A,2 );
    ret.delete2 = JSON.stringify( A );
    console.log( A );
	return ret;
}
