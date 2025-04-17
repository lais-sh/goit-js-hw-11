import{S as d,a as f,i as c}from"./assets/vendor-BH9GyP-n.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const l=document.querySelector(".gallery"),p=new d(".gallery a");function m(r){const n=r.map(e=>`<li class ="gallery-item">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
          <div class="info">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",n),p.refresh()}function y(){l.innerHTML=""}function h(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function g(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}const L="49650117-af312fdd4c8d669445c27b54b",v="https://pixabay.com/api/";async function w(r){const n={key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(v,{params:n})).data}const u=document.querySelector(".form"),a=u.querySelector('input[name="search-text"]');u.addEventListener("submit",r=>{r.preventDefault();const n=a.value.trim();n&&(y(),h(),w(n).then(e=>new Promise(s=>{setTimeout(()=>s(e),1e3)})).then(e=>{if(e.hits.length===0){c.info({message:"Нічого не знайдено"});return}m(e.hits)}).catch(e=>{c.error({message:"Помилка запиту"}),console.error(e)}).finally(()=>{g(),a.value=""}))});
//# sourceMappingURL=index.js.map
