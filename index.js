import{a as p,i as l,S as u}from"./assets/vendor-Rdv7LHNr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const d="46834340-89d4e2966326dbab6749c20a4",y="https://pixabay.com/api/";async function f(a,o=1,s=12){try{const e=await p.get(y,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return console.log(e.data),e.data.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),e.data.hits}catch(e){console.log("Ошибка запроса:",e.response),l.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}let m=new u(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0});async function g(a){const o=document.querySelector(".gallery"),s=a.map(e=>`
          <div class="gallery-item">
            <ul class='ul-gallery'>
              <li class='li-gallery'>
                <a href='${e.largeImageURL}' data-lightbox='gallery'>
                  <img class="images" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-info"><span class="info-p">Likes:</span> ${e.likes}</p>
                  <p class="info-info"><span class="info-p">Views:</span> ${e.views}</p>
                  <p class="info-info"><span class="info-p">Comments:</span> ${e.comments}</p>
                  <p class="info-info"><span class="info-p">Downloads:</span> ${e.downloads}</p>
                </div>
              </li>
            </ul>
          </div>`).join("");o.innerHTML=s,m.refresh()}function h(){document.querySelector(".gallery").innerHTML=""}const b=document.querySelector("#search-form"),x=document.querySelector("#search-input"),n=document.querySelector(".loader"),L=document.querySelector(".loaderr");let c=1;const S=12;b.addEventListener("submit",async a=>{a.preventDefault();const o=x.value.trim();if(!o){l.error({title:"Error",message:"Sorry, You have not entered anything. Please check your entry.",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});return}c=1,h(),n.style.display="flex",L.style.display="block",n.style.alignItems="center",n.style.justifyContent="center",n.style.flexDirection="column";try{const s=await f(o,c,S);console.log(s),g(s)}catch(s){console.log("Ошибка загрузки изображений:",s),l.error({title:"Error",message:"Failed to load images. Please try again later.",position:"center",maxWidth:"250px ",color:"rgb(255, 0, 0)"})}finally{n.style.display="none"}});
//# sourceMappingURL=index.js.map
