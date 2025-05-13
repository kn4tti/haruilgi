"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// 예시 데이터: 일기가 작성된 날짜
const diaryEntries = [3, 8, 12, 17, 21, 25]

export default function CalendarTab() {
  const [currentDate, setCurrentDate] = useState(new Date())

  // 이전 달로 이동
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // 다음 달로 이동
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // 현재 연도와 월 가져오기
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1

  // 현재 월의 첫 날과 마지막 날 가져오기
  const firstDayOfMonth = new Date(year, month - 1, 1)
  const lastDayOfMonth = new Date(year, month, 0)

  // 첫 날의 요일 (0: 일요일, 1: 월요일, ...)
  const firstDayOfWeek = firstDayOfMonth.getDay()

  // 이전 달의 마지막 날 가져오기
  const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate()

  // 달력에 표시할 날짜 배열 생성
  const calendarDays = []

  // 이전 달의 날짜 추가
  const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
  for (let i = prevMonthDays - 1; i >= 0; i--) {
    calendarDays.push({
      date: lastDayOfPrevMonth - i,
      currentMonth: false,
      nextMonth: false,
      hasDiary: false,
    })
  }

  // 현재 달의 날짜 추가
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    calendarDays.push({
      date: i,
      currentMonth: true,
      nextMonth: false,
      hasDiary: diaryEntries.includes(i),
    })
  }

  // 다음 달의 날짜 추가
  const remainingDays = 42 - calendarDays.length
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      date: i,
      currentMonth: false,
      nextMonth: true,
      hasDiary: false,
    })
  }

  // 요일 배열
  const weekdays = ["월", "화", "수", "목", "금", "토", "일"]

  // 현재 날짜
  const today = new Date()
  const isToday = (date: number) => {
    return (
      today.getDate() === date &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    )
  }

  return (
    <div className="h-[calc(100vh-180px)] overflow-y-auto px-6 pb-20 mt-0">
      <div className="bg-[#213555] border-2 border-[#3e5879] rounded-3xl p-6 mt-4">
        {/* 월 네비게이션 */}
        <div className="flex justify-center items-center mb-6">
          <button onClick={prevMonth} className="text-[#f5efe7] p-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-light text-[#f5efe7] mx-4">
            {year}년 {month}월
          </h2>
          <button onClick={nextMonth} className="text-[#f5efe7] p-2">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 mb-2">
          {weekdays.map((day, index) => (
            <div key={day} className={`text-center font-medium ${index >= 5 ? "text-[#c94c4c]" : "text-[#f5efe7]"}`}>
              {day}
            </div>
          ))}
        </div>

        {/* 달력 그리드 */}
        <div className="grid grid-cols-7 gap-y-4">
          {calendarDays.map((day, index) => (
            <div key={index} className="text-center relative">
              <div
                className={`
                  inline-flex items-center justify-center w-10 h-10 rounded-full
                  ${day.hasDiary ? "bg-[#3e5879]/80" : ""}
                  ${isToday(day.date) && day.currentMonth ? "bg-[#d28a8a] border-2 border-[#f5efe7]" : ""}
                `}
              >
                <span
                  className={`
                    text-lg
                    ${!day.currentMonth ? "text-[#f5efe7]/40" : ""}
                    ${day.currentMonth && index % 7 >= 5 ? "text-[#c94c4c]" : "text-[#f5efe7]"}
                  `}
                >
                  {day.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
