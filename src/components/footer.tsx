import { BookText, Users2 } from "lucide-react";

import { APP_NAME } from "@/constants/ensk";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t shadow bg-background md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm sm:text-center ">
        © 2024{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          {APP_NAME}
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-muted-foreground sm:mt-0">
        <li>
          <a
            href="#"
            className="flex items-center justify-center hover:underline me-4 md:me-6"
          >
            <BookText className="w-4 h-4 mr-2" /> Docs
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center hover:underline me-4 md:me-6"
          >
            <Users2 className="w-4 h-4 mr-2" /> Community
          </a>
        </li>
        <li>
          <a
            href={siteConfig.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center hover:underline me-4 md:me-6"
          >
            <FiGithub className="w-4 h-4 mr-2" />
            Github
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center hover:underline"
          >
            <BsTwitterX className="w-4 h-4 mr-2" />
            <span className="sr-only">twitter</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
