import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SectionTwoFortyTwoComponent } from './section-two/components/section-two-forty-two/section-two-forty-two.component';
import { SectionTwoFortyThreeComponent } from './section-two/components/section-two-forty-three/section-two-forty-three.component';
import { SectionTwoFortyFourComponent } from './section-two/components/section-two-forty-four/section-two-forty-four.component';
import { SectionFourSixtyTwoComponent } from './section-four/components/section-four-sixty-two/section-four-sixty-two.component';
import { SectionFourSixtyThreeComponent } from './section-four/components/section-four-sixty-three/section-four-sixty-three.component';
import { SectionFiveSixtyFiveComponent } from './section-five/components/section-five-sixty-five/section-five-sixty-five.component';
import { CockpitComponent } from './section-five/components/section-five-sixty-five/cockpit/cockpit.component';
import { ServerElementComponent } from './section-five/components/section-five-sixty-five/server-element/server-element.component';
import { SectionFiveEightyFourComponent } from './section-five/components/section-five-eighty-four/section-five-eighty-four.component';
import { GameControlComponent } from './section-five/components/section-five-eighty-four/game-control/game-control.component';
import { OddComponent } from './section-five/components/section-five-eighty-four/odd/odd.component';
import { EvenComponent } from './section-five/components/section-five-eighty-four/even/even.component';
import { SectionSixEightSixComponent } from './section-six/components/section-six-eight-six/section-six-eight-six.component';
import { HeaderComponent } from './section-six/components/section-six-eight-six/header/header.component';
import { RecipesComponent } from './section-six/components/section-six-eight-six/recipes/recipes.component';
import { ShoppingListComponent } from './section-six/components/section-six-eight-six/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './section-six/components/section-six-eight-six/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './section-six/components/section-six-eight-six/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './section-six/components/section-six-eight-six/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './section-six/components/section-six-eight-six/shopping-list/shopping-edit/shopping-edit.component';
import { SectionSevenNinetyTwoComponent } from './section-seven/components/section-seven-ninety-two/section-seven-ninety-two.component';
import { SectionSevenNinetyThreeComponent } from './section-seven/components/section-seven-ninety-three/section-seven-ninety-three.component';
import { SectionSevenNinetyFourComponent } from './section-seven/components/section-seven-ninety-four/section-seven-ninety-four.component';
import { BasicHightlightDirective } from './section-seven/components/section-seven-ninety-four/basic-highlight/basic-highlight.directive';
import { SectionSevenNinetyFiveComponent } from './section-seven/components/section-seven-ninety-five/section-seven-ninety-five.component';
import { BetterHighlightDirective } from './section-seven/components/section-seven-ninety-five/better-highlight/better-highlight.directive';
import { SectionSevenNinetySevenComponent } from './section-seven/components/section-seven-ninety-seven/section-seven-ninety-seven.component';
import { HostHighlightDirective } from './section-seven/components/section-seven-ninety-seven/host-highlight/host-highlight.directive';
import { SectionSevenNinetyEightComponent } from './section-seven/components/section-seven-ninety-eight/section-seven-ninety-eight.component';
import { HostbindingHighlightDirective } from './section-seven/components/section-seven-ninety-eight/hostbinding-highlight/hostbinding-highlight.directive';
import { SectionSevenNinetyNineComponent } from './section-seven/components/section-seven-ninety-nine/section-seven-ninety-nine.component';
import { BindingHighlightDirective } from './section-seven/components/section-seven-ninety-nine/binding-highlight/binding-highlight.directive';
import { SectionSevenOnehundredComponent } from './section-seven/components/section-seven-onehundred/section-seven-onehundred.component';
import { SectionSevenOnehundredOneComponent } from './section-seven/components/section-seven-onehundred-one/section-seven-onehundred-one.component';
import { UnlessDirective } from './section-seven/components/section-seven-onehundred-one/unless.directive';
import { SectionSevenOnehundredTwoComponent } from './section-seven/components/section-seven-onehundred-two/section-seven-onehundred-two.component';
import { BackgroundNumberDirective } from './section-seven/components/section-seven-ninety-two/background-number/background-number.directive';
import { HomeworkjavascriptComponent } from './homeworkjavascript/homeworkjavascript.component';



@NgModule({
  declarations: [
    AppComponent, 
    SectionTwoFortyTwoComponent, 
    SectionTwoFortyThreeComponent, 
    SectionTwoFortyFourComponent, 
    SectionFourSixtyTwoComponent, 
    SectionFourSixtyThreeComponent, 
    SectionFiveSixtyFiveComponent, 
    CockpitComponent,
    ServerElementComponent,
    SectionFiveEightyFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    SectionSixEightSixComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    SectionSevenNinetyTwoComponent,
    SectionSevenNinetyThreeComponent,
    SectionSevenNinetyFourComponent,
    BasicHightlightDirective,
    SectionSevenNinetyFiveComponent,
    BetterHighlightDirective,
    SectionSevenNinetySevenComponent,
    HostHighlightDirective,
    SectionSevenNinetyEightComponent,
    HostbindingHighlightDirective,
    SectionSevenNinetyNineComponent,
    BindingHighlightDirective,
    SectionSevenOnehundredComponent,
    SectionSevenOnehundredOneComponent,
    UnlessDirective,
    SectionSevenOnehundredTwoComponent,
    BackgroundNumberDirective,
    HomeworkjavascriptComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
