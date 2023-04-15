let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
let totalPages;
let articlePerPage;

const fetchNews = async(query,pageNo) =>{
    let a = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=9f68dd6fafb045a4b8bde5b8705208f4&pageSize=12&page=${pageNo}`);
    let r = await a.json()
    console.log(r);
    let queryText = document.getElementById("queryText");
    queryText.innerHTML = query.replace("+"," ");
    document.getElementById("totalresults").innerHTML = r.totalResults;
    totalPages = Math.ceil(r.totalResults/articlePerPage);
    if(page=1){
        document.getElementById("pre").href = `/?q=${query}&pageno=${page}`
    }else{
        document.getElementById("pre").href = `/?q=${query}&pageno=${page-1}`
    }
    
    document.getElementById("next").href = `/?q=${query}&pageno=${page+1}`

    let str=""
    for(let item of r.articles){
        let date= new Date(item.publishedAt).toDateString();
        str+=`
        <!-- Card start here -->
        <div class="col">
    <div class="card h-100">
      <img src="${item.urlToImage}" class="card-img-top" alt="Not Found">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Published : ${date}</small>
      </div>
    </div>
  </div>
          <!-- card ends here -->`
    }
    document.getElementsByClassName("content")[0].innerHTML = str;
}

fetchNews(query,page)
