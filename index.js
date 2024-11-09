import{a as c,i,S as p}from"./assets/vendor-Rdv7LHNr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const u="46834340-89d4e2966326dbab6749c20a4",f="https://pixabay.com/api/";async function d(a,o=1,s=12){try{const e=await c.get(f,{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return console.log(e.data),e.data.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),e.data.hits}catch(e){console.log("Ошибка запроса:",e.response),i.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}let m=new p(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0});function g(a){const o=document.querySelector(".gallery"),s=a.map(e=>`
    <div class="gallery-item">
         <ul class='ul-gallery'>
         <li class='li-gallery'>
         <a  href='${e.largeImageURL}' data-lightbox = 'gallery'>
           <img class="images" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p class="info-info"><span class="info-p">Likes:</span>  ${e.likes}</p>
             <p class="info-info"><span class="info-p">Views:</span> ${e.views}</p>
             <p class="info-info"><span class="info-p">Comments:</span> ${e.comments}</p>
             <p class="info-info"><span class="info-p">Comments:</span> ${e.downloads}</p>

             </div>
             </li>
           </ul>
         </div>`).join("");o.innerHTML=s,m.refresh()}function y(){document.querySelector(".gallery").innerHTML=""}const h=document.querySelector("#search-form"),b=document.querySelector("#search-input");let l=1;const L=12;h.addEventListener("submit",async a=>{a.preventDefault();const o=b.value.trim();if(!o){i.error({title:"Error",message:"Sorry, You have not entered anything. Please check your entry.",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});return}l=1,y();try{const s=await d(o,l,L);console.log(s),g(s)}catch(s){console.log("Ошибка загрузки изображений:",s)}});
//# sourceMappingURL=index.js.map
