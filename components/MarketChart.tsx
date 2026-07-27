"use client";
import { useEffect, useRef } from "react";

export function MarketChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const w = rect.width, h = rect.height;
      ctx.clearRect(0,0,w,h);
      ctx.strokeStyle = "rgba(255,255,255,.055)";
      ctx.lineWidth = 1;
      for (let x=0;x<w;x+=46){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
      for (let y=0;y<h;y+=44){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
      let p = h*.58;
      const n = 42;
      const step = w/(n+1);
      for(let i=0;i<n;i++){
        const wave = Math.sin((i+frame*.02)/3)*10 + Math.sin((i+frame*.01)/7)*16;
        const open = p;
        const close = Math.max(25,Math.min(h-25,open + wave*.35 + (i%3-1)*5));
        const high = Math.min(open,close)-8-(i%5);
        const low = Math.max(open,close)+8+(i%4);
        const up = close < open;
        const x = step*(i+1);
        ctx.strokeStyle = up ? "#2fe6a6" : "#ff647c";
        ctx.fillStyle = ctx.strokeStyle;
        ctx.beginPath();ctx.moveTo(x,high);ctx.lineTo(x,low);ctx.stroke();
        ctx.fillRect(x-3,Math.min(open,close),6,Math.max(3,Math.abs(close-open)));
        p = close;
      }
      ctx.strokeStyle = "#6ae6c4";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for(let i=0;i<n;i++){
        const x=step*(i+1);
        const y=h*.61 - i*2.1 + Math.sin((i+frame*.02)/2.5)*11;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.stroke();
      frame++;
      requestAnimationFrame(draw);
    };
    const id=requestAnimationFrame(draw);
    return ()=>cancelAnimationFrame(id);
  },[]);
  return <canvas ref={ref} className="marketCanvas" aria-label="Animated market chart"/>;
}
