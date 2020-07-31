function dayOfWeek(){
    let date = new Date();
    let day = date.getDay();
    let dArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = dArray[day - 1];

    let whatDay = "It is " + d + " my dudes!"; 
document.getElementById("myDudes").innerText = whatDay;
document.getElementById("myDudes").textContent = whatDay;
}

dayOfWeek();