import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = 'Iron Man';
  public age: number = 45;
  public metod: string = 'Tecnologia';
  
  get CapName(): string {
    return this.name.toUpperCase();
  }

  getHeroDesc(): string {
    return `${ this.name } - ${ this.age }`;
  }

  ChangeName() {
    this.name = 'Spider-Man';
  }

  ChangeAge() {
    this.age = 28;
  }

  restForm() {
    this.name = 'Iron Man';
    this.age = 45

    // document.querySelectorAll('h1')!.forEach( elemento => {
    //   elemento.innerHTML = '<h1> Desde Angular </h1>';
    // })
  }

}
