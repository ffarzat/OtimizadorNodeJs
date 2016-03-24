/// <reference path="Classes/Heuristics/GA.ts" />
/// <reference path="Classes/Configuration.ts" />


var ga: GA = new GA();
var conf: Configuration = new Configuration();


console.log('ga setup: ', ga.Setup(conf));