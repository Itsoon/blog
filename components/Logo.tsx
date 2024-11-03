import Link from "next/link";
import classes from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={classes.logo}>
      <span>Itsoon</span>
    </Link>
  );
}
``;
