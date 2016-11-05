var INT_MAX=99999;
function FIND_MAX_CROSSING_SUBARRAY(A,low,mid,high){
	lsum = -INT_MAX;
	sum = 0;
	for( i=mid ; i>=low ; i-- ){
		sum += A[i];
		if( sum > lsum ){
			lsum = sum;
			max_left = i;
		}
	}

	rsum = -INT_MAX;
	sum = 0;
	for( i=mid+1 ; i<=high ; i++ ){
		sum += A[i];
		if( sum > rsum ){
			rsum = sum;
			max_right = i;
		}
	}
	return {'left':max_left,'right':max_right,'sum':(lsum+rsum)};
}

function FIND_MAX_SUBARRAY(A,low,high){
    if( high==low ){
        return {'left':low,'right':high,'sum':A[low]};
    }else{
        mid = parseInt( (low+high)/2 );
        ret_left = FIND_MAX_SUBARRAY(A,low,mid);
        ret_right = FIND_MAX_SUBARRAY(A,mid+1,high);
        ret_cross = FIND_MAX_CROSSING_SUBARRAY(A,low,mid,high);
        if( ret_left.sum >= ret_right.sum && ret_left.sum>=ret_cross.sum ){
            return ret_left;
        }else if( ret_right.sum>=ret_left.sum && ret_right>=ret_cross.sum){
            return ret_right;
        }else{
            return ret_cross;
        }
    }
}
var test_data = [[1,-4,3,-4],[13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]];
function Solution(jsonData){
    A = jsonData;
    low = 0;
    high = A.length-1;
    ret = FIND_MAX_SUBARRAY(A,low,high);
    return ret;
}