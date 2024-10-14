"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Calendar', href: '/calendar' },
  { name: 'Reminders', href: '/reminders' },
  { name: 'Notes', href: '/notes' },
  { name: 'Vocabulary', href: '/vocabulary' },
  { name: 'Service Hours', href: '/service-hours' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",
                  pathname === item.href && "bg-gray-100 text-gray-900"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}