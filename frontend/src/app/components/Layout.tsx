import Navigation from "./Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation></Navigation>
      <div className="flex flex-col items-center">
        {children}
        <div className="text-[12px] italic">Created by: Niccolo Lampa</div>
      </div>
    </div>
  );
}
