'use client'
import Navbar from "@/components/Navbar"
import DonationCard from "@/components/DonationsCard"
import Badge from "@/components/Badge"
 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FQ from '@/lib/fq.json'

export default function Page() {
    return (
        <section>
            <div className="max-w-2xl mx-auto w-full sticky top-4 z-30 px-4">
                <Navbar />
            </div>
            <div id="donationCard" className="mt-16 max-w-xl mx-auto">
                <DonationCard />
            </div>
            <hr className="my-6 max-w-2xl mx-auto" />
            <section className="max-w-2xl mx-auto m-32 px-4">
                <Badge text="Me ayudas y te ayudo" />
                <div className="text-center max-w-lg mx-auto">
                    <h1 className="text-4xl font-black mb-3">En el mochitour no estoy solo, tambien estan ustedes</h1>
                    <h4 className="text-[--grey]">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem </h4>
                </div>
                <div className="mt-24">
                    <h3 className="text-2xl text-[--mid-blue] font-bold">Productos</h3>
                    <div>
                        {/* Cards de los Productos */}
                    </div>
                </div>
            </section>
            <hr className="my-6 max-w-2xl mx-auto" />
            <section className="bg-[--light-grey]">
                <div className="max-w-2xl mx-auto py-32 px-4">
                    <h3 className="text-2xl text-[--mid-blue] font-bold">Preguntas frecuentes</h3>
                    <div className="flex flex-col gap-3 my-6">
                        {
                            FQ.map((item) => (
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}