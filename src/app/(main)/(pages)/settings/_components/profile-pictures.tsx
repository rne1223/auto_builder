'use client'

import UploadCareButton from '@/app/(main)/(pages)/settings/_components/uploadcare-button';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type Props = {
    onUpload?: any
    onDelete?: any
    userImage: string | null
}

const ProfilePicture = ({ userImage, onDelete, onUpload}: Props) => {
    const router = useRouter();

    const onRemoveProfileImage = async () => {
        const response = await onDelete()
        if(response) {
            router.refresh()
        } 
    }

  return (
    <div className="flex flex-col">
        <p className="text-lg text-white"> Profile Picture </p>
        {/* Display Image or Upload Button */}
        <div className="flex flex-col items-center justify-center h-[30vh]">
            {
                userImage ? (
                    <>
                        <div className="relative h-full w-2/12">
                            <Image 
                                src={userImage}     
                                alt="User Image"
                                fill
                            />
                        </div>
                        <Button
                            onClick={onRemoveProfileImage}
                            className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                        >
                           <X/>Remove Image
                        </Button>
                    </> 
                ):(
                    <UploadCareButton onUpload={onUpload}/>
                )
            }
        </div>
    </div>
  )
}

export default ProfilePicture