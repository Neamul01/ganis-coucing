import Image from "next/image"
import Button from '@mui/material/Button';

export const Banner = ()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
            <div className="col-span-2 flex flex-col items-end gap-4 w-full">
                <h2 className="md:text-5xl font-bold flex tracking-wide leading-8">Your Course to success</h2>
                <p className="tracking-wide leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia totam nesciunt deleniti ut suscipit obcaecati.
                </p>
               <div className="w-full">
               <Button variant="contained" size="large" className="bg-primary hover:bg-primary/70 text-sm md:py-3 md:px-5" >Get Started</Button>
               </div>
            </div>
            <div className="col-span-3">
                <div className="">
                    <Image src={'/layer.png'} alt="layout" width={1000} height={1000}/>
                </div>
            </div>
        </div>
    )
}