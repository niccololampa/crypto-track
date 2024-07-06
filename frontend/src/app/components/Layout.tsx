import Navigation from "./Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <div>Created by: Niccolo Lampa</div>
    </div>
  );
}
