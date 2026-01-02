export function formatDate(dateString: string): string {
  const fullDate = new Date(dateString);

  const date = fullDate.toLocaleDateString("sv-SE");
  const time = fullDate.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${date} ${time}`;
}
