import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/bitcoin">BTC</Link>
        <Link href="/ethereum">ETH</Link>
        <Link href="/dogecoin">DOGE</Link>
      </nav>
    </div>
  );
}
