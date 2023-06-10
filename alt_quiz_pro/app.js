const start = {
          player1: 0,
          player2: 0,
          question: {},
          who: true
}

let questions = []

const $question = $(".questions")
const $a = $(".a")
const $b = $(".b")
const $c = $(".c")
const $d = $(".d")
const $player1score = $(".p1 h4")
const $player2score = $(".p2 h4")

const chooseAnswers = (event, question) => {
          if (event.target.innerText === question.answers){
                    console.log("correct")
                    if(start.who){
                              start.$player1score++
                              start.who = !start.who
                    } else {

                              start.$player2score++
                              start.who = !start.who
                    }
                    setBoard(questions)
          } else {
                    console.log("incorrect")
                    start.who = !start.who
          }
          setBoard(questions)
}

const setBoard = (question) => {
          const randomIndex = Math.floor(Math.random() * question.length)
          const randomQuestion = question[randomIndex]

          $question.text(randomQuestion.question)
          $a.text(randomQuestion.a)
          $b.text(randomQuestion.b)
          $c.text(randomQuestion.c)
          $d.text(randomQuestion.d)

          $player1score.text(start.player1)
          $player2score.text(start.player2)

          $("li").off()
          $("li").on("click", (event) => {
                    chooseAnswers(event, randomQuestion)
          })

}

const URL = "https://cdn.contentful.com/spaces/y0jf0k6w82oa/environments/master/entries?access_token=O14qp-krI67tYth3E7u0VG_kiTG12Fy50l0sOB_UvKo&content_type=triviaG"
                    $.ajax(URL)
                    .then((data) => {
                              questions = data.items.map((question) => question.fields)
                              console.log(data)
                              console.log(questions)

                              setBoard(questions)
                    })
