function calculate() {
    let rng1 = document.getElementById('customRange1'); //rng - это ползунок
    let rng2 = document.getElementById('customRange2');

    let i1 = document.getElementById('i1'); // i1 - input
    let i2 = document.getElementById('i2');

    i1.value = rng1.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    i2.value = rng2.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};

function change() {
    let selectVal = document.getElementById('credit_type').value;
    let rng1 = document.getElementById('customRange1'); //rng - это ползунок
    let rng2 = document.getElementById('customRange2');

    if(selectVal == 1) {
        rng1.setAttribute("min", 1000000);
        rng1.setAttribute("max", 45000000);
        rng2.setAttribute("max", 36);
    }
    else if(selectVal == 2) {
        rng1.setAttribute("min", 1000000);
        rng1.setAttribute("max", 50000000);
        rng2.setAttribute("max", 36);

    }
    else if(selectVal == 3) {
        rng1.setAttribute("min", 1000000);
        rng1.setAttribute("max", 245000000);
        rng2.setAttribute("max", 36);
    }
};

// Table

function run() {    
    let rgn1 = document.getElementById('customRange1');
    let rgn2 = document.getElementById('customRange2');
    let annualPersent = document.getElementById('annualPersent')
    let persentage = 833 + (1 / 3);
    let sum = rgn1.value;
    let table = document.getElementById('table');
    let tabLen = rgn2.value;
    
    // let tbody = document.getElementById('tbody');
    let tbody = document.createElement('tbody');


    let wholeSum = sum;
    let tfoot = document.createElement('tfoot');
    let overAllSum = 0;
    let mainDebt = 0;
    let overAllPercent = 0;
    let overAllMPay = 0;
    let thead = document.createElement('thead');
    
    table.innerHTML = "";


    let th = document.createElement('th');
    th.textContent = 'Oy';
    thead.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Kredit balansi';
    thead.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Asosiy qarz';
    thead.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Foiz';
    thead.appendChild(th);

    th = document.createElement('th');
    th.textContent = "Jami oylik to'lov";
    thead.appendChild(th);

    table.appendChild(thead)
    


    for (let i = 1; i <= tabLen; i++) {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = i;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = sum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        overAllSum += +sum;
        sum = sum - Math.round(wholeSum / tabLen);
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = Math.round(wholeSum / tabLen).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        mainDebt += Math.round(wholeSum / tabLen);
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = Math.round((persentage * annualPersent.value)).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        overAllPercent += Math.round((persentage * annualPersent.value));
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = Math.round((Math.round(wholeSum / tabLen) + (persentage * annualPersent.value))).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        tr.appendChild(td);
        overAllMPay += Math.round((Math.round(wholeSum / tabLen) + (persentage * annualPersent.value)));

        persentage *= 0.9;

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);


    let trfoot = document.createElement('tr');

    let tdfoot = document.createElement('td');
    tdfoot.textContent = 'JAMI';
    trfoot.appendChild(tdfoot);

    tdfoot = document.createElement('td');
    tdfoot.textContent = overAllSum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    trfoot.appendChild(tdfoot);

    tdfoot = document.createElement('td');
    tdfoot.textContent = mainDebt.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    trfoot.appendChild(tdfoot);

    tdfoot = document.createElement('td');
    tdfoot.textContent = overAllPercent.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    trfoot.appendChild(tdfoot);
    
    tdfoot = document.createElement('td');
    tdfoot.textContent = overAllMPay.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    trfoot.appendChild(tdfoot);


    tfoot.appendChild(trfoot);
    table.appendChild(tfoot);
}
function clear () {
    let tableBlock = document.getElementById('table');
    console.log(cancelButton);
    tableBlock.innerHTML = "";
}

// let creditType = document.querySelector('#credit_type');
// creditType.addEventListener("onchange", change);

// let calcType = document.querySelector('#calcType');
// calcType.addEventListener("onchange", change);

// let calcButton = document.querySelector(".calcButton");
// calcButton.addEventListener("click", run);


// let customRange1 = document.querySelector("#customRange1");
// customRange1.addEventListener("oninput", calculate);
// let customRange2 = document.querySelector("#customRange2");
// customRange2.addEventListener("oninput", calculate);


let cancelButton = document.querySelector('.cancelButton');

cancelButton.addEventListener("click", clear);