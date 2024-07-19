import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function DrawerNavbar() {
    return (
        <Drawer>
            <DrawerTrigger asChild className="sm:hidden">
                <Button><i className="ri-menu-line"></i></Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerTitle> { /* Even though there is no Title, the component must be there due to its respective dependency */} </DrawerTitle>
                <DrawerDescription>{ /* Even though there is no Description, the component has to be there due to its respective dependency */} </DrawerDescription>
                <div className="mx-auto w-full max-w-sm">
                    <div className="text-center text-2xl font-bold text-[--light-blue] my-8">
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link className="hover:text-[--mid-blue]" href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[--mid-blue]" href="/galeria">Galeria</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[--mid-blue]" href="/sobre-mi">Sobre Mi</Link>
                            </li>
                            <li>
                                <Link className="hover:text-[--mid-blue]" href="/donaciones">Donaciones</Link>
                            </li>
                        </ul>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button className="font-bold">Cerrar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}