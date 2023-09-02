const handleCategory = async() =>{
 
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    // console.log(data.data);
    
    const tabcontainer= document.getElementById("buttons");
    data.data.forEach((category) => {
      
        const div = document.createElement("div");
        div.innerHTML =`
        <a class="bg-neutral-300" onclick="handleLoadNews('${category.category_id}')">${category.category?category.category:'no nk k find'}</a>
        `
       tabcontainer.appendChild(div);
         
    });
    
    // console.log(data.data);
};
const handleLoadNews = async (categoryId) => {
    console.log(categoryId);
    const response = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}
    `)
    const data= await response.json();
     const cardContainer= document.getElementById("card-container");

     cardContainer.innerHTML = "";

     data.data.forEach((news) =>{
        console.log(news);
        const div= document.createElement('div');
        div.innerHTML =`
      <div class="card w-72 h-64   shadow-xl">
        <img class="h-36 w-80" src=${news?.thumbnail}>      
        <div class="card-body -mt-4">      
            <div class="flex gap-4 ">
              <div class=" ">
               <img class="mt-3 h-8 w-8 rounded  " src= ${news.authors[0].profile_picture
               }>
              </div>
              <div>        
              <small>${news?.title}</small><br/>
              <small>${news?.authors[0]?.profile_name}</small>
              <small>${news?.authors[0]?.verified?news?.authors[0]?.verified:""}</small><br/> 
              <small>${news?.others?.views} views </small>        
              </div>
            </div>     
        </div>
     </div>
        
        `
        cardContainer.appendChild(div);
     });
};
handleCategory();
handleLoadNews("1000");
