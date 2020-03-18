function calculate_Kingdom_Hexs(kingdom){
    
        for(hex_Number = 0; hex_Number<kingdom.hexs.length;hex_Number++){
            calculate_Hex_Stats(kingdom.hexs[hex_Number])
        }
}








function calculate_Kingdom_Economy(kingdom){
    stat = 0;
    
    for(hex_Number = 0; hex_Number < kingdom.hexs.length;hex_Number++ ){
        stat += kingdom.hexs[hex_Number].economy
    }

    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].economy
    }

    stat += kingdom.leadership.ruler.charisma_Mod;
        //console.log(kingdom.leadership.ruler.charisma_Mod)
/////////////////////////////////////////////////////////////////////////
let magister = kingdom.leadership.magister;
//console.log(magister)
if(magister.charisma_Mod >= magister.intelligence_Mod){
    stat += magister.charisma_Mod
   // console.log('magister charisma')
} else if(magister.charisma_Mod < magister.intelligence_Mod){
    stat += magister.intelligence_Mod
    //console.log('magister intelligence' )
}else{console.log("erro comparing magister stats for leadership economy")}  
/////////////////////////////////////////////////////////////////////////
let treasurer = kingdom.leadership.treasurer;
//console.log(treasurer)
if(treasurer.wisdom_Mod >= treasurer.intelligence_Mod){
    stat += treasurer.wisdom_Mod
   // console.log('treasurer charisma')
} else if(treasurer.wisdom_Mod < treasurer.intelligence_Mod){
    stat += treasurer.intelligence_Mod
    //console.log('treasurer intelligence' )
}else{console.log("erro comparing treasurer stats for leadership economy")}  
/////////////////////////////////////////////////////////////////////////
let warden = kingdom.leadership.warden;
//console.log(warden)
if(warden.wisdom_Mod >= warden.dexterity_Mod){
    stat += warden.wisdom_Mod
   // console.log('warden charisma')
} else if(warden.wisdom_Mod < warden.dexterity_Mod){
    stat += warden.dexterity_Mod
    //console.log('warden intelligence' )
}else{console.log("erro comparing warden stats for leadership economy")}  

let taxes = kingdom.taxation_Edict;
stat += taxation_Array[taxes].economy;



    return stat

}


function calculate_Kingdom_Loyalty(kingdom){
    stat = 0;
    
    for(hex_Number = 0; hex_Number < kingdom.hexs.length;hex_Number++ ){
        stat += kingdom.hexs[hex_Number].loyalty
    }

    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].loyalty
    }

    let councilor = kingdom.leadership.councilor;
    if(councilor.charisma_Mod >= councilor.wisdom_Mod){
        stat += councilor.charisma_Mod
       // console.log('councilor charisma')
    } else if(councilor.charisma_Mod < councilor.wisdom_Mod){
        stat += councilor.wisdom_Mod
        //console.log('councilor wisdom')
    }else{console.log("erro comparing councilor stats for leadership loyalty")}    


stat += taxation_Array[kingdom.taxation_Edict].loyalty    
stat += holiday_Array[kingdom.holiday_Edict].loyalty



    return stat
}



function calculate_Kingdom_Stability(kingdom){
    stat = 0;
    ////////////////////stats form the hexs claimed by the kingdom///////////////
    for(hex_Number = 0; hex_Number < kingdom.hexs.length;hex_Number++ ){
        stat += kingdom.hexs[hex_Number].stability
    }
////////////////////stats from special conditions/////////////////////
    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].stability
    }

//////////////////////////////////////////////////////////////////////
    let general = kingdom.leadership.general;
    if(general.charisma_Mod >= general.strength_Mod){
        stat += general.charisma_Mod
       // console.log('general charisma')
    } else if(general.charisma_Mod < general.strength_Mod){
        stat += general.strength_Mod
        //console.log('general stength')
    }else{console.log("erro comparing general stats for leadership stability")}  
//////////////////////////////////////////////////////////  
    let diplomat = kingdom.leadership.grand_Diplomat;
    //console.log(diplomat)
    if(diplomat.charisma_Mod >= diplomat.intelligence_Mod){
        stat += diplomat.charisma_Mod
       // console.log('diplomat charisma')
    } else if(diplomat.charisma_Mod < diplomat.intelligence_Mod){
        stat += diplomat.intelligence_Mod
        //console.log('diplomat intelligence' )
    }else{console.log("erro comparing diplomat stats for leadership stability")}  
