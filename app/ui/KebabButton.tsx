'use client'

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function KebabButton() {

  function handleClick(e: any) {
    e.stopPropagation()
  }
  return (
    <Menu>
      <MenuButton onClick={handleClick} className="rounded-full hover:bg-green-200 w-8 flex items-center justify-center">
        <EllipsisVerticalIcon className="h-6 w-6" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-28 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <div onClick={() => console.log('Rename')} className="gap-2 py-1.5 px-3 data-[focus]:bg-gray-100 text-txt-pri-color font-semibold cursor-pointer">
            Rename
          </div>
        </MenuItem>
        <MenuItem>
          <div onClick={() => console.log('Delete')} className="gap-2 py-1.5 px-3 data-[focus]:bg-gray-100 text-red-500 cursor-pointer">
            Delete
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
