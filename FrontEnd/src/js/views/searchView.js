class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    // console.log(this._parentEl.querySelector('.search__field').value);
    const query = this._parentEl.querySelector(".search__field").value;
    // console.log("🚀 ~ file: searchView.js:7 ~ SearchView ~ getQuery ~ query", query)
    // console.log(this._parentEl.querySelector(".search__field"));
    this._clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
      
    });
    
    this._parentEl.addEventListener("input", function () {
      // console.log(e.target.value);
      handler();
      // console.log(e.target.value);
    });
  }
  
  _clearInput() {
    // this._parentEl.querySelector(".search__field").value = "";
    // do nothing
  }
}
export default new SearchView();
