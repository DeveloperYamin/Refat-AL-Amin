/* eslint-disable prettier/prettier */
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";

export default function Navbars(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            alt="Flowbite logo"
            height="32"
            src="https://flowbite.com/docs/images/logo.svg"
            width="32"
          />
          <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 space-x-1">
          <Navbar.Toggle />
          <DarkThemeToggle  />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
