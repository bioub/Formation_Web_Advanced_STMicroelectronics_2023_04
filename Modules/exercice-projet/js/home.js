/** @param {HTMLElement} mainEl */
export function home(mainEl) {
  const template = `
<a href="https://www.st.com/" class="btn-link">ST.com</a>
<a href="search.html" class="btn-link">Search Products</a>
<div>
  Il est 
</div>
`;

  mainEl.innerHTML = template;
}
