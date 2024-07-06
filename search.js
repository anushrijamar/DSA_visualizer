var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var parentDiv = document.getElementsByClassName("parent");
var btn1 = document.getElementById("BinarySearch");
var btn2 = document.getElementById("LinearSearch");

function creationDiv() {
  // parentDiv[0].innerHTML = "";
  arr.forEach((e, index) => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = 50 + 'px';
    innerDiv.style.width = 50 + 'px';
    innerDiv.innerHTML = e;
    innerDiv.style.backgroundColor = '#F9E79F';
    innerDiv.setAttribute('id', 'elem' + index);
    innerDiv.style.border = '2px solid black';
    innerDiv.classList.add('innerDiv');
    innerDiv.style.alignItems = 'center';
    innerDiv.style.display = 'flex';
    innerDiv.style.justifyContent = 'center';
    parentDiv[0].appendChild(innerDiv);
    parentDiv[0].style.alignItems = 'center';
    parentDiv[0].style.justifyContent='center';
  });
  let found=document.createElement('div');
  found.setAttribute('id','found');
  parentDiv[0].appendChild(found);
}

const sleep=(time)=>
  {
    return new Promise(resolve=>setTimeout(resolve,time
    ))
  }
creationDiv();
btn1.addEventListener('click', functionBinary);
btn2.addEventListener('click', functionLinear);
async function functionBinary() {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid=Math.floor (low+(high-low)/2);
    target=document.getElementById('t').value;
    let a = 'elem' + mid;
    let temp = document.getElementById(a);
    temp.style.scale=1.15;
    temp.style.backgroundColor='red';
    await sleep(1000);
    changeC(arr,mid);
    if(arr[mid]==target)
        {
            document.getElementById('found').innerHTML="Found";
            document.getElementById('found').style.fontWeight='bold';
            document.getElementById('found').style.marginLeft='20px';
            document.getElementById('elem'+mid).style.scale=1.15;
            document.getElementById('elem'+mid).style.backgroundColor='#15D21D';
            await sleep(3000);
            reset(mid);
            break;
        }
        if(arr[mid]>target)
          {
            high=mid-1;
          }
          else
          {
            low=mid+1;
          }
  }
}
var target,m;
function changeC(arr,i)
{
     var temp=document.getElementById('elem'+i);
     temp.style.scale=1;
     temp.style.backgroundColor='#F9E79F';
}
async function functionLinear()
{
   for(let i=0;i<arr.length;i++)
    {
        var temp=document.getElementById('elem'+i);
        temp.style.scale=1.15;
        temp.style.backgroundColor='red';
        await sleep(1000);
        changeC(arr,i);
        target=document.getElementById('t').value;
        if(arr[i]==target)
          {
            temp.style.backgroundColor='#15D21D';
            temp.style.scale=1.15;
            document.getElementById('found').innerHTML="Found";
            document.getElementById('found').style.fontWeight='bold';
            document.getElementById('found').style.marginLeft='20px';
            await sleep(3000);
            reset(i);
            break;
          }
    }
}
function reset(i)
{
  var temp=document.getElementById('elem'+i);
  temp.style.backgroundColor = '#F9E79F';
  temp.style.scale=1;
  document.getElementById('found').innerHTML="";
}