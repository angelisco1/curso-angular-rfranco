import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo: string = 'Lorem Ipsum';

  imgUrl: string = 'https://www.theblocklearning.com/wp-content/uploads/2018/09/angularjs-logo.png';
  descripcion: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi, cumque laborum blanditiis culpa commodi ad sint voluptate tenetur est voluptas, necessitatibus laboriosam deserunt error. A perferendis sed velit nostrum.'

  @Output() nombreChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  cambiarTitulo(event) {
    // this.titulo = event.target.value;
    this.nombreChanged.emit(event.target.value);
  }

}
