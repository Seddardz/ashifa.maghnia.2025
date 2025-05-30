// components/Loading.tsx
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#ffffff] to-white dark:from-[#1A2213] dark:to-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <Image
          className="pulse-image"
          src="/images/ashifa.svg"
          alt="Loading"
          width={120}
          height={120}
          priority
        />
        {/* <p className="mt-4 text-[#647F2F] dark:text-[#7B934C] font-medium">
          Loading...
        </p> */}
      </div>
    </div>
  );
}
