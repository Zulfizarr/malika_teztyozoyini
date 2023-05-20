window.addEventListener("load", () => {
    let start_btn = getElement(".start_btn")
    let start = getElement(".start")
    const start_text = getElement(".start_text")
    const game  =getElement(".game")
    let random_text = getElement(".random_text")
    game.classList.add("none")
    let input = document.querySelector("input")
    start_text.classList.add("none")
    let parent_sekund = getElement (".parent_sekund")
    let malika = getElement(".malika")
    let game_sekund = 30
    parent_sekund.textContent = game_sekund
    let result_text = getElement(".result_text")
    let ochko = 0
    const handleRandomText = () => {
        let word = words[parseInt(Math.random() * words.length)]
        random_text.textContent = word
        return word
    }
    const handleKey = (event) => {
        let value  = event.target.value.trim()
        if(value === random_text.textContent){
            handleRandomText()
            ochko++
            event.target.value = null
            if(input.getAttribute("class").includes("eror")){
                event.target.classList.remove("error")
            }
            }else{
               event.target.classList.add("error")
            }
        }
        const handleResult = ochko => {
          if(ochko >= 15){
            result_text.textContent = `Siz ${ochko} bal to'pladingiz yaxshi natija ofarin`
          }else{
            result_text.textContent = `Siz ${ochko} bal to'pladingiz juda kam bal oldingiz afsus`
          }
        }
        const handleGameStart = () => {
            start.classList.add("none")
            game.classList.add("block")
            let timer_sekund = setInterval(() => {
                if(game_sekund > 0){
                     game_sekund--
                     console.log(game_sekund);
                     parent_sekund.textContent= game_sekund
                }else{
                   clearInterval(timer_sekund)
                   input.readOnly = true
                   result_text.classList.add("block")
                   handleResult(ochko)
                   malika.classList.add(block)
                }
            },1000)
            malika.classList.add("none")
result_text.classList.add("none")
handleRandomText()
        }   
        input.addEventListener("keyup", handleKey)
        let start_sekund = 4
        const handleStartSek = () => {
            let timer_sekund = setInterval(() => {
                if(start_sekund){
                    start_sekund--
                    start_text.textContent = start_sekund
                }else{
                    clearInterval(timer_sekund)
                    handleGameStart()
                }
            }, 1000)      
        }
        const handleStartClick = () =>{
            start_btn.classList.add("none")
            start_text.classList.add("block")
            handleStartSek()
        }
        start_btn.addEventListener("click",handleStartClick)
        const handleLoad = () => {
        }
        malika.addEventListener("click", handleLoad)
})