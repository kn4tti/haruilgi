export function getWeekdayColor(day: string) {
  switch (day) {
    case "MON":
      return "bg-[#d28a8a]"
    case "TUE":
      return "bg-[#7b5a41]"
    case "WED":
      return "bg-[#c8b29d]"
    case "THU":
      return "bg-[#d8a066]"
    case "FRI":
      return "bg-[#b35b5b]"
    case "SAT":
      return "bg-[#d9b46c]"
    case "SUN":
      return "bg-[#d28a8a]"
    default:
      return "bg-gray-400"
  }
}

export function getLighterColor(day: string) {
  switch (day) {
    case "MON":
      return "bg-[#e6b3b3]"
    case "TUE":
      return "bg-[#a37a5c]"
    case "WED":
      return "bg-[#d9c7b8]"
    case "THU":
      return "bg-[#e6bc8a]"
    case "FRI":
      return "bg-[#cc8080]"
    case "SAT":
      return "bg-[#e6cc8a]"
    case "SUN":
      return "bg-[#e6b3b3]"
    default:
      return "bg-gray-300"
  }
}
