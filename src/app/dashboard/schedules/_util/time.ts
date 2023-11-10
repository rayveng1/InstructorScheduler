export function timeDifference(time1: string, time2: string) {
  // Parse time strings to get hours and minutes
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  // Convert time to minutes
  const timeInMinutes1 = hours1 * 60 + minutes1;
  const timeInMinutes2 = hours2 * 60 + minutes2;

  // Calculate the absolute difference in minutes
  let timeDiff = Math.abs(timeInMinutes2 - timeInMinutes1);

  // Calculate hours and minutes difference
  const hoursDiff = Math.floor(timeDiff / 60);
  const minutesDiff = timeDiff % 60;

  // return `${hoursDiff} hours and ${minutesDiff} minutes`;
  // console.log(hoursDiff * 4 + Math.trunc(minutesDiff / 15));
  return hoursDiff * 4 + Math.trunc(minutesDiff / 15);
}
