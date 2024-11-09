import{a as c,i,S as p}from"./assets/vendor-Rdv7LHNr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="46834340-89d4e2966326dbab6749c20a4",d="https://pixabay.com/api/";async function f(a,r=1,o=12){try{const s=await c.get(d,{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}});return console.log(s.data),s.data.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"}),s.data.hits}catch(s){console.log("Ошибка запроса:",s.response),i.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!1",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"})}}let y=new p(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0});async function g(a){const r=document.querySelector(".loader"),o=document.querySelector(".gallery");r.style.display="block";try{const s=a.map(e=>`
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
          </div>`).join("");o.innerHTML=s,y.refresh()}finally{r.style.display="none"}}function m(){document.querySelector(".gallery").innerHTML=""}const h=document.querySelector("#search-form"),b=document.querySelector("#search-input");let l=1;const L=12;h.addEventListener("submit",async a=>{a.preventDefault();const r=b.value.trim();if(!r){i.error({title:"Error",message:"Sorry, You have not entered anything. Please check your entry.",position:"center",maxWidth:"250px ",color:"rgb(255, 162, 0)"});return}l=1,m();try{const o=await f(r,l,L);console.log(o),g(o)}catch(o){console.log("Ошибка загрузки изображений:",o)}});
//# sourceMappingURL=index.js.map
