import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { ResultsPage } from '../results/results';

import { QuestionsProvider } from '../../providers/questions/questions';
import { TestResultsProvider } from '../../providers/test-results/test-results';

//TODO - make this pull question from the server
// let apiQuestions = [ //abbreviated question set for testing
//   {
//       "Keyed": true,
//       "Text": "Am the life of the party.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": true,
//       "Text": "Feel comfortable around people.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": true,
//       "Text": "Start conversations.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": true,
//       "Text": "Talk to a lot of different people at parties.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": true,
//       "Text": "Don't mind being the center of attention.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": false,
//       "Text": "Don't talk a lot.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": false,
//       "Text": "Keep in the background.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": false,
//       "Text": "Have little to say.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": false,
//       "Text": "Don't like to draw attention to myself.",
//       "Style": "Extraversion"
//   },
//   {
//       "Keyed": false,
//       "Text": "Am quiet around strangers.",
//       "Style": "Extraversion"
//   }];
  
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
    public questionsProv: QuestionsProvider,
    public testResults: TestResultsProvider
  ) {
      questionsProv.getQuestions()
      .map(res => res.json())
      .subscribe( res => {
          this.questions = res;
          console.log(this.questions);
          // for(let singleQuestion of this.questions){
          //   console.log(singleQuestion.Text);
          //   console.log(singleQuestion);
          // }
      }, error =>{
        alert("Could not retrieve questions");
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.slides.lockSwipes(true);
    this.testAnswers = {
      "Extraversion": 0,
      "Agreeableness": 0,
      "Conscientiousness": 0,
      "EmotionalStability": 0,
      "Intellect": 0
    };
    
    
  }
  
  keyedScore(option) {
    console.log("keyed option is: " + option.Keyed);
    let optionMod = 0;
    if(option.Keyed) { //this is if Keyed is set to TRUE
      this.testAnswers[option.Style] += parseInt(option.score);
    } else if(!option.Keyed) { //this is if Keyed is set to FALSE
      switch (parseInt(option.score)) { //reverse the scores for negatively keyed questions
        case 1: { optionMod = 5; console.log(optionMod); break; }
        case 2: { optionMod = 4; console.log(optionMod); break; }
        case 3: { optionMod = 3; console.log(optionMod); break; }
        case 4: { optionMod = 2; console.log(optionMod); break; }
        case 5: { optionMod = 1; console.log(optionMod); break; }
      }
      this.testAnswers[option.Style] += optionMod; //add the reversed score to the right Style
      console.log("optionMod is now " + optionMod);
    }
  }
  
  // When user clicks Submit button
  nextSlide(option) {
    console.log("Submitted");
    console.log(option.Style);
    this.keyedScore(option);
    if(this.slides.getActiveIndex() + 1 !== this.questions.length) {
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
      this.slides.lockSwipes(true);
      console.log("current test answers:", this.testAnswers);
    // All slides have been completed, move onto ResultsPage
    } else {
      this.testAnswers.createDate = new Date().toISOString();
      this.testAnswers.userId = "58f83b7bec68fd375bff47c6"; // hard coded userId
      console.log("Finished Test", this.testAnswers)
      let token = "fEMHZLODrwaGLISaSXPnhiEeNUnz65pSdOIEDzt4F3dnGHE1n1bAkAZJpFEwHZ7l"; //hard coded token
      let results = this.testAnswers;
      this.testResults.saveTest(token, results)
        .map(res => res.json())
        .subscribe(res =>{
          this.navCtrl.setRoot(ResultsPage, {
            test: this.testAnswers,
            showHome: true
          });
        }, error => {
          alert("Test Results Fudged!!")
          console.log(this.testAnswers);
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
