special_Condition_Testing_Condition = {
    name:"Test special condition",
    economy:5,
    loyalty:0,
    stability:0,
    consumption:0,
    BP_Per_Turn:0,
    unrest:1,
    duration: false,

};

gnome_Fealty = {
    name:"Tribute form Fasurvalt",
    economy:0,
    loyalty:0,
    stability:0,
    consumption:0,
    BP_Per_Turn:1,
    unrest:0,
    duration: false,

};


function add_Special_Condition(kingdom,condition){
    kingdom.special_Conditions.push(condition);
}

