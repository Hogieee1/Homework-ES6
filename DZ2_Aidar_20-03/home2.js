let trafficLight = prompt('Введите цвет светофора').toLowerCase()

if (trafficLight === 'Красный') {
    alert('Стоп!')
}

else if (trafficLight === 'Желтый') {
    alert('Готовься!')
}

else if (trafficLight === 'Зеленый') {
    alert('Езжай!')
}

else {
    alert('надо ввести одну из перечисленных цветов: Красный, Желтый, Зеленый.')
}