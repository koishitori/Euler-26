function CreateDecimal(num){
  var str = "";
  var temp = 1;
  for( var i = 0; i < 10000 && temp != 0; i++ ){
    var decimal = ( temp - temp % num ) / num;
    temp = ( temp - num * decimal ) * 10;
    str += decimal;
  }
  return str;
}
function SearchCycle(num){
  var temp = CreateDecimal(num).match(/(\d+)\1+/g)
  var out="";
  while( temp ){
    var cycle_length = temp[ 0 ].match(/(\d+)\1+/)[ 1 ].length - 1;
    for( var i = 0; i < temp.length; i++ ){
      if( cycle_length < temp[ i ].match(/(\d+)\1+/)[ 1 ].length ){
        out = temp[ i ].match(/(\d+)\1+/)[ 1 ];
        cycle_length = out.length;
      }
    }
    temp = out.match(/^(\d+)\1+$/g)
  }
  return out.length;
}

var max = 0, ans = 0;
for( var i = 1; i <= 1000; i++ ){
  var temp = SearchCycle( i );
  if( max < temp ){
    max = temp;
    ans = i;
  }
}
ans;
