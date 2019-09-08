const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clear = document.querySelector('.calc .clear');
    const back = document.querySelector('.calc .back');


    let res = 0;
    let x = [];
    let result = 0;

    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        x.push(display.value += ev.target.innerText);
        console.log(x)
        return;
        }

    equal.addEventListener('click', calcOpereting );
    function calcOpereting(ev) {
       res = x.pop();
       result = eval(res);
       display.value = result;
    }
    clear.addEventListener('click', clearPressed );
    function clearPressed(ev) {
        result = 0;
        display.value = " ";
    console.log(result)
    }

