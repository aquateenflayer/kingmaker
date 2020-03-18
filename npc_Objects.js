const npc = {

    Dalia:{
        name:"Dalia",
        strength:15,
        dexterity:14,
        constitution:12,
        intelligence:12,
        wisdom:8,
        charisma:11,
    },
}






const npc_Array = [npc.Dalia]

function calculate_Npc_Stat_Mods(){

    function calculate_Stat_Mods(npc){
        npc.strength_Mod = Math.floor((npc.strength-10)/2);
        npc.dexterity_Mod = Math.floor((npc.dexterity-10)/2);
        npc.constitution_Mod = Math.floor((npc.constitution-10)/2);
        npc.intelligence_Mod = Math.floor((npc.intelligence-10)/2);
        npc.wisdom_Mod = Math.floor((npc.wisdom-10)/2);
        npc.charisma_Mod = Math.floor((npc.charisma-10)/2);
    //console.log(npc)
    } 

    for(i = 0 ; i < npc_Array.length; i++){
        calculate_Stat_Mods(npc_Array[i])
    }

}