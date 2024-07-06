import Navigation from "./Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        {children}
        <div className="text-[12px] italic flex justify-center text-teal-500">
          Created by: Niccolo Lampa niccololampa@gmail.com
        </div>
      </div>
    </div>
  );
}
