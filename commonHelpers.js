import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as d,i as u}from"./assets/vendor-77e16229.js";const l=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]");e.disabled=!0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o.initTime=t[0].getTime(),o.initTime<=Date.now()?u.show({message:"Please choose a date in the future"}):e.disabled=!1}};d(l,m);const o={initTime:0,start(){const t=setInterval(()=>{const n=this.initTime-Date.now(),s=f(n);g(s),n<1e3&&clearInterval(t)},1e3)}};e.addEventListener("click",h);function h(){o.start(),e.disabled=!0}function f(t){const r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:i,seconds:c}}const y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");function g(t){y.textContent=t.days.toString().padStart(2,0),S.textContent=t.hours.toString().padStart(2,0),p.textContent=t.minutes.toString().padStart(2,0),T.textContent=t.seconds.toString().padStart(2,0)}
//# sourceMappingURL=commonHelpers.js.map
