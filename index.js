import{a}from"./assets/vendor-C8zN0aMh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l="ВАШ_API_KEY",u="https://pixabay.com/api/";async function p(s,o=1,n=12){try{return(await a.get(u,{params:{key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}catch(r){throw console.error("Ошибка запроса:",r),r}}function f(s){const o=document.querySelector(".gallery"),n=s.map(r=>`
          <div class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            <div class="info">
              <p>Likes: ${r.likes}</p>
              <p>Views: ${r.views}</p>
              <p>Comments: ${r.comments}</p>
            </div>
          </div>`).join("");o.innerHTML=n}function d(){document.querySelector(".gallery").innerHTML=""}const m=document.querySelector("#search-form"),y=document.querySelector("#search-input");let i=1;const g=12;m.addEventListener("submit",async s=>{s.preventDefault();const o=y.value.trim();if(o){i=1,d();try{const n=await p(o,i,g);f(n.hits)}catch(n){console.error("Ошибка загрузки изображений:",n)}}});
//# sourceMappingURL=index.js.map
