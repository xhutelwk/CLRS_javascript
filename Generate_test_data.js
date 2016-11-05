// {"type":"sort","min":-99999,"max":99999,"quantity":10000}

function Generate_test_data(config){
    if( "sort" == config.type ){ // random intger array
        var max = config.max;
        var min = config.min;
        var quantity = config.quantity;

        var data = new Array(quantity);
        var scale = max-min;
        for( i=0 ; i<quantity ; i++ ){
            var d = parseInt( Math.random()*scale + min );
            data[i] = d;
        }
        return data;
    }
}