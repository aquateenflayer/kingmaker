const taxation_Array = [
    {
        name:"no taxes",
        economy:0,
        loyalty:1
    },
    {
        name:"light",
        economy:1,
        loyalty:-1
    },
    {
        name:"normal",
        economy:2,
        loyalty:-2
    },
    {
        name:"heavy",
        economy:3,
        loyalty:-4
    },
    {
        name:"overwhelming",
        economy:4,
        loyalty:-2
    }
]

const holiday_Array = [
    {
        per_Year:0,
        loyalty:-1,
        consumption:0
    },
    {
        per_Year:1,
        loyalty:1,
        consumption:1
    },
    {
        per_Year:6,
        loyalty:2,
        consumption:2
    },
    {
        per_Year:12,
        loyalty:3,
        consumption:4
    },
    {
        per_Year:24,
        loyalty:4,
        consumption:8
    },

]

const promotion_Array = [
    {
        name:'no effort',
        stability:-1,
        consumption:0
    },
    {
        name:'token',
        stability:1,
        consumption:1
    },
    {
        name:'standard',
        stability:2,
        consumption:2
    },
    {
        name:'aggressive',
        stability:3,
        consumption:4
    },
    {
        name:'expantionist',
        stability:4,
        consumption:8
    },
]


/*
function adjust_Edict(kingdom,edict,level){
    kingdom.edict = level
}
*/