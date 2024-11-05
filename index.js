import{a as l,i,s as u}from"./assets/vendor-E1y4wwGd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const p="46834340-89d4e2966326dbab6749c20a4",d="https://pixabay.com/api/";async function y(s,o=1,a=12){try{const e=await l.get(d,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}});return console.log(e.data),e.data.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),e.data.hits}catch(e){console.log("Ошибка запроса:",e.response),i.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}const g=new u(".gallеry a",{captionsData:"alt",captionDelay:250});function m(s){const o=document.querySelector(".gallery"),a=s.map(e=>`
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
         </div>`).join("");o.innerHTML=a,g.refresh()}function f(){document.querySelector(".gallery").innerHTML=""}const h=document.querySelector("#search-form"),b=document.querySelector("#search-input");let c=1;const L=12;h.addEventListener("submit",async s=>{s.preventDefault();const o=b.value.trim();if(!o){i.error({title:"Error",message:"Sorry, You have not entered anything. Please check your entry.",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});return}c=1,f();try{const a=await y(o,c,L);console.log(a),m(a)}catch(a){console.log("Ошибка загрузки изображений:",a)}});
//# sourceMappingURL=index.js.map
