"use client"

import { FC, use, useEffect, useState } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

import { Input } from "@/components/ui/Input"
import { useGetTemplates } from "@/hooks/useGetTemplates"
import { useDebounce } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string';

interface SearchBarProps { }

const SearchBar: FC<SearchBarProps> = ({ }) => {
  const [text, setText] = useState('');
  const path = usePathname()
  const params = useSearchParams()
  const router = useRouter()
  const [value] = useDebounce(text, 200);

  useEffect(() => {
    if(value === '') {
      router.push(path);
      return;
    }
    /* check for spaces */
    
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    
    const url = qs.stringifyUrl({
      url: path,
      query: {
        ...currentQuery,
        search: value.split(' ').join('-')

      }
    }, { skipNull: true });

    router.push(url);


  }, [value]);

  return (
    <>
      <p className="text-textGray text-[0.9375rem] font-medium mb-[10px]">
        Search / Filter
      </p>
      <div className="relative">
        <Input placeholder="Name" onChange={(e) => setText(e.target.value)} />
        <PiMagnifyingGlassBold className="w-4 h-4 absolute right-0 -translate-x-1/2 top-0 translate-y-[55%] text-themeGreen" />
      </div>
    </>
  )
}

export default SearchBar
