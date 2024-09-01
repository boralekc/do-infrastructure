import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Image
          src="/preloader.gif"
          width={100}
          height={100}
          alt="preloader"
          unoptimized={true}
        />
      </div>
    </div>
  );
}
