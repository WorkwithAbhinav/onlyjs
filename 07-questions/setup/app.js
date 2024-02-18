const quest = document.querySelectorAll(".question");

quest.forEach((ele)=>{
    const btn = ele.querySelector(".question-btn");

    btn.addEventListener("click" , ()=>{
        quest.forEach((questn)=>{
            if(questn !== ele){
                questn.classList.remove("show-text")
            }
        })
        ele.classList.toggle("show-text");
    })
})
