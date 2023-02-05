export const addHours = (date:Date | string, hours: number)=>{
  date = new Date(date);
  date.setHours(date.getHours() + hours);
  return date;
}

export const timeDiffMls = (date_start: Date | string, date_end: Date | string)=>{
  return new Date(date_end).getTime() - new Date(date_start).getTime();
}