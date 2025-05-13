"use client"

import { useState, useEffect } from "react"
import { Moon } from "lucide-react"
import RecordsTab from "@/components/tabs/RecordsTab"
import HomeTab from "@/components/tabs/HomeTab"
import CalendarTab from "@/components/tabs/CalendarTab"
import NavBar from "@/components/NavBar"
import { AnimatePresence, motion } from "framer-motion"

export default function CalendarApp() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState("home") // 기본 탭을 "home"으로 설정

  useEffect(() => {
    // 로컬 스토리지에서 저장된 탭 가져오기
    const savedTab = localStorage.getItem("activeTab")
    if (savedTab) {
      setActiveTab(savedTab)
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 탭 변경 시 로컬 스토리지에 저장
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    localStorage.setItem("activeTab", tab)
  }

  // Format time as HH:MM
  const hours = currentTime.getHours().toString().padStart(2, "0")
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  const timeString = `${hours} : ${minutes}`

  // Format date in Korean
  const year = currentTime.getFullYear()
  const month = currentTime.getMonth() + 1
  const day = currentTime.getDate()
  const dateString = `${year}년 ${month}월 ${day}일`

  // 탭 컴포넌트 매핑
  const tabComponents = {
    records: RecordsTab,
    home: HomeTab,
    calendar: CalendarTab,
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#213555] text-[#f5efe7] font-sans">
      {/* Header with time and date */}
      <header className="px-6 pt-10 pb-2 relative">
        <div className="absolute right-6 top-10">
          <Moon className="text-[#f5efe7] w-8 h-8" />
        </div>
        <h1 className="text-xl font-light">{dateString}</h1>
        <p className="text-[68px] font-light mt-1 leading-none">{timeString}</p>
      </header>

      {/* Content based on active tab with animation */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {Object.entries(tabComponents).map(([tabName, TabComponent]) => {
            if (tabName === activeTab) {
              return (
                <motion.div
                  key={tabName}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <TabComponent />
                </motion.div>
              )
            }
            return null
          })}
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      <NavBar activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  )
}
