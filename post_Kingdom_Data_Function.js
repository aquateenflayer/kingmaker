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


const leadership =
`
<br><b>Ruler:</b> ${kingdom.leadership.ruler.name}
<br><b>Councilor:</b> ${kingdom.leadership.councilor.name}
<br><b>General:</b> ${kingdom.leadership.general.name}
<br><b>Grand Diplomat:</b> ${kingdom.leadership.grand_Diplomat.name}
<br><b>High Priest:</b> ${kingdom.leadership.high_Priest.name}
<br><b>Magister:</b> ${kingdom.leadership.magister.name}
<br><b>Marshal:</b> ${kingdom.leadership.marshal.name}
<br><b>Royal Enforcer:</b> ${kingdom.leadership.royal_Enforcer.name}
<br><b>Spymaster:</b> ${kingdom.leadership.spymaster.name}
<br><b>Treasurer:</b> ${kingdom.leadership.treasurer.name}
<br><b>Warden:</b> ${kingdom.leadership.warden.name}
`

post_Data(leadership,"leadership");
}
