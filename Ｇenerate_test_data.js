function Generate_test_data(config){
    if( 'array' == config.type ){ // random intger array
        var max = config.max;
        var min = config.min;
        var quantity = config.quantity;

        var data = array(quantity);
        var scale = max-min;
        for( i=0 ; i<quantity ; i++ ){
            var d = parseInt( Math.random()*scale + min );
            data[i] = d;
        }
        return data;
    }
}