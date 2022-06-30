import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-six-eight-six',
  templateUrl: './section-six-eight-six.component.html',
  styleUrls: ['./section-six-eight-six.component.css']
})
export class SectionSixEightSixComponent  {
  loadedFeature = 'recipes';
  title = 'Projectesction-three';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
