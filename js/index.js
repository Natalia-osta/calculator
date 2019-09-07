const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clear = document.querySelector('.calc .clear');
    const back = document.querySelector('.calc .back');

    let trigger = false;
    let deltaNumber;
    let deltaArr = [];
    let deltaOperation;
    let startData = 0;
    let res = 0;
    let x = 0;

    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        let num = display.value += ev.target.innerText;
        x = num;
        console.log(num)
        return;
        }

    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value = oper;
 let sunArr = [];
 sunArr.push(x);
 console.log(sunArr)
    }
    equal.addEventListener('click', calcOpereting );
    function calcOpereting(ev) {
    }
    clear.addEventListener('click', clearPressed );
    function clearPressed(ev) {
        display.value = " ";
    }

