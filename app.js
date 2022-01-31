const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const correctAnswers = ['A', 'B', 'B', 'A']



form.addEventListener('submit', event=>{


    const correctAnswersCondition = (userAnswer, index) =>{
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    }

    event.preventDefault()
    let score = 0
    const userAnswers = [
        form.inputAnswer1.value,
        form.inputAnswer2.value,
        form.inputAnswer3.value,
        form.inputAnswer4.value,
    ]

    const p = document.createElement('p')


    userAnswers.forEach(correctAnswersCondition)

    const higherThanAverageScore = score >= 50

    if (higherThanAverageScore) {
        p.style.color = 'White'
        p.textContent = `Minhas congratulações! Vossa nota final é de ${score} :>`
        event.target.insertAdjacentElement('afterend', p)
    } else{
        p.style.color = 'White'
        p.textContent = `Valeu a tentativa! Vossa nota final é de ${score}. Se for de vossa vontade, pode tentar novamente.`
        event.target.insertAdjacentElement('afterend', p)
    }
})




