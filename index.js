import{a as c,i as l}from"./assets/vendor-DlDx-2bX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="46834340-89d4e2966326dbab6749c20a4",d="http://pixabay.com/api/";async function p(n,t=1,s=12){try{return(await c.get(d,{params:{key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,pre_Page:s}})).data}catch{l.error({title:"Помилка",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}function f(n){const t=document.querySelector(".gallery"),s=n.map(o=>`
          <div class="gallery-item">
            <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
            <div class="info">
              <p>Likes: ${o.likes}</p>
              <p>Views: ${o.views}</p>
              <p>Comments: ${o.comments}</p>
            </div>
          </div>`).join("");t.innerHTML=s}function m(){document.querySelector(".gallery").innerHTML=""}const y=document.querySelector("#search-form"),g=document.querySelector("#search-input");let a=1;const h=12;y.addEventListener("submit",async n=>{n.preventDefault();const t=g.value.trim();if(t){a=1,m();try{const s=await p(t,a,h);f(s.hits)}catch(s){console.log("Ошибка загрузки изображений:",s)}}});
//# sourceMappingURL=index.js.map
