import { Component, Input } from '@angular/core';
import { dataFake } from '../../data/datafake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',

})


export class ContentComponent {
  @Input()
  photoContent: string = '';
  @Input()
  titleContent: string = '';
  @Input()
  decriptionContent: string = '';
  @Input()
  idContet: string | null =  '';
  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.idContet = value.get('id'))
    console.log(this.idContet)
    this.seValuesToComponents(this.idContet)
  }

  seValuesToComponents(id: any){
    const result = dataFake[parseInt(id)]
    this.titleContent = result.title;
    this.decriptionContent = result.descrition;
    this.photoContent = result.photo;
  }
}
