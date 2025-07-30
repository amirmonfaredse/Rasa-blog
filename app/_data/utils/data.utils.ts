// @ts-ignore
import persianDate from "persian-date";

export function getPersianDate(): string {
  return new persianDate().format("MMMM,D");
}

export function newPersianDate(): string {
  return new persianDate(new Date()).format("dddd  |   D - MMMM - YYYY");
}
