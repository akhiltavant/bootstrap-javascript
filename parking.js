function print(){
    let name=document.getElementById("name")
    let vechileno=document.getElementById("vno")
    var selectElement = document.getElementById("type");
    var selectedIndex = selectElement.selectedIndex;
    var selectedValue = selectElement.options[selectedIndex].value; 
    
    

    // let time=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+ " ," + date.getHours()+":"+date.getMinutes();
    // localStorage.setItem("doe",time);
    
    var entry=document.getElementById("ent").value;
    var entrydatetime=new Date(entry);
    var entrytime=entrydatetime.getTime();
    
    
    let exit=new Date();
    var exittime=exit.getTime()
    if (entrytime<exittime){
      localStorage.setItem("name",name.value);
      localStorage.setItem("vechileno",vechileno.value);
      localStorage.setItem("vechiletype",selectedValue);
      localStorage.setItem("entry",entrytime)
      localStorage.setItem("exit",exittime)
    }
    else{
      alert("wrong input data or u missed to entry a data");
    }
    var billamount=0
    var vechile=localStorage.getItem("vechiletype");
    var parkingtime=parseInt((exittime-entrytime)/(1000 * 60 * 60));
    
    if(vechile==2){
      if (parkingtime>0 && parkingtime<=3){
          billamount+=15
      }
      else if (parkingtime>3 && parkingtime<=6){
        billamount=15 + 30*(parkingtime-3);
      }
      else if (parkingtime>6 && parkingtime<=12){
        billamount=105+75*(parkingtime-6)
      }
      else{
        billamount=555+100*(parkingtime-12)
      }
    }
    else{
      if (parkingtime>0 && parkingtime<=3){
          billamount+=25
      }
      else if (parkingtime>3 && parkingtime<=6){
        billamount=25 + 50*(parkingtime-3);
      }
      else if (parkingtime>6 && parkingtime<=12){
        billamount=175+100*(parkingtime-6)
      }
      else{
        billamount=775+150*(parkingtime-12)
      }
    }
    
    localStorage.setItem("bill",billamount)
    
    
    
  }
  function ticket(){
    var fullname=document.getElementById("fullname")
    var vechiletype=document.getElementById("vechiletype")
    var vechileno=document.getElementById("vechileno")
    var bill=document.getElementById("billamnt")
    fullname.innerHTML=localStorage.getItem("name")
    vechileno.innerHTML=localStorage.getItem("vechileno")
    vechiletype.innerHTML=localStorage.getItem("vechiletype")
    bill.innerHTML=localStorage.getItem("bill")

  }
  