// title      : Bunch of Cubes
// author     : Rene K. Mueller
// license    : MIT License
// description: creating 100 cubes in space ...
// file       : bunch-cubes.jscad

var cubes = new Array();

function main() {
   for(var i=0; i<1000; i++) {
      cubes[i] = translate([
         150*rnd()-75,
         150*rnd()-75,
         150*rnd()-75],
         cube(5).
            setColor(hsl2rgb(Math.random()+0.7,1,0.5)));
   }
   return cubes;
}

function rnd(){
    return Math.random()*Math.random()*Math.random()*8;
}
