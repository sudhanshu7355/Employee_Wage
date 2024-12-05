function month_wage() {
    let total_hours = 0; // Total hours worked in the month
    let total_wage = 0; // Total wage for the month
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const HOUR_WAGE = 20;
  
    for (let i = 1; i <= 20; i++) {
      // Check if the employee is present
      let isPresent = Math.floor(Math.random() * 2); // 0 = Absent, 1 = Present
  
      if (isPresent === 1) {
        console.log(`Day ${i}: Employee is Present`);
  
        // Determine work type (No Time, Part Time, Full Time)
        let workType = Math.floor(Math.random() * 3); // 0 = No Time, 1 = Part Time, 2 = Full Time
  
        switch (workType) {
          case 0: // No Time
            console.log("  No time worked (0 hours)");
            break;
  
          case 1: // Part Time
            console.log("  Part time worked (4 hours)");
            total_hours += PART_TIME_HOURS;
            total_wage += PART_TIME_HOURS * HOUR_WAGE;
            break;
  
          case 2: // Full Time
            console.log("  Full time worked (8 hours)");
            total_hours += FULL_TIME_HOURS;
            total_wage += FULL_TIME_HOURS * HOUR_WAGE;
            break;
  
          default:
            console.log("  Invalid work type");
            break;
        }
      } else {
        console.log(`Day ${i}: Employee is Absent`);
      }
    }
  
    console.log(`\nTotal Hours Worked: ${total_hours}`);
    console.log(`Total Monthly Wage: $${total_wage}`);
  }
  
  // Calculate wages for the month
  month_wage();