// calculate the wage of 12 months 


function month_wage() {
    let total_hours = 0;
    let total_wage = 0; 
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const HOUR_WAGE = 20;
    let month=1;
    
    let day=1;
  
    // for (let i = 1; i <= 20; i++) {
        while( month<12 && day<20 && total_hours<160){
      
      let isPresent = Math.floor(Math.random() * 2); 
  
      if (isPresent === 1) {
        console.log("present");
        // console.log(`Day ${i}: Employee is Present`);
  
        
        let workType = Math.floor(Math.random() * 3); 
  
        switch (workType) {
          case 0: 
            console.log("  No time worked (0 hours)");
            break;
  
          case 1: 
            console.log("  Part time worked (4 hours)");
            total_hours += PART_TIME_HOURS;
            total_wage += PART_TIME_HOURS * HOUR_WAGE;
            break;
  
          case 2: 
            console.log("  Full time worked (8 hours)");
            total_hours += FULL_TIME_HOURS;
            total_wage += FULL_TIME_HOURS * HOUR_WAGE;
            break;
  
          default:
            console.log("  Invalid work type");
            break;
        }
      } else {
        // console.log(`Day ${i}: Employee is Absent`);
        console.log("absent");
      }
    }
  
    console.log(`\nTotal Hours Worked: ${total_hours}`);
    console.log(`Total yearly Wage: $${total_wage}`);
    
    


}
//   }
  
  
  month_wage();

