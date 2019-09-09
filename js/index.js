    const nums = document.querySelector('.nums');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clear = document.querySelector('.calc .clear');
    const back = document.querySelector('.calc .back');
    const swicher = document.querySelector('.swicher');
    const changer = document.querySelector('.changer');

    let res = 0;
    let x = [];
    let result = 0;

    nums.addEventListener('click', numPressed);
    function numPressed(ev) {
        console.log(ev.target);
        if(ev.target.nodeName !== "BUTTON"){
            return;
        }
        x.push(display.value += ev.target.innerText);
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
    }
    back.addEventListener('click', backSpace);
    function backSpace(ev) {
        const str = display.value;
        display.value = str.substring(0, str.length - 1);
    }
    changer.addEventListener('click', changeValue);
    function changeValue(ev) {
        const str = display.value;
        if(+str > 0){
            display.value = `-${str}`;
        }
        else display.value = str.slice(1)
    }
    swicher.addEventListener('click', toogleOff);
    function toogleOff(ev) {
        display.classList.toggle("hide")
        swicher.classList.toggle("online")
        result = 0;
        display.value = " ";
    }