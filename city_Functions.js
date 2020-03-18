function calculate_City_Economy(city){
    
    let econ = 0;
    for(i=0;i<city.districts.length;i++){
        
         econ += city.districts[i].economy;
     }
     return econ

}

function calculate_City_Loyalty(city){
    let loy = 0;
    for(i=0;i<city.districts.length;i++){
        
         loy += city.districts[i].loyalty;
     }
     return loy

}

function calculate_City_Stability(city){
    let stab = 0;
    for(i=0;i<city.districts.length;i++){
        
         stab += city.districts[i].stability;
     }
     return stab

}

function calculate_Value(city){
    let val = 0;
    for(i=0;i<city.districts.length;i++){
        
         val += city.districts[i].base_Value
     }
     return val

}

function calculate_City_Defense(city){
    let def = 0;
    for(i=0;i<city.districts.length;i++){
        
         def += city.districts[i].defense
     }
     return def

}

function calculate_City_Stats(city){
    for(district_Num = 0;district_Num < city.districts.length; district_Num++ ){
        calculate_District_Stats(city.districts[district_Num]);
    }

    city.economy = calculate_City_Economy(city);
    city.loyalty = calculate_City_Loyalty(city);
    city.stability = calculate_City_Stability(city);
    city.base_Value = calculate_Value(city);
    city.defense = calculate_City_Defense(city);

    //console.log(city);
}
