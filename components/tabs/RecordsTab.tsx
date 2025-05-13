import CalendarSection from "@/components/CalendarSection"

export default function RecordsTab() {
  return (
    <div className="h-[calc(100vh-180px)] overflow-y-auto px-6 pb-20 mt-5">
      <CalendarSection title="2025년 2월의 세 번째 마음 책장" />
      <CalendarSection title="2025년 2월의 두 번째 마음 책장" />
      <CalendarSection title="2025년 2월의 첫 번째 마음 책장" />
      <CalendarSection title="2025년 1월의 네 번째 마음 책장" />
      <CalendarSection title="2025년 1월의 세 번째 마음 책장" />
    </div>
  )
}
