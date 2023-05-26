import {React, Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  return (
    <Menu as='div' className='my-8 w-1/2 md:w-[20%] md:my-0'>
      <div>
        <Menu.Button className="w-full inline-flex justify-center gap-x-1.5 rounded-md py-4 font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white">
          Filter by Region
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className='absolute w-56 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>

          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
                )}
                href="#"
              >
                Africa
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
                )}
                href="#"
              >
                America
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
                )}
                href="#"
              >
                Asia
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
                )}
                href="#"
              >
                Europe
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
                )}
                href="#"
              >
                Oceania
              </a>
            )}
          </Menu.Item>

        </Menu.Items>
      </Transition>
    </Menu>
  )
}






