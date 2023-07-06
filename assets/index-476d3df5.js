(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=async(o,s)=>{const r=await(await fetch(o)).json();return s(r)},a=document.querySelector(".summary-lists"),l=["0, 100%, 67%","39, 100%, 56%","166, 100%, 37%","234, 85%, 45%"],d=async()=>{await c("./data.json",o=>{o.forEach(({category:s,score:n,icon:r},e)=>{const t=`
        <li style="--clr-accent: ${l[e]};" class="summary-lists-item">
          <div class="item-title">
            <img class="item-icon" src="${r}" alt="${s.toLowerCase()} icon" />

            ${s}
          </div>

          <div class="item-scores">
            <span>${n}</span>
            <span>/</span>
            <span>100</span>
          </div>
        </li>
      `;a.insertAdjacentHTML("beforeend",t)})})};d();
