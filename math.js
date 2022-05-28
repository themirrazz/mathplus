try{
  Math.floor
} catch (error) {
  var Math={}
}
// Calculate Exponential functions
// eg `f(x) 3 * 6^x` if x is 8: Math.expEq(3,6,8,false)
Math.expEq=function ans(startingValue,increment,times,isNegative){
    inc=inc/100
  var start=startingValue,inc=increment,neg=isNegative,ago=times
    var res=start
for(var i=0;i<ago;i++){
   if(neg){res=res-( res*inc)}else{res+=(res*inc)}
}
    return res
}
// determine inequalities
// var letters: a,b,c,d,f,g,x,y,z
// reserved names: pi (its PI), e (Eulers number), log, pow, round, floor, ceil, rand
Math.ineq=function ineq(min,max,parser) {
    var allowed=[]
    for(var i=min;i<max+1;i++){
        if(eval(`(function(a){var b=a,c=a,d=a;const e=Math.E,pi=Math.pi;var x=a,y=a,z=a,f=a,g=a;const log=Math.log,pow=Math.pow,round=Math.round,floor=Math.floor,ceil=Math.ceil,rand=Math.random;
        var navigator={userAgent:"Mozilla/5.0 (MathPlus) InEqualities/1.0 MathPlus/1"};var chrome={};var location={href:"math://inequalities-vm", host:"",search:"",hash"",pathname:"inequalities-vm",protocol:"math:",port:""};var Object=(function(e){var o=function(...args){return new e(...args)};return o})(window.Object);var window={Object:Object,console:window.console,log:log,Math:Math,window:this,chrome:chrome,navigator:navigator};
return ${parser}})`)(i)){
            allowed.push(i)
        }
        
    }
    return allowed
}
