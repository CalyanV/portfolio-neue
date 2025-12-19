import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  if (!date || typeof date !== 'string') {
    return 'Invalid date';
  }
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export function parseMetricValue(value: string) {
  // Extract numeric value from strings like "7x", "96%", "~73k", "$120k"
  const numMatch = value.match(/[\d.]+/);
  if (!numMatch) return 0;
  const num = parseFloat(numMatch[0]);

  // Handle thousands (k)
  if (value.toLowerCase().includes('k')) {
    return num;
  }
  return num;
}

export function formatMetricValue(value: string, tickerValue: number) {
  // Return the formatted value with suffix
  if (value.includes('x')) return `${tickerValue}x`;
  if (value.includes('%')) return `${tickerValue}%`;
  if (value.toLowerCase().includes('h')) return `~${tickerValue}h`;
  if (value.toLowerCase().includes('k')) return `~${tickerValue}k`;
  if (value.includes('$')) return `$${tickerValue}k`;
  return tickerValue.toString();
}
