import MadridClock from "./MadridClock";

export default function SiteTopbar() {
  return (
    <div className="topbar" data-screen-label="Topbar">
      <div className="topbar-inner">
        <span className="live">
          <span className="dot-live" />
          Disponible desde ahora mismo.
        </span>
        <span className="tb-mid">
          <span>Madrid · 40.4°N 3.7°W</span>
          <span className="sep">/</span>
          <MadridClock />
        </span>
        <span className="tb-end">
          <a href="mailto:hitomarketingstudio@gmail.com">hitomarketingstudio@gmail.com</a>
        </span>
      </div>
    </div>
  );
}
