import { Button } from "@/components/ui/button";
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

import { useModal } from "@/providers/modal-provider";


import React from 'react'

type Props = {
    title: string;
    subheading: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function CustomModal({
    children, 
    subheading, 
    title, 
    defaultOpen
}: Props) {
   
    const {isOpen, setClose} = useModal();
    
    const handleClose = () => setClose();

  return (
    <Drawer
        open={isOpen}
        onClose={handleClose}
    >
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle className="text-center">{title}</DrawerTitle>
                <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
                    {subheading}
                    {children}
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="flex flex-col gap-4 bg-background border-t-muted boder-t-[1px]">
                <DrawerClose>
                    <Button 
                        variant="ghost" 
                        onClick={handleClose} 
                        className="w-full"
                    >
                        Close
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default CustomModal