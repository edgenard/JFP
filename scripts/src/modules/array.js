(function(j){
    'use strict';

    function conj(value, dest){
        var destination = j.slice(0, j.either([], dest));

        if(value){
            destination.push(value);
        }

        return destination;
    }

    function cons(value, source){
        var baseArray = (!!value) ? [value] : [];
        return j.concat(baseArray, source);
    }
    
    function each(userFn, userArray){
        var sanitizedArray = j.either([], userArray),
            sanitizedFn = j.either(j.identity, userFn),
            i;

        for(i = 0; i < sanitizedArray.length; i++){
            sanitizedFn(sanitizedArray[i]);
        }
            
        return sanitizedArray;
    }
    
    function map(userFn, userArray){
        var sanitizedFn = j.either(j.identity, userFn),
            finalArray = [];
            
        function mapFn(value){
            finalArray.push(sanitizedFn(value));
        }
            
        each(mapFn, userArray);
            
        return finalArray;
    }

    j.conj = conj;
    j.cons = cons;
    j.each = each;
    j.map = map;

})(jfp);