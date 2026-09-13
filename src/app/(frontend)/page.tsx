
import Image from "next/image"
import hero from "../../../public/12.jpeg"
import one from "../../../public/1.jpeg"
import two from "../../../public/2.jpeg"
import three from "../../../public/3.jpeg"
import four from "../../../public/4.jpeg"
import five from "../../../public/5.jpeg"
import six from "../../../public/6.jpeg"
import seven from "../../../public/7.jpeg"
import eight from "../../../public/8.jpeg"
import { Divider } from "@/components/Divider"
import React from "react"
import { Contact } from "@/components/Contact"

const images = [
  {
    title: "Title 1",
    description: "Description 1",
    image: one,
  },
  {
    title: "Title 2",
    description: "Description 2",
    image: two,
  },
  {
    title: "Title 3",
    description: "Description 3",
    image: three,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: four,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: five,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: six,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: seven,
  },
  {
    title: "Title 4",
    description: "Description 4",
    image: eight,
  },
]
export default async function HomePage() {
  return (
    <>
      <ImageCard description="Description" title="title" nextImageProps={{
        src: hero,
        alt: "title",
        fill: true,
        className: "object-cover object-center"
      }} />
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {images.map((item, index) => (
          <div
            key={index + "image"}
            className="flex"
          >
            <div className="w-full">
              <ImageCard
                title={item.title}
                description={item.description}
                nextImageProps={{
                  src: item.image,
                  alt: item.title,
                  fill: true,
                  className: "object-cover object-center",
                }}
              />

              <Divider />
            </div>

            {/* Desktop: between images */}
            {index % 2 === 0 && index < images.length - 1 && (
              <div className="hidden md:block">
                <Divider orientation="vertical" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2  py-20 ">
        <img src="/shees.png" alt="shees" className="rounded-full size-40 mb-4" />
        <h3 className="font-bold font-(family-name:--montserrat) text-lg">Syed Shees</h3>
        <p className="text-primary-foreground">Digital Artist · Illustrator · Concept Artist · Comic · Children Book Artist · Graffiti Artist</p>
      </div>
      <Divider />
      <Contact />
      <Divider />
    </>
  )
}
const ImageCard: React.FC<{
  title: string,
  description: string
} & { nextImageProps: React.ComponentProps<typeof Image> }> = ({
  description,
  nextImageProps,
  title
}) => {
    return <div className="h-126 relative">
      <Image {...nextImageProps} />
      <div className="absolute bottom-10 left-10 bg-background/10 backdrop-blur-xs rounded-md p-8">
        <h2 className="font-semibold text-white text-2xl">{title}</h2>
        <p className="font-light text-white text-xl">{description}</p>
      </div>
    </div>
  }
