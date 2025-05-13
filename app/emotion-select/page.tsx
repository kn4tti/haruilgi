"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

// 감정 데이터
const emotions = [
  {
    id: "happy",
    label: "행복해",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%92%E1%85%A2-nZQCAEnEEJG0OAQ3hhpQ6ckHIF2N4D.png",
  },
  {
    id: "excited",
    label: "신나",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%82%E1%85%A1-MuwVFM7XL7yRucbCCHJR7so0epYci9.png",
  },
  {
    id: "amused",
    label: "웃겨",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%AE%E1%86%BA%E1%84%80%E1%85%A7-XezGaBqS65oZEtkuL7w0mjAdyKltWb.png",
  },
  {
    id: "love",
    label: "사랑해",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A2-LxnJ66UAUKgKbSMvRcZZ0ZLGjGzw3c.png",
  },
  {
    id: "shy",
    label: "부끄러워",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%B6%80%EB%81%84%EB%9F%AC%EC%9B%8C-nDIeEvbWeY3tffpFU92J6nxfOQG6zm.png",
  },
  {
    id: "unsure",
    label: "잘 모르겠어",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8C%E1%85%A1%E1%86%AF%20%E1%84%86%E1%85%A9%E1%84%85%E1%85%B3%E1%84%80%E1%85%A6%E1%86%BB%E1%84%8B%E1%85%A5-IpRXsYvUFXq4dCF9WsND3vXgrw7lDj.png",
  },
  {
    id: "disappointed",
    label: "실망스러워",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%B5%E1%86%AF%E1%84%86%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B3%E1%84%85%E1%85%A5%E1%84%8B%E1%85%AF-zdBFIlaBO2eiFV0XA1xTLs71KDhxT2.png",
  },
  {
    id: "sad",
    label: "슬퍼",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%91%E1%85%A5-dIIx69xi6CvGmSWpo4yaWvFyAF6UgT.png",
  },
  {
    id: "angry",
    label: "화나",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%92%E1%85%AA%E1%84%82%E1%85%A1-IDGOE9LnGw5Lsk0Yu2hYfWgQssMDFb.png",
  },
]

export default function EmotionSelectPage() {
  const router = useRouter()
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  const handleBack = () => {
    router.back()
  }

  const handleEmotionSelect = (emotionId: string) => {
    setSelectedEmotion(emotionId)

    // 선택한 감정 정보 찾기
    const selectedEmotionData = emotions.find((emotion) => emotion.id === emotionId)

    if (selectedEmotionData) {
      // 일기 작성 페이지로 이동하면서 선택한 감정 정보 전달
      router.push(
        `/diary-write?emotion=${emotionId}&imageUrl=${encodeURIComponent(selectedEmotionData.imageUrl)}&label=${encodeURIComponent(selectedEmotionData.label)}`,
      )
    }
  }

  return (
    <div className="min-h-screen bg-[#213555] text-[#f5efe7] flex flex-col">
      {/* 헤더 */}
      <header className="bg-[#213555] p-4 flex items-center">
        <button onClick={handleBack} className="flex items-center text-[#f5efe7]">
          <ChevronLeft className="w-6 h-6" />
          <span className="ml-1 text-lg">돌아가기</span>
        </button>
      </header>

      {/* 감정 선택 그리드 */}
      <div className="flex-1 bg-[#3e5879] flex items-center justify-center">
        <div className="px-6 py-8 w-full max-w-xl">
          <div className="grid grid-cols-3 gap-x-4 gap-y-12">
            {emotions.map((emotion) => (
              <div
                key={emotion.id}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleEmotionSelect(emotion.id)}
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center mb-3
                    ${selectedEmotion === emotion.id ? "ring-4 ring-[#f5efe7] rounded-full" : ""}`}
                >
                  <Image
                    src={emotion.imageUrl || "/placeholder.svg"}
                    alt={emotion.label}
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-center text-lg">{emotion.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
