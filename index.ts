const DISPLAY = document.getElementById(`display`) as HTMLInputElement;

function getDisplay(input :number){
    DISPLAY.value += input;


}

function clearDisplay(){
    DISPLAY.value = "";

}

function calculator () {
    try {
        DISPLAY.value = eval(DISPLAY.value);
    }
    catch (error) {
        DISPLAY.value= " error ";
    }
}

//let extraSkill = document.createElement('input');
//`document.querrySelector("SkillDiv").appendChild(extraSkill)