

let a=Math.floor(Math.random()*2);
if(a===1){
    present();
}
if(a===0){
    console.log("absent");
}

function present(){

let part_hours=4;
let full_hours=8;
let hour_wage=20;


let workType = Math.floor(Math.random() * 3);

let dailyWage=0;

switch (workType){

    case 0:
        console.log("notime worked hours 0");
        dailyWage=0;

        case 1:
            console.log("partime worked hours is 4");
            dailyWage=part_hours*hour_wage;
            break;

            case 2:
                console.log("fulltime worked hours is 8");
                dailyWage=full_hours*hour_wage;
                break;

                default:
                    console.log("invalid hours");
                    dailyWage=0;
                    break;


        
}
console.log(dailyWage);
}

