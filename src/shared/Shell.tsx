import type { PropsWithChildren } from "react";
import Nav from "./Nav";

export default function Shell({ children }: PropsWithChildren) {
  return (
    <div className="app">
      <aside className="rail">
        <div className="rail__logo" aria-hidden />
        <div className="rail__text">EXPLORATION</div>
        <div className="rail__ticks" aria-hidden />
      </aside>

      <div className="stage">
        <Nav />
        {children}
      </div>
    </div>
  );
}