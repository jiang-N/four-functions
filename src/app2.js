import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const keyIndex = localStorage.getItem('index')
$tabBar.children().eq(keyIndex).addClass('selected').siblings().removeClass('selected')
$tabContent.children().eq(keyIndex).addClass('active').siblings().removeClass('active')


$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    let index = $li.index()
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
    localStorage.setItem('index', index)
})
$tabBar.children().eq(keyIndex).trigger('click')
