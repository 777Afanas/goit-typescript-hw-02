/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
} 

let onDay: boolean = true;
let offDay: boolean = false; 

function isWeekend(day: Days): boolean {
  switch (day) {
    case Days["Monday"]:
      return onDay;
    case Days["Tuesday"]:
      return onDay;
    case Days["Wednesday"]:
      return onDay;
    case Days["Thursday"]:
      return onDay;
    case Days["Friday"]:
      return onDay;
    case Days["Saturday"]:
      return offDay;
    case Days["Sunday"]:
    return offDay;
  }   
}