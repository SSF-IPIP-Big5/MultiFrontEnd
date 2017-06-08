import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';

import { ResultsPage } from '../results/results';
import { TestResultsProvider } from '../../providers/test-results/test-results';


<<<<<<< HEAD
=======
let apiQuestions = [
  {
      "Keyed": true,
      "Text": "Am the life of the party.",
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
  }];
  // {
  //     "Keyed": true,
  //     "Text": "Am interested in people.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Sympathize with others' feelings.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Have a soft heart.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Take time out for others.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Feel others' emotions.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Make people feel at ease.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Am not really interested in others.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Insult people.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Am not interested in other people's problems.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Feel little concern for others.",
  //     "Style": "Agreeableness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Am always prepared.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Pay attention to details.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Get chores done right away.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Like order.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Follow a schedule.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Am exacting in my work.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Leave my belongings around.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Make a mess of things.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Often forget to put things back in their proper place.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Shirk my duties.",
  //     "Style": "Conscientiousness"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Am relaxed most of the time.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Seldom feel blue.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Get stressed out easily.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Worry about things.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Am easily disturbed.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Get upset easily..",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Change my mood a lot.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Have frequent mood swings.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Get irritated easily.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Often feel blue.",
  //     "Style": "Emotional Stability"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Have a rich vocabulary.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Have a vivid imagination.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Have excellent ideas.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Am quick to understand things.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Use difficult words.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Spend time reflecting on things.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": true,
  //     "Text": "Am full of ideas.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Have difficulty understanding abstract ideas.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Am not interested in abstract ideas.",
  //     "Style": "Intellect"
  // },
  // {
  //     "Keyed": false,
  //     "Text": "Do not have a good imagination.",
  //     "Style": "Intellect"
  // }];
>>>>>>> 1cfe6a418214d92e9ac6d0f191873b938c3c0edb

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
<<<<<<< HEAD
    public questionsProv: QuestionsProvider
=======
    public testResults: TestResultsProvider
>>>>>>> 1cfe6a418214d92e9ac6d0f191873b938c3c0edb
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
<<<<<<< HEAD
      "Extraversion": [],
      "Agreeableness": [],
      "Conscientiousness": [],
      "Emotional Stability": [],
      "Intellect": []
=======
      "Extraversion": 0,
      "Agreeableness": 0,
      "Conscientiousness": 0,
      "Emotional Stability": 0,
      "Intellect": 0
>>>>>>> 1cfe6a418214d92e9ac6d0f191873b938c3c0edb
    };
    
    
  }

  // This function will call for the correct values of the score depending
  // on whether it is Keyed false or true
  keyedScore(option) {
    console.log(option.Keyed);
    if(option.Keyed === true) {
      this.testAnswers[option.Style] += parseInt(option.score);
      console.log(option.score)
    } else if(option.Keyed === false && option.score == "1") {
      this.testAnswers[option.Style] += parseInt("5");
      console.log("5")
    } else if(option.Keyed === false && option.score == "2") {
      this.testAnswers[option.Style] += parseInt("4");
      console.log("4")
    } else if(option.Keyed === false && option.score == "3") {
      this.testAnswers[option.Style] += parseInt(option.score);
      console.log(option.score)
    } else if(option.Keyed === false && option.score == "4") {
      this.testAnswers[option.Style] += parseInt("2");
      console.log("2")
    } else if(option.Keyed === false && option.score == "5") {
      this.testAnswers[option.Style] += parseInt("1");
      console.log("1")
    }
  }

  // When user clicks Submit button
  nextSlide(option) {
    console.log("Submitted");
    console.log(option.Style);
<<<<<<< HEAD
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
=======
    this.keyedScore(option);
    if(this.slides.getActiveIndex() + 1 !== apiQuestions.length) {
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log("current test answers:", this.testAnswers);
    // All slides have been completed, move onto ResultsPage
    } else {
      this.testAnswers.createDate = new Date().toISOString();
      console.log("Finished Test", this.testAnswers)
      let token = "RscrY7yAS8h0Hx3xF8jf21nLMp5yLfVJfn8I4qLEevbnxaC8KG3qsTBYk5XZIxEe";
      this.testResults.saveTest(token, this.testAnswers)
        .map(res => res.json())
        .subscribe(res =>{
          this.navCtrl.setRoot(ResultsPage, {
            test: this.testAnswers,
            showHome: true
          });
        }, error => {
          alert("Test Results Fudged!!")
          console.log(error)
        });
      }
    }
  }

  // ALL OLD CODE BELOW, NEW CODE REFACTORED ABOVE ^^^

    // If Keyed is true, then values stay the same
    // if(this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === true) {
    //   this.testAnswers[option.Style] += parseInt(option.score);
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(this.slides.getActiveIndex() + 1);
    //   this.slides.lockSwipes(true);
    //   console.log(parseInt(option.score));
    //   console.log(this.testAnswers);

    // If Keyed is false, then values need to get reversed.
  // } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.score == "1") {
  //     this.testAnswers[option.Style] += (parseInt("5"));
  //     this.slides.lockSwipes(false);
  //     this.slides.slideTo(this.slides.getActiveIndex() + 1);
  //     this.slides.lockSwipes(true);
  //     console.log(5);
  //     console.log(this.testAnswers);

    // } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.score == "2") {
    //   this.testAnswers[option.Style] += (parseInt("4"));
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(this.slides.getActiveIndex() + 1);
    //   this.slides.lockSwipes(true);
    //   console.log(4);
    //   console.log(this.testAnswers);
>>>>>>> 1cfe6a418214d92e9ac6d0f191873b938c3c0edb

    // } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.score == "3") {
    //   this.testAnswers[option.Style] += (parseInt("3"));
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(this.slides.getActiveIndex() + 1);
    //   this.slides.lockSwipes(true);
    //   console.log(3);
    //   console.log(this.testAnswers);

    // } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.score == "4") {
    //   this.testAnswers[option.Style] += (parseInt("2"));
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(this.slides.getActiveIndex() + 1);
    //   this.slides.lockSwipes(true);
    //   console.log(2)
    //   console.log(this.testAnswers);
    //
    // } else if (this.slides.getActiveIndex() + 1 !== apiQuestions.length && option.Keyed === false && option.score == "5") {
    //   this.testAnswers[option.Style] += (parseInt("1"));
    //   this.slides.lockSwipes(false);
    //   this.slides.slideTo(this.slides.getActiveIndex() + 1);
    //   this.slides.lockSwipes(true);
    //   console.log(1)
    //   console.log(this.testAnswers);

    // } else {
    //   //Finished the test
    //   this.testAnswers.createDate = new Date().toISOString();
    //   console.log("Finished Test", this.testAnswers)
    //   let token = "RscrY7yAS8h0Hx3xF8jf21nLMp5yLfVJfn8I4qLEevbnxaC8KG3qsTBYk5XZIxEe";
    //   this.testResults.saveTest(token, this.testAnswers)
    //     .map(res => res.json())
    //     .subscribe(res =>{
    //       this.navCtrl.setRoot(ResultsPage, {
    //         test: this.testAnswers,
    //         showHome: true
    //       });
    //     }, error => {
    //       alert("Test Results Fudged!!")
    //       console.log(error)
    //     });
      // }
  // }
