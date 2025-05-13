"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomeTab() {
  const router = useRouter()

  const handleRecordClick = () => {
    router.push("/emotion-select")
  }

  return (
    <div className="h-[calc(100vh-180px)] overflow-y-auto px-6 pb-20 mt-0 relative flex flex-col items-center">
      <div className="flex justify-center items-center mt-20 mb-8 w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%92%E1%85%A9%E1%86%B7%20%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-rXT8AXedxz7Kj62hWEXF3dwlICYyc3.png"
          alt="Home character"
          width={1000}
          height={1000}
          className="z-20 w-[calc(100%-40px)] h-auto max-w-[600px]"
          priority
        />
      </div>

      <button
        className="bg-[#f5efe7] text-[#213555] font-medium py-3 px-8 rounded-full mt-4"
        onClick={handleRecordClick}
      >
        오늘 하루 기록하기
      </button>
    </div>
  )
}
