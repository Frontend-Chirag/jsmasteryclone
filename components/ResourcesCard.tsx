import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface Props {
    id: string;
    title:string;
    image: string;
    downloadNumber: number;
    downloadLink:string;
}

const ResourcesCard = ({ id, title, image, downloadNumber,downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit max-h-[530px] sm:max-w-[356px] !border-neutral-800 py-8  px-5 
     !border-t-0 !border-r-0 !border-b-0 rounded-none">
        <Link href={downloadLink}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-[370px] w-full">
                <Image 
                 src={image} 
                 alt="image"
                 className=" rounded-md h-full w-full object-cover"
                 width={270}
                 height={200}
                 />
            </div>
            <CardTitle className="text-white paragraph-semibold  w-full text-left px-0 py-2">
              {title}
            </CardTitle>
        </CardHeader>
        </Link>
        <CardContent className="flex-between  p-0 ">
            <div className="flex-center body-medium gap-1.5 text-white">
                <Image
                 src='/downloads.svg'
                 width={20}
                 height={20}
                 alt="download"
                />
                {downloadNumber}
            </div>
            <Link href={downloadLink} className="flex-center text-gradient_black body-semibold
            gap-1.5
            ">
                Download Now 
                <Image
                 src='/arrow-blue.svg'
                 width={13}
                 height={13}
                 alt="arrow"
                />
            </Link>
        </CardContent>
    </Card>
  )
}

export default ResourcesCard