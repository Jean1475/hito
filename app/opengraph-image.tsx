import { ImageResponse } from "next/og";

export const alt = "Hito Studio — Producto digital desde Madrid";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E0E10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Logo mark */}
        <svg viewBox="0 0 100 100" width="72" height="72">
          <path
            d="M 52 12 L 90 58 L 70 58 L 52 36 L 34 58 L 14 58 Z"
            fill="#F4F1E9"
          />
          <path
            d="M 30 66 L 50 88 L 36 88 L 30 81 L 24 88 L 10 88 Z"
            fill="#F4F1E9"
          />
        </svg>

        {/* Bottom block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#F4F1E9",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Hito Studio
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#888880",
              letterSpacing: "0px",
            }}
          >
            Studio de producto digital en Madrid
          </div>
          {/* Cobalt accent bar */}
          <div
            style={{
              width: "56px",
              height: "4px",
              background: "#1E5FD8",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
