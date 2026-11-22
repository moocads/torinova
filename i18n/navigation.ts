import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Always use these instead of next/link & next/navigation so locale is preserved
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
