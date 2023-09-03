```javascript
# blog.js
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>blog</title>
</head>
<style>
  body{
    
    font-family:  sans-serif;
    background-color: bisque;
    margin-left: 10%;
    margin-right:10%;
  }
header{
  text-align: center;
  background-color: bisque;
  color:rgb(199, 65, 65) ;
  height: 100px;
  margin: 0;
}
h1{

  font-size:40px;
  margin: 0;

}
.leftcolumn{
  float: left;
  width: 65%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.article{
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
h3,h4{
  text-align: left;
}
p{
  color: black;
}
.rightcolumn{
  float: right;
  width: 30%;
}
img{
  width: 100%;
  height: 200px;
}
.author{
  width: 50%;
  height: 80px;
}
img.right{
  height: 150px;
}
.footer{
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.301);
}
.footer-items a{
  display: inline-block;
  padding: 14px 20px ;
  text-decoration: none;
  font-size: 20px;
}
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
  h1{
    font-size:25px ;
  }
  p{
    font-size: 15px;
  }
}
.footer-items a:hover{
  background-color: rgb(184, 115, 31);
}
.logo{
  width: 50px;
  height: 50px;

}
.info{
  font-size: 18px;
}
.footer-copyright{
  font-size: 15px;
  margin-top: 50px;
  
}
button#loadMore{
  width: 100%;
  height: 50px;
  font-size: 25px;
  background-color: rgba(230, 166, 71, 0.699);
  margin-top: 20px;
  border: none;
  color: white;
}
button#loadMore:hover{
background-color: rgb(218, 113, 113);
}

.sidebar{
  
  background-color: rgb(221, 156, 76);
  overflow: auto;
  white-space: nowrap;
  
}
.sidebar a{
  display: inline-block;
  text-decoration: none;
  padding: 20px 26px;
  color: white;
  
  
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;}
 </style>
  
  <body>

    
    <div class="blog">
    <header class="head">
  <div class="title">
    <img  class="logo" src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBsYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
    <h1 class="blog-title">  Nature in mind </h1>
    <p >A log of natural events, natural history and nature-based philosophy</p>

    <div class="sidebar">
      <a href="#">Home</a>
      <a href="#">About us </a>
      <a href="#">Services</a>
      <a href="#">Workshop</a>
      <a href="#">Contact us</a>
      <a href="#">Testimonials</a>
      <a href="#">Resources</a>
    </div>
  <div class="row">
    <div class="leftcolumn">
     <div class="article">
    <h3>affection on display</h3>
     <h4>Tuesday, June 6, 2023 </h4>
     <img src="https://images.unsplash.com/photo-1685990678036-bbb4f85dc3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
   <p >Last evening, a dolphin and her calf cruised past our condo on Longboat Key.  As I watched them move along the boat channel, they circled out toward an island of mangroves in Sarasota Bay.  There they engaged in playful behavior for nearly a half hour, their dorsal fins and tails breaking the otherwise calm surface.</p>
   <p> I discussed in Choosing Money over Morality, the PGA initially took the moral high ground, criticizing those players who left for the LIV Tour and cutting them off from participation in PGA tournaments.</p>
      </div>

<div class="article">
  <h3>Proffessional Hypocracy</h3>
  <h4>Monday, June 5, 2023</h4>
  <img src="https://images.unsplash.com/photo-1685701129202-2295e7b30cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
  <p > A year after standing up for human rights and opposing cooperation with the Saudi-funded LIV Tour, the Professional Golfers Association has decided that Saudi money is just too good to turn down, a slap in the face to loyal players who defended the grand traditions of the organization. </p>
 <p>How the complexities of this appalling and reckless decision will play out remains to be seen but the PGA has lost any integrity that it once claimed to value.  Hopefully, they will lose many fans and sponsors as well; I, for one, will not support their hypocrisy.</p>
</div>

<div class="article">
  <h3>BacK in HURRICANE cOUNTRY</h3>
  <H4>Sunday, June 4, 2023</H4>
  <img src="https://images.unsplash.com/photo-1685729368148-0d512f47cf53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
  <p > Returning to Longboat Key, Florida, to check on our condo, I brought my oldest grandson with me; we arrived on the first day of the Atlantic Hurricane Season.  Nevertheless, we have enjoyed relatively pleasant (though humid) conditions except for one torrential downpour that knocked out our internet for the past two days. </p>
<p> A number of severe storms have skirted our immediate area and we have enjoyed watching them develop and dissipate.  The ingredients are certainly present for hurricanes should they form in the Gulf or arrive from the Caribbean.  The Gulf of Mexico waters are already bathtub warm.</p>
</div>
<div class="article">
  <h3> Society -the soil in which we grow</h3>
  <h4>saturday,june 3,2023</h4>
  <img src=https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29pbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"" alt="">
<p> In order for any plant to grow and flourish to its full potential, it needs the right conditions. The soil is all important. Everything grows in the soil. If the soil is good and you have the right amount of sunshine and water everything takes care of itself. Nature follows its own course. We don’t…</p>
</div>

<div class="article">
  <h3>  Nature is a teacher just seat quiet under a tree</h3>
  <h4>Friday,june 2,2023</h4>
  <img src=" https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
<p> As I sit outside under an old plane tree that I know very well, I get the sense that summer is slowly coming to a close. A feeling accompanies this realisation. A sinking, uncomfortable feeling that I know all too well. It is the same feeling that comes on Sunday evenings as another week in…</p>
</div>
<div class="article">
  <h3> Nature connection exercise -perceive and receive</h3>
  <h4> Thursday,june 1,2023</h4>
  <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 " alt="">
  <p>For this exercise find a place, any place, with some nature present (which, let’s face it, is anywhere and everywhere; the air you are breathing right now, even the body with which you perceive the world is part of ‘nature’). In this practice, we begin by honing our powers of perception. Imagine you have just…
  </p>
</div>

  <button id="loadMore" >Load more</button>
  <div id="morePost" style="display: none;">
<div class="article" >
  <h3> Society -the soil in which we grow</h3>
  <h4>saturday,june 3,2023</h4>
  <img src=https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29pbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"" alt="">
<p> In order for any plant to grow and flourish to its full potential, it needs the right conditions. The soil is all important. Everything grows in the soil. If the soil is good and you have the right amount of sunshine and water everything takes care of itself. Nature follows its own course. We don’t…</p>
</div>

<div class="article">
  <h3>  Nature is a teacher just seat quiet under a tree</h3>
  <h4>Friday,june 2,2023</h4>
  <img src=" https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
<p> As I sit outside under an old plane tree that I know very well, I get the sense that summer is slowly coming to a close. A feeling accompanies this realisation. A sinking, uncomfortable feeling that I know all too well. It is the same feeling that comes on Sunday evenings as another week in…</p>
</div>

</div>



</div>
<div class="rightcolumn">
  <div class="article">
    <h3>About author</h3>
    
    <img src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbCUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" class="author">
    <h4> Sonali haldankar</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nostrum delectus quaerat qu pariatur reiciendis eveniet eos! Ab obcaecati reiciendis totam, sed aut quo!</p>

  </div>
  <h2>Popular posts</h2>
  <div class="article">
    
    <h3>The Canopy Project</h3>
    
    <img class="right" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="">
  <p> orem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nostrum delectus quaerat quia exporem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nostrum delectus quaerat quia exp  </p>
  </div>
  <div class="article">
<h3>Sustainable Fashion</h3>
<img  class="right"src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
  <p>The fashion industry is responsible for over 8% of total greenhouse gas emissions.  Sustainable Fashion refers to a clothing supply chain that is ecologically and socially responsible.</p>
</div>
<div class="article">
  <h3> Sustainable fashion</h3>
  <img src="https://www.earthday.org/wp-content/uploads/2020/12/planting-trees.jpg" alt="" class="right">
  <p> Coordinated by a Malagasy team from the city of Antalaha, Madagascar, the Canopy Project has helped the village of Ambatobe plant 70,000 trees in 2020.</p>
</div>
</div>
</div>
  
<div class="footer">
  <div class="footer-items">
    <a href="#">About us</a>
    <a href="#">Advertise</a>
    <a href="#">Contact</a>
    <a href="#">Privacy</a>
    <a href="#">Press</a>
    <a href="#">Archives</a>
  </div>
  <div class="footer-copyright">
    <div class="footer-copyright-text">
        <p>Copyright © 2023 All rights researved | this template is made with love by <a href="#" target="_blank"></a>Naturals</p>
</div>
</div>



<script>

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


        











  
</script>
</body>
</html>
