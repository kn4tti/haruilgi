"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, HelpCircle, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function DiaryWritePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const emotionId = searchParams.get("emotion") || ""
  const imageUrl = searchParams.get("imageUrl") || ""
  const label = searchParams.get("label") || ""

  const [diaryText, setDiaryText] = useState("")
  const [emotion, setEmotion] = useState({
    id: emotionId,
    imageUrl: imageUrl,
    label: label,
  })
  const [currentDate] = useState(new Date())

  // 날짜 포맷팅 (YYYY년 MM월 DD일)
  const formattedDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`

  const handleBack = () => {
    router.back()
  }

  const handleSubmit = () => {
    // 일기 저장 로직 구현
    console.log("일기 저장:", {
      emotion: emotion,
      date: currentDate,
      text: diaryText,
    })

    // 저장 후 홈으로 이동
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#213555] text-[#f5efe7] flex flex-col">
      {/* 헤더 */}
      <header className="bg-[#213555] p-4 flex items-center justify-between">
        <button onClick={handleBack} className="flex items-center text-[#f5efe7]">
          <ChevronLeft className="w-6 h-6" />
          <span className="ml-1 text-lg">돌아가기</span>
        </button>
        <div className="flex items-center space-x-4">
          <HelpCircle className="w-6 h-6" />
          <div className="w-6 h-6 border border-[#f5efe7] flex items-center justify-center">
            <ImageIcon className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* 감정 아이콘 */}
      <div className="flex justify-center my-6">
        {emotion.imageUrl && (
          <Image
            src={emotion.imageUrl || "/placeholder.svg"}
            alt={emotion.label}
            width={80}
            height={80}
            className="w-20 h-20"
          />
        )}
      </div>

      {/* 날짜 */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-light">{formattedDate}</h2>
      </div>

      {/* 일기 작성 영역 */}
      <div className="px-6 flex-1 flex flex-col">
        <div className="bg-[#3e5879]/50 rounded-3xl p-6 flex-1 flex flex-col">
          <textarea
            className="bg-transparent border-none outline-none resize-none flex-1 text-[#f5efe7] placeholder-[#f5efe7]/60"
            placeholder="오늘 하루를 자유롭게 적어보세요. (최대 160자)"
            maxLength={160}
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
          />
        </div>

        {/* 확인 버튼 */}
        <div className="mt-6 mb-10">
          <button className="bg-[#3e5879] text-[#f5efe7] w-full py-4 rounded-full font-medium" onClick={handleSubmit}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}
