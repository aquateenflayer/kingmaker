function calculate_District_Economy(district){
    econ = 0;
    for(i=0;i<district.buildings.length;i++){
       // console.log(district.buildings[i][1].economy)
        econ += district.buildings[i][1].economy
    }
    return econ
}

function calculate_District_Loyalty(district){
    loyal= 0;
    for(i=0;i<district.buildings.length;i++){
       // console.log(district.buildings[i][1].loyalty)
        loyal += district.buildings[i][1].loyalty
    }
    return loyal
}

function calculate_District_Stability(district){
    stab= 0;
    for(i=0;i<district.buildings.length;i++){
       // console.log(district.buildings[i][1].stability)
        stab += district.buildings[i][1].stability
    }
    return stab
}

function calculate_District_Value(district){
    val= 0;
    for(i=0;i<district.buildings.length;i++){
      //  console.log(district.buildings[i][1].base_Value);
        val += district.buildings[i][1].base_Value;
    }
    return val
}

function calculate_District_Defense(district){
    def= 0;
    for(i=0;i<district.buildings.length;i++){
       // console.log(district.buildings[i][1].defense);
        def += district.buildings[i][1].defense;
    }
    return def
}

function calculate_District_Stats(district){
    district.economy = calculate_District_Economy(district);
    district.loyalty = calculate_District_Loyalty(district);
    district.stability = calculate_District_Stability(district);
    district.base_Value = calculate_District_Value(district);
    district.defense = calculate_District_Defense(district);
   // console.log(district)
}

function add_Building(district,name,building,x,y){
    district.buildings.push([name,building,[x,y]]);
}