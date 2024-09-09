'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter(); 
  const pathname = usePathname();


  return (
    <div className="relative mt-8 block">
      <Input 
        className="input-class py-6 pl-12 focus-visible:ring-offset-primary-1"
        placeholder='Search for podcasts'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch('')}
      />
      <Image 
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  )
}

export default Searchbar