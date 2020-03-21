const npc = {

    Dalia:{
        name:"Dalia",
        strength:22,
        dexterity:12,
        constitution:16,
        intelligence:8,
        wisdom:12,
        charisma:18,
    },
    Bartholomew_2:{
        name:"Bartholomew 2",
        strength:7,
        dexterity:14,
        constitution:13,
        intelligence:16,
        wisdom:9,
        charisma:17,
    },
    Varys:{
        name:"Varys",
        strength:10,
        dexterity:10,
        constitution:12,
        intelligence:14,
        wisdom:8,
        charisma:18,
    },
    Survives_By_Luck:{
        name:"Survives By Luck",
        strength:10,
        dexterity:10,
        constitution:12,
        intelligence:12,
        wisdom:12,
        charisma:12,
    },
    Danny:{
        name:"Danny Whistler",
        strength:8,
        dexterity:14,
        constitution:10,
        intelligence:10,
        wisdom:8,
        charisma:14,
    },
    Jarl:{
        name:"Jarl Mountaincleaver",
        strength:14,
        dexterity:9,
        constitution:17,
        intelligence:10,
        wisdom:21,
        charisma:6,
    },
    Chasm:{
        name:"Old Dwarf Chasm",
        strength:8,
        dexterity:14,
        constitution:8,
        intelligence:20,
        wisdom:13,
        charisma:18,
    },
    Dorin:{
        name:"Dorin Shattersmith",
        strength:20,
        dexterity:10,
        constitution:17,
        intelligence:8,
        wisdom:13,
        charisma:9,
    },
    Brutus:{
        name:"Brutus Staktare",
        strength:17,
        dexterity:13,
        constitution:12,
        intelligence:22,
        wisdom:13,
        charisma:6,
    },
    Bartholomew:{
        name:"Bartholomew",
        strength:13,
        dexterity:15,
        constitution:12,
        intelligence:2,
        wisdom:14,
        charisma:7,
    },
    Generic:{
        name:"Generic Placeholder",
        strength:12,
        dexterity:12,
        constitution:12,
        intelligence:12,
        wisdom:12,
        charisma:12,
    },
}






const npc_Array = [npc.Dalia,npc.Bartholomew_2,npc.Varys,npc.Survives_By_Luck,npc.Danny,npc.Jarl,npc.Chasm,npc.Dorin,npc.Brutus,npc.Bartholomew,npc.Generic];

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