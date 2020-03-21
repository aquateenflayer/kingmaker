function calculate_Hex_Cities(hex){
    for(city_Number = 0; city_Number<hex.cities.length;city_Number++){
        calculate_City_Stats(hex.cities[city_Number])
    }
}

function calculate_Hex_Economy(hex){
    let econ = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        econ += hex.improvements[i][1].economy
    };

    for(city_Number = 0;city_Number<hex.cities.length;city_Number++){
        econ += hex.cities[city_Number].economy
    }

    econ += hex.special_Resource.economy;
    //console.log(hex.special_Resource)

     return econ

}

function calculate_Hex_Loyalty(hex){
    let stat = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        stat += hex.improvements[i][1].loyalty;
    };

    for(city_Number = 0;city_Number<hex.cities.length;city_Number++){
        stat += hex.cities[city_Number].loyalty;
    }

    stat += hex.special_Resource.loyalty;

     return stat

}

function calculate_Hex_Stability(hex){
    let stat = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        stat += hex.improvements[i][1].stability;
    };

    for(city_Number = 0;city_Number<hex.cities.length;city_Number++){
        stat += hex.cities[city_Number].stability;
    }

    stat += hex.special_Resource.stability;

     return stat

}

function calculate_Hex_Defense(hex){
    let stat = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        stat += hex.improvements[i][1].defense;
    };

    for(city_Number = 0;city_Number<hex.cities.length;city_Number++){
        stat += hex.cities[city_Number].defense;
    }

    stat += hex.special_Resource.defense;

     return stat

}

function calculate_Hex_Consumption(hex){
    let stat = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        stat += hex.improvements[i][1].consumption;
    };

    stat += hex.cities.length;
    stat += hex.special_Resource.defense;

     return stat

}

function calculate_Hex_Build_Points_Per_Turn(hex){
    let stat = 0;
    for(i=0;i<hex.improvements.length;i++){
       // console.log(district.buildings[i][1].economy)
        stat += hex.improvements[i][1].BP_Per_Turn;
    };

    stat += hex.special_Resource.BP_Per_Turn;

     return stat

}

function calculate_Hex_Stats(hex){
    calculate_Hex_Cities(hex);
    hex.economy = calculate_Hex_Economy(hex);
    hex.loyalty = calculate_Hex_Loyalty(hex);
    hex.stability = calculate_Hex_Stability(hex);
    hex.defense = calculate_Hex_Defense(hex);
    hex.consumption = calculate_Hex_Consumption(hex);
    hex.BP_Per_Turn = calculate_Hex_Build_Points_Per_Turn(hex);
}


  function add_City(hex,city){
    hex.cities.push(city);
  }

  function add_Improvement(hex,name,improvement){
      hex.improvements.push([name,improvement])
  }