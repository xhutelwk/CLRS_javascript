var INT_MAX=1<<52;

function FIND_MAX_SUBARRAY_BRUTE(A,low,high){
    var len = A.length;
    var max = -INT_MAX;
    var left = 0;
    var right = 0;
    for( i=0 ; i < len-2 ; i++ ){
        var sum = 0;        
        for( j = i ; j < len-1 ; j++){
            sum += A[j];
            if( sum > max ){
                left = i;
                right = j;
                max = sum;
            }
        }
    }
    return {"left":left,"right":right,"sum":max};
}

var test_data = [[9,-3,25,-3,1],[13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]];
function Solution(jsonData){
    A = jsonData;
    ret = FIND_MAX_SUBARRAY_BRUTE(A);
    return ret;
}
