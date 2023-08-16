

// Nav selection---------------------------------------------

const navLinks = document.querySelectorAll(".nav-links")

navLinks.forEach(link => {
   link.addEventListener("click", (e) => {
   

       navLinks.forEach(otherLink => {
        otherLink.classList.remove("nav-link-active");
      });
       
      link.classList.add("nav-link-active")

      localStorage.setItem("activeNavLink", link.getAttribute("href"));
   })
})

const activeNavLink = localStorage.getItem("activeNavLink");
if (activeNavLink) {
    document.querySelector(`[href="${activeNavLink}"]`).classList.add("nav-link-active");
  }

  
  
  //intersection observer---------------------------------------------

//   const faders = document.querySelectorAll('.fade-in');

//   const appearOptions = {
//    threshold: 0, 
//    rootMargin: "0px 0px -250px 0px",
// };

//   const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) =>{
//       entries.forEach((entry) => {
//          entry.target.classList.toggle("appear", entry.isIntersecting)
//       })
//   }, appearOptions)



// faders.forEach(fader => {
    
//    appearOnScroll.observe(fader);
   
   
// });




// Valorant Esports API
async function fetchData() {
   const url = 'https://valorant-esports.p.rapidapi.com/standings/105590700081272455%252C105796322462986721%252C106027215534896262%252C107766270575498259';
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '5934dcae4emsh53f2cc4849fe19ap102d6ajsne10268c7d327',
         'X-RapidAPI-Host': 'valorant-esports.p.rapidapi.com'
      }
   };
   
   try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
   } catch (error) {
      console.error(error);
   }
}

fetchData();

