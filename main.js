
const characterDesign = {
  male : {
      mage : "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
      warrior : "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
      hero : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
      },
  female : {
      mage : "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png",
      warrior : "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
      hero : "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
  }
}


const jobStatus  = {
  mage : {
      strength : 7,
      agility : 8,
      resilience : 7,
      wisdom : 10,
      luck : 9,
  },
  warrior : {
      strength : 10,
      agility : 8,
      resilience : 9,
      wisdom : 7,
      luck : 7,
  },
  hero : {
      strength : 8,
      agility : 10,
      resilience : 8,
      wisdom : 8,
      luck : 8,
  }
}




class Character {
  constructor(name, job, gender, traits, status){
      this.name = name;
      this.job = job;
      this.gender = gender;
      this.traits = traits;
      this.status = status;
  }

  selectDesign(){
      if(this.gender == "Male"){
          switch(this.job){
              case "Hero" :
                  return characterDesign.male.hero;
                  break;
              case "Mage":
                  return characterDesign.male.mage;
                  break;
              case "Warrior" :
                  return characterDesign.male.warrior;
                  break;
          }
      }
      if(this.gender == "Female"){
          switch(this.job){
              case "Hero" :
                  return characterDesign.female.hero;
                  break;
              case "Mage":
                  return characterDesign.female.mage;
                  break;
              case "Warrior" :
                  return characterDesign.female.warrior;
                  break;
          }
      }
  }

  decisionJobStatus(){
      if(this.job === "Hero"){
          this.status = jobStatus.hero;
      }
      if(this.job === "Mage"){
          this.status = jobStatus.mage;
      }
      if(this.job === "Warrior"){
          this.status = jobStatus.warrior;
      }
  }
}


var vm = new Vue({
  el: "#app",
  data:{
      name: "Unknown",
      job: "Hero",
      gender: "Male",
      traits: "Everyman",
      character: "",
      status : {
      strength : 8,
      agility : 10,
      resilience : 8,
      wisdom : 8,
      luck : 8,
  }
  },
  computed : {
      selectDesign: function(){
          this.character = new Character(this.name, this.job, this.gender, this.traits, this.status);
          this.character.decisionJobStatus();
          this.status = this.character.status;       
          return this.character.selectDesign();
      },
      getStrength: function(){
          if(this.job === "Hero" && this.traits === "Brave"){
              return Math.floor(this.status.strength * 1.2);
          }
          if(this.gender === "Female" && this.traits === "Tomboy"){
              return Math.floor(this.status.strength * 1.2);
          }
          else return this.status.strength;
          
      },
      getAgility: function(){
          if(this.traits === "Bat out of hell"){
              return Math.floor(this.status.agility * 1.4);
          }
          if(this.job === "Hero" && this.traits === "Barave"){
              return Math.floor(this.status.agility * 1.1);
          }
          if(this.gender === "Female" && this.traits === "Tomboy"){
              return Math.floor(this.status.agility * 1.1);
          }
          else return this.status.agility;
      },
      getLuck: function(){

          if(this.gender === "Male" && this.traits === "Lucky devil"){
              return Math.floor(this.status.luck * 1.5);
          }
          if(this.job === "Hero" && this.traits === "Brave"){
              return Math.floor(this.status.luck * 1.2); 
          }
          else return this.status.luck;
      },
  }

})