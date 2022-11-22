let evaluation = prompt("пожалуйста оцените наш сервис")

if (evaluation < 1) {
    alert("оценка должна быть от 1 до 10")
}

else if (evaluation > 10) {
    alert("оценка должна быть от 1 до 10")
}

else if (evaluation > 1, evaluation <= 5) {
    alert("мы работаем над улучшением нашего сервиса")
}

else if (evaluation > 5, evaluation <= 10) {
    alert("спасибо за высокую оценку")
}

else {
    alert("оценка должна быть от 1 до 10 !!!")
}
