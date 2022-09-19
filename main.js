nameofthestudent_array=[];
function submit(){
    var name1=document.getElementById("name_student_1").value;
    var name2=document.getElementById("name_student_2").value;
    var name3=document.getElementById("name_student_3").value;
    var name4=document.getElementById("name_student_4").value;

    nameofthestudent_array.push(name1); 
    nameofthestudent_array.push(name2); 
    nameofthestudent_array.push(name3); 
    nameofthestudent_array.push(name4); 

    console.log(nameofthestudent_array);
    document.getElementById("display_name").innerHTML= nameofthestudent_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    nameofthestudent_array.sort();
    console.log(nameofthestudent_array);
    document.getElementById("display_name").innerHTML=nameofthestudent_array;
}

