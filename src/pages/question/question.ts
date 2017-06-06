import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let apiQuestions = [
  {
      "Keyed": true,
      "Text": "I am the life of the party.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Feel comfortable around people.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Start conversations.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Talk to a lot of different people at parties.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Don't mind being the center of attention.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Don't talk a lot.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Keep in the background.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Have little to say.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Don't like to draw attention to myself.",
      "Style": "Extraversion"
  },
  {
      "Keyed": false,
      "Text": "Am quiet around strangers.",
      "Style": "Extraversion"
  },
  {
      "Keyed": true,
      "Text": "Am interested in people.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Sympathize with others' feelings.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Have a soft heart.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Take time out for others.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Feel others' emotions.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Make people feel at ease.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": false,
      "Text": "Am not really interested in others.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": false,
      "Text": "Insult people.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": false,
      "Text": "Am not interested in other people's problems.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": false,
      "Text": "Feel little concern for others.",
      "Style": "Agreeableness"
  },
  {
      "Keyed": true,
      "Text": "Am always prepared.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Pay attention to details.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Get chores done right away.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Like order.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Follow a schedule.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Am exacting in my work.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": false,
      "Text": "Leave my belongings around.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": false,
      "Text": "Make a mess of things.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": false,
      "Text": "Often forget to put things back in their proper place.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": false,
      "Text": "Shirk my duties.",
      "Style": "Conscientiousness"
  },
  {
      "Keyed": true,
      "Text": "Am relaxed most of the time.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": true,
      "Text": "Seldom feel blue.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Get stressed out easily.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Worry about things.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Am easily disturbed.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Get upset easily..",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Change my mood a lot.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Have frequent mood swings.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Get irritated easily.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": false,
      "Text": "Often feel blue.",
      "Style": "Emotional Stability"
  },
  {
      "Keyed": true,
      "Text": "Have a rich vocabulary.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Have a vivid imagination.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Have excellent ideas.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Am quick to understand things.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Use difficult words.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Spend time reflecting on things.",
      "Style": "Intellect"
  },
  {
      "Keyed": true,
      "Text": "Am full of ideas.",
      "Style": "Intellect"
  },
  {
      "Keyed": false,
      "Text": "Have difficulty understanding abstract ideas.",
      "Style": "Intellect"
  },
  {
      "Keyed": false,
      "Text": "Am not interested in abstract ideas.",
      "Style": "Intellect"
  },
  {
      "Keyed": false,
      "Text": "Do not have a good imagination.",
      "Style": "Intellect"
  }];

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})

export class QuestionPage {
  @ViewChild(Slides) slides:Slides;
  questions: any = apiQuestions;
  testAnswers: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.slides.lockSwipes(true);
    this.testAnswers = {
      "Extraversion": [],
      "Agreeableness": [],
      "Conscientiousness": [],
      "Emotional Stability": [],
    };
  }

  nextSlide(option) {
    console.log("Submitted");
    console.log(option.Style);
    console.log(option.Keyed);

    // If Keyed is true, then values stay the same
    if(this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === true) {
      this.testAnswers[option.Style].push(parseInt(option.factor));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(parseInt(option.factor));
      console.log(this.testAnswers);

    // If Keyed is false, then values need to get reversed.
    } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.factor == "1") {
      this.testAnswers[option.Style].push(parseInt("5"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(this.testAnswers);
      console.log(5);

    } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.factor == "2") {
      this.testAnswers[option.Style].push(parseInt("4"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(4);
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.factor == "3") {
      this.testAnswers[option.Style].push(parseInt("3"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(3);
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.factor == "4") {
      this.testAnswers[option.Style].push(parseInt("2"));
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log(2)
      console.log(this.testAnswers);

    } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.factor == "5") {
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
