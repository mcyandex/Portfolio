'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'

function ProjectButton() {
    const { toast } = useToast()
    return (
        <Button
            size={'lg'}
            className={cn('font-bold text-xl md:w-auto w-full')}
            onClick={() => {
                toast({
                    title: 'Projects page coming soon!',
                    description: 'Till then you can take a look at my github',
                })
            }}
        >
            My Projects
        </Button>
    )
}

export default ProjectButton
