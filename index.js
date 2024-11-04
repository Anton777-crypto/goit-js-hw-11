import{a as l,i as u}from"./assets/vendor-DlDx-2bX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="46834340-89d4e2966326dbab6749c20a4",d="https://pixabay.com/api/";async function m(a,o=1,s=12){try{const r=await l.get(d,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return console.log(r.data),r.data.hits}catch(r){console.log("Ошибка запроса:",r.response),u.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}function f(a){const o=document.querySelector(".gallery"),s=a.map(r=>`
    <div class="gallery-item">
         <ul class='ul-gallery'>
         <li class='li-gallery'>
         <a  href='goit.com'>
           <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p>Likes: ${r.likes}</p>
             <p>Views: ${r.views}</p>
             <p>Comments: ${r.comments}</p>
             </div>
             </li>
           </ul>
         </div>`).join("");o.innerHTML=s}function g(){document.querySelector(".gallery").innerHTML=""}const y=document.querySelector("#search-form"),i=document.querySelector("#search-input");let c=1;const h=12;y.addEventListener("submit",async a=>{a.preventDefault();const o=i.value.trim();if(o){c=1,g(),i.target.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});try{const s=await m(o,c,h);console.log(s),f(s)}catch(s){console.log("Ошибка загрузки изображений:",s)}}});
//# sourceMappingURL=index.js.map
