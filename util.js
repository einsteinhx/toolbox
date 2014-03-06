(function (){

    var root = this,
        util = {};

    //AMD
    if (typeof define !== 'undefined' && define.amd) {
        
        define([], function () {
            
            return util;

        });
    }
    
    //CMD
    else if (typeof module !== 'undefined' && module.exports) {

        module.exports = util;

    }

    //script or other loader
    else {

        root.util = util;

    }

})();