import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { FaBars } from "react-icons/fa6"
import Sidebar from "./sidebar"


const DropDown = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars className='w-8 h-8 cursor-pointer my-2' />
            </SheetTrigger>
            <SheetContent>
                <Sidebar />
            </SheetContent>
        </Sheet>


    )
}

export default DropDown;