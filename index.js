import{a as c,i as l}from"./assets/vendor-DlDx-2bX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="46834340-89d4e2966326dbab6749c20a4",d="http://pixabay.com/api/";async function f(s,o=1,n=12){try{return(await c.get(d,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,pre_Page:n}})).data}catch(t){console.log("Ошибка запроса",t),l.error({title:"Помилка",message:'"Sorry, there are no images matching your search query. Please try again!"'})}}function p(s){const o=document.querySelector(".gallery"),n=s.map(t=>`
          <div class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
            <div class="info">
              <p>Likes: ${t.likes}</p>
              <p>Views: ${t.views}</p>
              <p>Comments: ${t.comments}</p>
            </div>
          </div>`).join("");o.innerHTML=n}function m(){document.querySelector(".gallery").innerHTML=""}const y=document.querySelector("#search-form"),g=document.querySelector("#search-input");let i=1;const h=12;y.addEventListener("submit",async s=>{s.preventDefault();const o=g.value.trim();if(o){i=1,m();try{const n=await f(o,i,h);p(n.hits)}catch(n){console.log("Ошибка загрузки изображений:",n)}}});
//# sourceMappingURL=index.js.map
