import Image from "next/image"

export default function ImageTag() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
        alt="Next.js logo"
        width={720}
        height={38}
        priority
      />
    </>
  )
}