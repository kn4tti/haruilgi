import { getWeekdayColor, getLighterColor } from "@/utils/colors"

interface CalendarSectionProps {
  title: string
}

export default function CalendarSection({ title }: CalendarSectionProps) {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  return (
    <div className="bg-[#3e5879]/50 rounded-2xl p-4 mb-4">
      <h2 className="text-xl mb-3">{title}</h2>
      <div className="bg-[#272b46] rounded-2xl p-4">
        <div className="grid grid-cols-7 gap-1.5">
          {weekdays.map((day) => (
            <div key={day} className="flex flex-col">
              <div className={`${getWeekdayColor(day)} rounded-lg p-2 h-[95px] flex flex-col relative`}>
                <div className={`absolute top-[10px] left-0 right-0 h-[10px] ${getLighterColor(day)}`}></div>
                <div className="mt-auto text-[8px] font-medium text-center">{day}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
