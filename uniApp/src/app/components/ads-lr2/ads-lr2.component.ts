import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ads-lr2',
  templateUrl: './ads-lr2.component.html',
  styleUrls: ['./ads-lr2.component.scss']
})
export class AdsLr2Component implements OnInit {
  panelOpenState = false;
  rateControl = new FormControl("", [Validators.max(100), Validators.min(0), Validators.required]);

  firstArray: number[] = [];
  firstExArraylength = 10;
  firstExAnswerArr: number[] = [];
  firstExAnswerSum!: number;
  firstExAnswerVisible = false;

  secondExArraylength = 10;
  secondExArray: number[] = [];
  secondExAnswerArr: number[] = [];
  secondExAnswerVisible = false;

  thirdExArraylength = 10;
  thirdExArray: number[] =[];
  thirdExValue!: number;
  thirdExAnswerVisible = false;
  thirdExControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  generateFirstArray() {
    this.firstExAnswerVisible = false;
    this.firstArray = this.generateArray(this.firstExArraylength);
  }

  getSolutionFirstEx() {
    this.firstExAnswerArr = [...this.firstArray];
    this.firstExAnswerArr.sort((a,b) => b - a);
    this.firstExAnswerSum = this.firstExAnswerArr[0] + this.firstExAnswerArr[this.firstExAnswerArr.length - 1]
    this.firstExAnswerVisible = true;
  }

  generateSecondArray() {
    this.secondExAnswerVisible = false;
    this.secondExArray = this.generateArray(this.secondExArraylength);
  }

  getSolutionSecondEx() {
    this.secondExAnswerArr = this.secondExArray.filter(item => item%3)
    this.secondExAnswerVisible = true;
  }

  generateThirdArray() {
    this.thirdExAnswerVisible = false;
    this.thirdExArray = this.generateArray(this.thirdExArraylength);
    this.thirdExControl = new FormControl("", [Validators.max(Math.max(...this.thirdExArray)), Validators.min(0), Validators.required]);
  }

  getSolutionThirdEx() {
    this.thirdExAnswerVisible = true;
  }

  generateArray(length: number, min: number = 1, max: number = 100) {
    const template = new Array(length).fill(null);
    return template.map(_ => this.getRandomInt(min, max));
  }

  getRandomInt(min: number, max: number, arr: number[] = []): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.includes(rand)) return this.getRandomInt(min, max, arr)
    return rand;
  }

}
