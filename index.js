import{a as l,i}from"./assets/vendor-DlDx-2bX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="46834340-89d4e2966326dbab6749c20a4",d="http://pixabay.com/api/";document.querySelector(".form");async function p(n,o=1,s=12){try{const r=await l.get(d,{params:{key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,pre_page:s}});return r.data.hits.length===0&&i.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),r.data.hits}catch(r){console.log("Ошибка запроса:",r),i.error({title:"Помилка",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}render-functions.js;function m(n){const o=document.querySelector(".gallery"),s=n.map(r=>`
          <div class="gallery-item">
          <ul class='ul-gallery'>
          <li class='li-gallery'>
          <a>
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            </a>
            <div class="info">
              <p>Likes: ${r.likes}</p>
              <p>Views: ${r.views}</p>
              <p>Comments: ${r.comments}</p>
              </div>
              </li>
            </ul>
          </div>`).join("");o.innerHTML=s}function f(){document.querySelector(".gallery").innerHTML=""}const y=document.querySelector("#search-form"),g=document.querySelector("#search-input");let c=1;const h=12;y.addEventListener("submit",async n=>{n.preventDefault();const o=g.value.trim();if(o){c=1,f();try{const s=await p(o,c,h);m(s.hits)}catch(s){console.log("Ошибка загрузки изображений:",s)}}});
//# sourceMappingURL=index.js.map
