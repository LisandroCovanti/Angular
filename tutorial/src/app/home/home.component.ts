import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit,AfterViewInit{
  
  username: string = "variabile component Home";
  
  @Input() user: String;

  today: Date;
  money: number;
  show: boolean = false;

  @ViewChild('about', {static : false}) aboutElement : ElementRef; //nome cercato tra html: 'about' ; nome attributo: aboutElement; tipo attributo: ElementRef

  form: FormGroup;

  constructor(public fb: FormBuilder) //parametro fb creato in corrispondenza di FormGroups
   {
    this.today = new Date();

    let money1 = 23;
    let money2 = 34;

    this.money = this.sum(money1,money2);

    //elenco dei validatori di default -- notare che sono dentro al costruttore
    this.form = fb.group(
      {
        "user":   ['default',Validators.required],
        "email":  ['',Validators.required],
        "date":   ['',Validators.required]
      }
    )
    console.log("costruttore");
  }

  ngOnInit(): void{
    console.log("Init")
  }

  sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  
  showHidden(): void {
    this.show = !this.show;
  }

  printElement(): void{
    console.log(this.aboutElement.nativeElement);
  }

  hello(field: HTMLSelectElement) {
    if(field.value == "1") {
      alert("Ciao!")
    }
    else{
      console.log("Ciao");
    }
  }
  
  //implementazione interfaccia AfterViewInit
  ngAfterViewInit(): void {
    document.getElementById("button").style.backgroundColor = "red";
  }
  
  //changing dynamically Css
  color: string = "black";

  changeCss(field: HTMLSelectElement) {
    if(field.value == "0"){
      this.color = "black";
    }
    if(field.value == "1"){
      this.color = "red";
    }
    else if(field.value == "2"){
      this.color = "green";
    }
    else if(field.value == "3"){
      this.color = "blue";
    }
  }

  sizeText: string;
  changeTextCss(field: HTMLSelectElement) {
    if(field.value == "0"){
      this.sizeText = null;
    }
    if(field.value == "1"){
      this.sizeText = "big";
    }
    else if(field.value == "2"){
      this.sizeText = "small";
    }
  }
  
  //non-reactive Forms - (formControl --> associazione per singolo campo)
  selectField: FormControl = new FormControl("2"); //valore di default

  nrForm() {
    if(this.selectField.value == "0"){
      this.sizeText = null;
    }
    if(this.selectField.value == "1"){
      this.sizeText = "big";
    }
    else if(this.selectField.value == "2"){
      this.sizeText = "small";
    }
  }

  send(): void {
    if(!this.form.valid) //ritorna booleano
    {
      alert("compilare tutti i campi obbligatori");
      return;
    }
    else{
      console.log(
        this.form.controls['user'].value,
        this.form.controls['email'].value,
        this.form.controls['date'].value
      );
    }
  }

  checkUser(): void {
      let user = this.form.controls['user'].value
      if(user.length < 8){
        console.log("username minimo 8 caratteri");
        this.form.controls['user'].setErrors({ incorrect: true});
      }
      else{
        this.form.controls['user'].setErrors(null);
      }
  }
}
