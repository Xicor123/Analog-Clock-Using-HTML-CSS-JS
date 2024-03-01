setInterval(()=>{
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let hrotation=30*hour + min/2;
    let mrotation=6*min;
    let srotation=6*sec;

    let tranH=document.getElementById('hour');
    tranH.style.transform=`rotate(${hrotation}deg)`
    let tranM=document.getElementById('minute');
    tranM.style.transform=`rotate(${mrotation}deg)`;
    let tranS=document.getElementById('second');
    tranS.style.transform=`rotate(${srotation}deg)`;
}, 1000);