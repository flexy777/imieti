import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-16 w-full max-w-[200px] sm:h-20 sm:max-w-[240px]">
        <Image src="/logo-imi.png" alt="Imieti Online Agency" fill priority className="object-fill" />
      </div>
    </Link>
  )
}
