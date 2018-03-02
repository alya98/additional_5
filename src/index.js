module.exports = function check(str, bracketsConfig) {
    var arrOfBr=[];
    for(var i=0;i<bracketsConfig.length;i++){
        arrOfBr.push(bracketsConfig[i][0] + bracketsConfig[i][1])
    }
   while(1){
       if(str=='') return true;
       var indx=-1;
       for(var k=0;k<arrOfBr.length;k++){
           if(str.indexOf(arrOfBr[k])!=-1){
               indx=k; break;
           }
       }
       if(indx==-1) return false;
       str=str.replace(arrOfBr[indx],'');
   }
}
//console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));