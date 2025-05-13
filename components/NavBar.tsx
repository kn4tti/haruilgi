"use client"
import { BookOpen, HomeIcon, CalendarIcon } from "lucide-react"
import NavItem from "@/components/NavItem"
import Image from "next/image"

interface NavBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  return (
    <nav className="w-full bg-[#213555] border-t border-[#3e5879] py-3">
      <div className="flex justify-around items-center">
        <NavItem
          icon={
            activeTab === "records" ? (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A2%E1%86%B8%20%E1%84%87%E1%85%A1%20%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A3%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-XbjpRywKEpPE3YwF0siBem0FNTqRZr.png"
                alt="Records"
                width={24}
                height={24}
              />
            ) : (
              <BookOpen className="w-6 h-6" />
            )
          }
          label="records"
          isActive={activeTab === "records"}
          onClick={() => setActiveTab("records")}
        />
        <NavItem
          icon={<HomeIcon className="w-6 h-6" />}
          label="Home"
          isActive={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavItem
          icon={
            activeTab === "calendar" ? (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8F%E1%85%A2%E1%86%AF%E1%84%85%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A5%20%E1%84%90%E1%85%A2%E1%86%B8%20%E1%84%87%E1%85%A1%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%5B%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A3%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8%5D-4LI77dh9Ugsyy6ycrxcb3HstnOh0vz.png"
                alt="Calendar"
                width={24}
                height={24}
              />
            ) : (
              <CalendarIcon className="w-6 h-6" />
            )
          }
          label="calendar"
          isActive={activeTab === "calendar"}
          onClick={() => setActiveTab("calendar")}
        />
      </div>
    </nav>
  )
}
