import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const keyN = localStorage.getItem('n')
$number.text(keyN || 100)

$button1.on('click', () => {
    let n = parseFloat($number.text())
    n += 1
    localStorage.setItem('n', `${n}`)
    $number.text(n)
})
$button2.on('click', () => {
    let n = parseFloat($number.text())
    n -= 1
    localStorage.setItem('n', `${n}`)
    $number.text(n)
})
$button3.on('click', () => {
    let n = parseFloat($number.text())
    n *= 2
    localStorage.setItem('n', `${n}`)
    $number.text(n)
})
$button4.on('click', () => {
    let n = parseFloat($number.text())
    n /= 2
    localStorage.setItem('n', `${n}`)
    $number.text(n)
})