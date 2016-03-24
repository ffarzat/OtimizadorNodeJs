var GA = (function () {
    function GA() {
    }
    GA.prototype.Setup = function (configuration) {
        return false;
    };
    return GA;
}());
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());
var ga = new GA();
var conf = new Configuration();
console.log('ga setup: ', ga.Setup(conf));
var IHeuristc = (function () {
    function IHeuristc() {
    }
    return IHeuristc;
}());
