var arr = [5, 7, 3, 1, 2, 4, 6];
let parentDiv = document.getElementsByClassName('parentDiv');
let btn1 = document.getElementById('bubble');
let btn2 = document.getElementById('insertion');
let btn3 = document.getElementById('selection');
let i = 0;
function creationDiv(){
    parentDiv[0].innerHTML='';
    let codeDiv=document.createElement('div');
    codeDiv.setAttribute('id','codeDiv');
    // parentDiv[0].appendChild(codeDiv);
     arr.forEach((e, index) => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = (e * 60 + 'px');
    innerDiv.innerHTML = e;
    innerDiv.style.backgroundColor = '#F9E79F';
    innerDiv.setAttribute('id', 'elem' + index);
    innerDiv.style.border= '2px solid black';
    innerDiv.classList.add("innerDiv");
    innerDiv.style.transform='translateX(50px)';
    parentDiv[0].appendChild(innerDiv);
});
let infoDiv=document.createElement('div');
infoDiv.setAttribute('id','infoDiv');
parentDiv[0].appendChild(infoDiv);
}
creationDiv();
btn1.addEventListener("click",() => myFunctionBubble(arr));
btn2.addEventListener("click",() => myFunctionInsertion(arr));
btn3.addEventListener("click",() => myFunctionSelection(arr));

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function myFunctionBubble(arr) {
    let codeDiv = document.getElementById('codeDiv');
    let bubbleSortCode = `
    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }`;
    // codeDiv.innerHTML = `<pre><code>${escapeHTML(bubbleSortCode)}</code></pre>`;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                await sleep(1000);
                document.getElementById('infoDiv').innerHTML="Swapped "+arr[j]+" "+arr[j+1];
                swapNumber(arr, j, j + 1);
                swapColorHeight(j, j + 1);
                await sleep(1000);
                resetColor(j, j + 1);
            }
        }
    }
}
function escapeHTML(html) {
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
async function myFunctionInsertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            await sleep(1000);
            document.getElementById('infoDiv').innerHTML="Swapped "+arr[j]+" "+arr[j-1];
            swapNumber(arr, j, j - 1);
            swapColorHeight(j, j - 1);
            await sleep(1000);
            resetColor(j, j - 1);
            j--;
        }
    }
}

async function myFunctionSelection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                index = j;
                min = arr[j];
            }
        }
        if (index !== i) {
            await sleep(1000);
            document.getElementById('infoDiv').innerHTML="Swapped "+arr[i]+" "+arr[index];
            swapNumber(arr, i, index);
            swapColorHeight(i, index);
            await sleep(1000);
            resetColor(i, index);
        }
    }
}

function swapNumber(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    let a = document.getElementById('elem' + i);
    let b = document.getElementById('elem' + j);
//     let tempTransform = a.style.transform;
// a.style.transform = b.style.transform;
// b.style.transform = tempTransform;

}

function resetColor(i, j) {
    let a = 'elem' + i;
    let b = 'elem' + j;
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    e1.style.backgroundColor = ' #F9E79F';
    e2.style.backgroundColor = ' #F9E79F';
    e1.style.scale=1;
    e2.style.scale=1;
}

function swapColorHeight(i, j) {
    let a = 'elem' + i;
    let b = 'elem' + j;
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    e1.style.scale=1.05;
    e2.style.scale=1.05;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = '#CA44D5';
    e2.style.backgroundColor = '#CA44D5';
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
    let temp = e1.textContent;
    e1.textContent = e2.textContent;
    e2.textContent = temp;
}
function resetArray()
{
     arr = [5, 7, 3, 1, 2, 4, 6];
     creationDiv();
}
document.getElementById('resetButton').addEventListener('click',resetArray);

