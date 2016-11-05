// a implention with runtime O(n)
/*
F : max subarray
L : max subarray include last element;

F(0...i) = max( F(0...i-1) , L( l2...i ) )

0....l....r..(r+1)....l2....i
     ------  ----------------
       s            s2
                      -------
                         s3
*/
var INT_MAX=1<<52;
function FIND_MAX_SUBARRAY_LINER(A){
    var l = 0;
    var r = 0;
    var s = A[0];
    for( i=1 ; i < A.length ; i++ ){
        if( s < 0 ){
            if( A[i] >= s ){
                l = i;
                r = i;
                s = A[i];
            }
        }else if( r == i-1 ){
            if( A[i] >= 0 ){
                r = i;
                s += A[i];
            }else{
                l2 = i;
                s2 = A[i];
                s3 = A[i];
            }
        }else{ // s>0 && r < i-1
            s2 += A[i];
            if( s3>0 ){
                s3 += A[i];
            }else{
                s3 = A[i];
                l2 = i;
            }

            if( A[i] >= 0 ){
                // max ( s3,s+s2,s )
                // s3 first,s+s2 next
                // in order to shift to right as much  as possible
                if( s3 >= (s+s2) && s3 >= s){
                    l = l2;
                    r = i;
                    s = s3;
                }else if( s+s2 >= s3 && s+s2 >= s){
                    r = i;
                    s = s + s2;
                }else{
                    // do nothing;
                }
            }
        }
    }
    return {"left":l,"right":r,"sum":s};
}

var test_data = [[9,-3,25,-3,1],[13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]];
function Solution(jsonData){
    A = jsonData;
    ret = FIND_MAX_SUBARRAY_LINER(A);
    return ret;
}