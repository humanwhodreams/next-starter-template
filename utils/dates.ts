/*
  A collection of helper functions for handling dates.
*/

export function formatDate() {}

export function getTodaysDate() {}
export function getTomorrowsDate() {}
export function getYesterdaysDate() {}

export function getDay() {}
export function getMonth() {}
export function getYear() {}

export function getTime() {}

/**
 * Get the current time of todays date
 * @returns Current time in format HH:MM:SS
*/
export function getCurrentTime(): string {
  const current = new Date().toLocaleTimeString();

  return current;
}
