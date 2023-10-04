

const loadMore= document.getElementById("loadMore");
  const morePost= document.getElementById("morePost");

loadMore.addEventListener("click", function() {
            if (morePost.style.display === "none") {
                morePost.style.display = "block";
                loadMore.textContent = "Hide";
            } else {
                morePost.style.display = "none";
                loadMore.textContent = "Read More";
            }
        });  
