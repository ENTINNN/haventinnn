#!/usr/bin/env node
"use strict";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date) {
  const day = WEEKDAYS[date.getUTCDay()];
  const month = MONTHS[date.getUTCMonth()];
  return `${day}, ${month} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function formatGreeting(name, date = new Date()) {
  const trimmed = typeof name === "string" ? name.trim() : "";
  const who = trimmed.length > 0 ? trimmed : "there";
  return `Hello, ${who}! Today is ${formatDate(date)}.`;
}

function main(argv = process.argv.slice(2), stdout = process.stdout, date = new Date()) {
  stdout.write(`${formatGreeting(argv[0], date)}\n`);
}

if (require.main === module) {
  main();
}

module.exports = { formatDate, formatGreeting, main };
