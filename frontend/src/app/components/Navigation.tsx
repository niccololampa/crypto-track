import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link className="mr-2" href="/bitcoin">
          BTC
        </Link>
        <Link className="mr-2" href="/ethereum">
          ETH
        </Link>
        <Link className="mr-2" href="/dogecoin">
          DOGE
        </Link>
      </nav>
    </div>
  );
}
