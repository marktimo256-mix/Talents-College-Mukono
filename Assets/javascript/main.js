// Name Change Animation
const logoName = document.querySelector(".logo-name");
const firstName = "Talents College Mukono<span>Power Of Knowledge</span>";
const secondName = "TASCOM International";
setInterval(()=>{
    logoName.classList.add("fade-out");
    setTimeout(()=>{
        if(logoName.innerHTML.trim() === firstName.trim())
            logoName.innerHTML = secondName;
        else
            logoName.innerHTML = firstName;
        logoName.classList.remove("fade-out");
    }, 500);
}, 5000);

