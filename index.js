import{a as u,i as l,s as p}from"./assets/vendor-E1y4wwGd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const y="46834340-89d4e2966326dbab6749c20a4",d="https://pixabay.com/api/";async function g(s,o=1,a=12){try{const e=await u.get(d,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}});return console.log(e.data),e.data.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),e.data.hits}catch(e){console.log("Ошибка запроса:",e.response),l.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}const m=new p(".gallеry a",{captionsData:"alt",captionDelay:250});function f(s){const o=document.querySelector(".gallery"),a=s.map(e=>`
    <div class="gallery-item">
         <ul class='ul-gallery'>
         <li class='li-gallery'>
         <a  href='${e.largeImageURL}' data-lightbox = 'gallery'>
           <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
           </a>
           <div class="info">
             <p>Likes: ${e.likes}</p>
             <p>Views: ${e.views}</p>
             <p>Comments: ${e.comments}</p>
             <p>Comments: ${e.downloads}</p>

             </div>
             </li>
           </ul>
         </div>`).join("");o.innerHTML=a,m.refresh()}const i=document.querySelector(".ul-gallery");i.style.display="flex";i.style.gap="10px";i.style.flexDirection="column";function h(){document.querySelector(".gallery").innerHTML=""}const x=document.querySelector("#search-form"),b=document.querySelector("#search-input");let c=1;const L=12;x.addEventListener("submit",async s=>{s.preventDefault();const o=b.value.trim();if(!o){l.error({title:"Error",message:"Sorry, You have not entered anything. Please check your entry.",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});return}c=1,h();try{const a=await g(o,c,L);console.log(a),f(a)}catch(a){console.log("Ошибка загрузки изображений:",a)}});
//# sourceMappingURL=index.js.map
