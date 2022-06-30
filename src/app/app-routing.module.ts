import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionTwoFortyOneComponent } from './section-two/components/section-two-forty-one/section-two-forty-one.component';
import { SectionTwoFortyTwoComponent } from './section-two/components/section-two-forty-two/section-two-forty-two.component';
import { SectionTwoFortyThreeComponent } from './section-two/components/section-two-forty-three/section-two-forty-three.component';
import { SectionTwoFortyFourComponent } from './section-two/components/section-two-forty-four/section-two-forty-four.component';
import { SectionFourSixtyTwoComponent } from './section-four/components/section-four-sixty-two/section-four-sixty-two.component';
import { SectionFourSixtyThreeComponent } from './section-four/components/section-four-sixty-three/section-four-sixty-three.component';
import { SectionFiveSixtyFiveComponent } from './section-five/components/section-five-sixty-five/section-five-sixty-five.component';
import { SectionFiveEightyFourComponent } from './section-five/components/section-five-eighty-four/section-five-eighty-four.component';
import { SectionSixEightSixComponent } from './section-six/components/section-six-eight-six/section-six-eight-six.component';
import { SectionSevenNinetyTwoComponent } from './section-seven/components/section-seven-ninety-two/section-seven-ninety-two.component';
import { SectionSevenNinetyThreeComponent } from './section-seven/components/section-seven-ninety-three/section-seven-ninety-three.component';
import { SectionSevenNinetyFourComponent } from './section-seven/components/section-seven-ninety-four/section-seven-ninety-four.component';
import { SectionSevenNinetyFiveComponent } from './section-seven/components/section-seven-ninety-five/section-seven-ninety-five.component';
import { SectionSevenNinetySevenComponent } from './section-seven/components/section-seven-ninety-seven/section-seven-ninety-seven.component';
import { SectionSevenNinetyEightComponent } from './section-seven/components/section-seven-ninety-eight/section-seven-ninety-eight.component';
import { SectionSevenNinetyNineComponent } from './section-seven/components/section-seven-ninety-nine/section-seven-ninety-nine.component';
import { SectionSevenOnehundredComponent } from './section-seven/components/section-seven-onehundred/section-seven-onehundred.component';
import { SectionSevenOnehundredOneComponent } from './section-seven/components/section-seven-onehundred-one/section-seven-onehundred-one.component';
import { SectionSevenOnehundredTwoComponent } from './section-seven/components/section-seven-onehundred-two/section-seven-onehundred-two.component';
import { HomeworkjavascriptComponent } from './homeworkjavascript/homeworkjavascript.component';


const routes: Routes = [
  {
    path: 'sectionfortyone',
    component: SectionTwoFortyOneComponent,
  },
  {
    path: 'sectionfortytwo',
    component: SectionTwoFortyTwoComponent,
  },
  {
    path: 'sectionfortythree',
    component: SectionTwoFortyThreeComponent,
  },
  {
    path: 'sectionfortyfour',
    component: SectionTwoFortyFourComponent
  },
  {
    path: 'sectionsixtytwo',
    component: SectionFourSixtyTwoComponent
  },
  {
    path: 'sectionsixtythree',
    component: SectionFourSixtyThreeComponent
  },
  {
    path: 'sectionsixtyfive',
    component: SectionFiveSixtyFiveComponent
  },
  {
    path: 'sectioneightyfour',
    component: SectionFiveEightyFourComponent
  },
  {
    path: 'sectioneightysix',
    component: SectionSixEightSixComponent
  },
  {
    path: 'sectionninetytwo',
    component: SectionSevenNinetyTwoComponent
  },
  {
    path: 'sectionninetythree',
    component: SectionSevenNinetyThreeComponent
  },
  {
    path: 'sectionninetyfour',
    component: SectionSevenNinetyFourComponent
  },
  {
    path: 'sectionninetyfive',
    component: SectionSevenNinetyFiveComponent
  },
  {
    path: 'sectionninetyseven',
    component: SectionSevenNinetySevenComponent
  },
  {
    path: 'sectionninetyeight',
    component: SectionSevenNinetyEightComponent
  },
  {
    path: 'sectionninetynine',
    component: SectionSevenNinetyNineComponent
  },
  {
    path: 'sectiononehundred',
    component: SectionSevenOnehundredComponent
  },
  {
    path: 'sectiononehundred-one',
    component: SectionSevenOnehundredOneComponent
  },
  {
    path: 'sectiononehundred-two',
    component: SectionSevenOnehundredTwoComponent
  },
  {
    path: 'homeworkjavascript',
    component: HomeworkjavascriptComponent
  }

];

@NgModule({
  declarations: [
    SectionTwoFortyOneComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
