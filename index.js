import{a}from"./assets/vendor-C8zN0aMh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="ВАШ_API_KEY",u="https://pixabay.com/api/";async function p(s,o=1,n=12){try{return(await a.get(u,{params:{key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}catch(t){throw console.log("Ошибка запроса:",t),t}}function f(s){const o=document.querySelector(".gallery"),n=s.map(t=>`
          <div class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
            <div class="info">
              <p>Likes: ${t.likes}</p>
              <p>Views: ${t.views}</p>
              <p>Comments: ${t.comments}</p>
            </div>
          </div>`).join("");o.innerHTML=n}function d(){document.querySelector(".gallery").innerHTML=""}const m=document.querySelector("#search-form"),y=document.querySelector("#search-input");let i=1;const g=12;m.addEventListener("submit",async s=>{s.preventDefault();const o=y.value.trim();if(o){i=1,d();try{const n=await p(o,i,g);f(n.hits)}catch(n){console.log("Ошибка загрузки изображений:",n)}}});
//# sourceMappingURL=index.js.map