///////////////////////////////////////////////////////////////////////////////
let priest = kingdom.leadership.high_Priest;
if(priest.charisma_Mod >= priest.wisdom_Mod){
    stat += priest.charisma_Mod
   // console.log('priest charisma')
} else if(priest.charisma_Mod < priest.wisdom_Mod){
    stat += priest.wisdom_Mod
    //console.log('priest wisdom')
}else{console.log("erro comparing priest stats for leadership stability")}   
//////////////////////////////////////////////////////////////////////
let marshal = kingdom.leadership.marshal;
if(marshal.constitution_Mod >= marshal.strength_Mod){
    stat += marshal.constitution_Mod
   // console.log('marshal charisma')
} else if(marshal.constitution_Mod < marshal.strength_Mod){
    stat += marshal.strength_Mod
    //console.log('marshal stength')
}else{console.log("erro comparing marshal stats for leadership stability")}  
//////////////////////////////////////////////////////////////////////
let enforcer = kingdom.leadership.royal_Enforcer;
if(enforcer.dexterity_Mod >= enforcer.strength_Mod){
    stat += enforcer.dexterity_Mod
   // console.log('enforcer charisma')
} else if(enforcer.dexterity_Mod < enforcer.strength_Mod){
    stat += enforcer.strength_Mod
    //console.log('enforcer stength')
}else{console.log("erro comparing enforcer stats for leadership stability")}  
//////////////////////////////////////////////////////////////////////
let spymaster = kingdom.leadership.spymaster;
if(spymaster.dexterity_Mod >= spymaster.intelligence_Mod){
    stat += spymaster.dexterity_Mod
   // console.log('spymaster charisma')
} else if(spymaster.dexterity_Mod < spymaster.intelligence_Mod){
    stat += spymaster.intelligence_Mod
    //console.log('spymaster stength')
}else{console.log("erro comparing spymaster stats for leadership stability")}  

stat += promotion_Array[kingdom.promotion_Edict].stability;



    return stat

}

function calculate_Kingdom_Consumption(kingdom){
    stat = 0;
    
    for(hex_Number = 0; hex_Number < kingdom.hexs.length;hex_Number++ ){
        stat += kingdom.hexs[hex_Number].consumption
    }

    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].consumption
    }

    stat += holiday_Array[kingdom.holiday_Edict].consumption
    //console.log(holiday_Array[kingdom.holiday_Edict].consumption)
    //console.log(kingdom.holiday_Edict)
    stat += promotion_Array[kingdom.promotion_Edict].consumption

    stat += kingdom.hexs.length;

    if(stat < 0){stat = 0};
    return stat

}

function calculate_Kingdom_Build_Points(kingdom,transaction_Value){
    kingdom.build_Points += transaction_Value;
    return kingdom.build_Points;
}

function calculate_Kingdom_Unrest(kingdom){
    stat = kingdom.unrest;
    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].unrest
    }
    return stat
}

function calculate_Kingdom_Build_Points_Per_Turn(kingdom){

    stat = 0;
    
    for(hex_Number = 0; hex_Number < kingdom.hexs.length;hex_Number++ ){
        stat += kingdom.hexs[hex_Number].BP_Per_Turn
    }

    for(condition_Number = 0; condition_Number < kingdom.special_Conditions.length;condition_Number++ ){
        stat += kingdom.special_Conditions[condition_Number].BP_Per_Turn
    }

    return stat

}



function calculate_Kingdoms_Stats(kingdom){
    calculate_Kingdom_Hexs(kingdom);
    kingdom.economy = calculate_Kingdom_Economy(kingdom);
    kingdom.loyalty = calculate_Kingdom_Loyalty(kingdom);
    kingdom.stability = calculate_Kingdom_Stability(kingdom);
    kingdom.consumption = calculate_Kingdom_Consumption(kingdom);
    kingdom.unrest =  calculate_Kingdom_Unrest(kingdom);
    kingdom.BP_Per_Turn = calculate_Kingdom_Build_Points_Per_Turn(kingdom);
}