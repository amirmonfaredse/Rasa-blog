export function validateInput(value, type) {
  switch (type) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "text":
      return /^[a-zA-Zآ-یءئۀ\s]+$/.test(value);
    case "textarea":
      return /^[a-zA-Zآ-یءئۀ0-9\s.,?!'"()\-\n\r]{1,300}$/.test(value);
    default:
      return false;
  }
}
