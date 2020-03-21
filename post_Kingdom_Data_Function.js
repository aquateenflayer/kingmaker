function post_Data(data,id){
    document.getElementById(id).innerHTML = data;
}

function post_Kingdom_Data(kingdom){
    calculate_Kingdoms_Stats(kingdom)
post_Data(`${kingdom.name}`,"kingdom_Name");
const core_Stats = 
`Kingdom Size ${kingdom.hexs.length} 
<br>Economy ${kingdom.economy}
<br>Loyalty ${kingdom.loyalty}
<br>Stability ${kingdom.stability}

`;
post_Data(core_Stats,'stats');

const edicts = 
`
<br>Taxation Edict: ${taxation_Array[kingdom.taxation_Edict].name}
<br>Holiday Edict: ${holiday_Array[kingdom.holiday_Edict].per_Year} holiday's per year.
<br>Promotion Edict: ${promotion_Array[kingdom.promotion_Edict].name}

`
post_Data(edicts,"edicts");

const treasury =
`
<br>Build Points: ${kingdom.build_Points}
<br>Consumption: ${kingdom.consumption}
<br>Minimum Income: ${kingdom.BP_Per_Turn}
`;

post_Data(treasury,"treasury");

}
/*special_Condition_Testing_Condition = {
    name:"Test special condition",
    economy:5,
    loyalty:0,
    stability:0,
    consumption:0,
    BP_Per_Turn:0,
    unrest:1,
    duration: false,

};
kingdom_1.special_Conditions.push(special_Condition_Testing_Condition)
*/