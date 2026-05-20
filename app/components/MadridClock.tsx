"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Madrid",
});

export default function MadridClock() {
  const [time, setTime] = useState("— : —");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()) + " CET");
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return <span id="clock">{time}</span>;
}
