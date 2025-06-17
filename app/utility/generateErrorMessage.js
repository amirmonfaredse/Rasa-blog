export function generateErrorMessage(type) {
  switch (type) {
    case "email":
      return "ایمیل معتبر نیست";
    case "text":
      return "فقط حروف فارسی وانگلیسی  مجاز است";
    case "textarea":
      return "متن حاوی کاراکتر های غیرمجاز است : < > / \\ { } [ ] = + % $ # @ ^ & *";
    default:
      return "مقدار وارد شده مجاز نیست";
  }
}
