/*var a1 = document.querySelector('#canvas').getContext('2d'),side = 0,
size = 100,
x = 100,
y = 100;

a1.beginPath();
a1.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
a1.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
}

a1.fillStyle = "blue";
a1.fill();
*/



function create_Hex(hex,boolian){
    let canvas = 
    document.querySelector('#canvas').getContext('2d'),side = 0,
    size = 45,
    y = (hex.coordinates[0] * 78);
    x = (hex.coordinates[1] * 68);
    if(boolian){ y += 39;}


canvas.beginPath();
    //y_center = ( y + size * Math.sin(0));
    //x_center = x + size * Math.cos(0);
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
    canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
}

canvas.fillStyle = hex.terrain.color;
canvas.fill();


//console.log(`x ${x_center}   y ${y_center}`)
    
}

function create_Map(hex_Map){
    for (i = 0; i < hex_Map.length; i++){
        
        hex_X = hex_Map[i].coordinates[1]

        if(hex_X % 2 == 0){
            create_Hex(hex_Map[i],false);;
         } else {
            create_Hex(hex_Map[i],true);;
         }

    

       
    }
}