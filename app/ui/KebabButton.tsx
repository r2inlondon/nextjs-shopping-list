'use client'

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function KebabButton() {

  function handleClick(e:any){
    e.stopPropagation()
    console.log('clicked')
  }
  return (
    <button onClick={handleClick} className="rounded-full hover:bg-green-200 w-8 flex items-center justify-center">
      <EllipsisVerticalIcon className="h-6 w-6" />
    </button>
  );
}
