import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
          <nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
            <ul className="hidden flex-shrink-0 items-center lg:flex">
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href="/" label="Home" />
              </li>
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href="/products" label="All" />
              </li>
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href="/t-shirts" label="T-shirts" />
              </li>
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href="/hoodies" label="Hoodies" />
              </li>
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href="/accessories" label="Accessories" />
              </li>
            </ul>
          </nav>
          <div className="ml-auto h-full lg:ml-4">
            <Link
              href="/cart"
              className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
            >
              <ShoppingBag aria-hidden="true" />
              <div className="w-4">
                <span className="ml-2 text-sm font-medium ">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
