import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';


/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})

export class QuestionPage {
  @ViewChild(Slides) slides:Slides;
  questions: any = [];
  testAnswers: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public questionsProv: QuestionsProvider
  ) {
      questionsProv.getQuestions(/*insert token here later*/)
      .map(res => res.json())
      .subscribe( res => {
          this.questions = res;
          for(let singleQuestion of this.questions){
            console.log(singleQuestion.Text);
          }
      }, error =>{
        alert("Could not retrieve questions");
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.slides.lockSwipes(true);
    this.testAnswers = {
      "Extraversion": [],
      "Agreeableness": [],
      "Conscientiousness": [],
      "Emotional Stability": []
    };
    
    
  }

  nextSlide(option) {
    console.log("Submitted");
    console.log(option.Style);
    console.log(option.Keyed);

    // If Keyed is true, then values stay the same
    if(this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === true) {
      this.testAnswers[option.Style].push(parseInt(option.factor));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(parseInt(option.factor));
      console.log(this.testAnswers);

    // If Keyed is false, then values need to get reversed.
    } else if (this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === false && option.factor == "1") {
      this.testAnswers[option.Style].push(parseInt("5"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(this.testAnswers);
      console.log(5);

    } else if (this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === false && option.factor == "2") {
      this.testAnswers[option.Style].push(parseInt("4"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(4);
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === false && option.factor == "3") {
      this.testAnswers[option.Style].push(parseInt("3"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(3);
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === false && option.factor == "4") {
      this.testAnswers[option.Style].push(parseInt("2"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(2)
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== this.questions.length && option.Keyed === false && option.factor == "5") {
      this.testAnswers[option.Style].push(parseInt("1"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(1)
      console.log(this.testAnswers);

    } else {
      //Finished the test
      this.testAnswers.createDate = new Date().toISOString();
    }

  }

}
