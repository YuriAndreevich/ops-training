import React from 'react'
import './App.css'


function instr() {
  return (
    <div><h1 style={{marginBottom:'10px'}}>Инструкция по запуску тренажёра</h1>
    Используя ссылку: https://ops-training.sava.site/ открываем тренажер. 

    <p style={{marginBottom:'10px'}}>Первый уровень сложности: По уже имеющейся системе сигнализации и электроснабжения разместить технические средства пожарной сигнализации : пожарные извещатели различных видов, приемо-контрольные приборы (ПКП), звуковые и световые извещатели. 
После клика на клавишу ПРОВЕРКА в случае допущенных ошибок прозвучит звуковой сигнал и неправильное выполнение задания подсветится красным цветом. </p>
<p style={{marginBottom:'10px'}}>Второй уровень сложности: Установить оконечные резисторы в шлейфы. </p>
<p style={{marginBottom:'10px'}}>Третий  уровень сложности: По установленным техническим средствам выполнить линии связи. </p>
<p style={{marginBottom:'10px'}}>Четвертый  уровень сложности: Выполнить разработку системы пожарной сигнализации для данного помещения, используя предложенные технические средства. </p>
<p style={{marginBottom:'10px'}}>	Пятый  уровень сложности: Выполнить разработку системы пожарной сигнализации для данного помещения, используя предложенные технические средства и подключить к ПКП.</p>


    </div>
  )
}

export default instr