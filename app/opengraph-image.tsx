import { ImageResponse } from "next/og";
export const alt = "Priynka Roy - Statistics, Data Science and Machine Learning Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#11243A", color: "#FFFFFF", display: "flex", flexDirection: "column", padding: "74px 84px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", color: "#83D7D2", fontSize: 24, letterSpacing: 3 }}>STATISTICS / DATA SCIENCE / MACHINE LEARNING</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 88, fontWeight: 700 }}>Priynka Roy</div><div style={{ fontSize: 38, marginTop: 22 }}>Turning data into meaningful insights.</div></div>
      <div style={{ display: "flex", fontSize: 25, color: "#C7D6E3" }}>Statistical modeling · Data analytics · Practical applications</div>
    </div>, size
  );
}
