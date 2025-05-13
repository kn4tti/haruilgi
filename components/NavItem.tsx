"use client"

import type React from "react"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick: () => void
}

export default function NavItem({ icon, label, isActive = false, onClick }: NavItemProps) {
  return (
    <div
      className={`flex flex-col items-center ${isActive ? "text-[#f5efe7]" : "text-[#f5efe7]/60"}`}
      onClick={onClick}
    >
      <div>{icon}</div>
      <span className={`text-xs mt-1 ${isActive ? "font-medium" : ""}`}>{label}</span>
      {isActive && <div className="w-1.5 h-1.5 bg-[#f5efe7] rounded-full mt-1" />}
    </div>
  )
}
