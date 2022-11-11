import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ads-lr1',
  templateUrl: './ads-lr1.component.html',
  styleUrls: ['./ads-lr1.component.scss']
})
export class AdsLr1Component implements OnInit {
  panelOpenState = false;
  rateControl = new FormControl("", [Validators.max(100), Validators.min(0), Validators.required]);

  firstArray: number[] = [];
  firstExArraylength = 10;
  firstExControl!: FormControl;
  firstExValue!: number;
  firstExAnswer!: {sum: number, product: number};
  firstExAnswerVisible = false;

  secondExArraylength = 10;
  secondExArray: number[] = [];
  secondExIndexMin!: number;
  secondExAnswer = '';

  thirdExArray: number[] = [];
  thirdExAnswerVisible = false;

  fourthExArraylength = 10;
  fourthExArray: number[] = [];
  fourthExAnswerVisible = false;
  fourthExAnswer!: {sum: number, productOf: number, maxOf: number};

  constructor() { }

  ngOnInit(): void {
  }

  generateFirstArray() {
    this.firstExAnswerVisible = false;
    this.firstArray = this.generateArray(this.firstExArraylength);
    this.firstExControl = new FormControl("", [Validators.max(Math.max(...this.firstArray)), Validators.min(0), Validators.required]);
  }

  getSolutionFirstEx() {
    const filteredArray = this.firstArray.filter(item => item > this.firstExValue)
    const sum = filteredArray.reduce((acc, curr) => acc + curr, 0)
    const product = filteredArray.reduce((acc, curr) => acc * curr, 1)
    this.firstExAnswer = {sum, product};
    this.firstExAnswerVisible = true;
  }

  generateSecondArray() {
    this.secondExAnswer = '';
    this.secondExArray = this.generateArrayUnique(this.secondExArraylength, );
  }

  getSolutionSecondEx() {
    const min = Math.min(...this.secondExArray)
    this.secondExIndexMin = this.secondExArray.indexOf(min);
    if (this.secondExIndexMin === this.secondExArray.length - 1) {
      this.secondExAnswer = `, 100`
    } else if (this.secondExIndexMin === 0) {
      this.secondExAnswer = `100, `
    } else {
      this.secondExAnswer = `, 100, `
    }
  }

  generateThirdArray() {
    this.thirdExArray = this.generateArray(8);
    this.thirdExAnswerVisible = false;
  }

  getSolutionThirdEx() {
    this.thirdExAnswerVisible = true;
  }

  generateFourtArray() {
    this.fourthExAnswerVisible = false;
    this.fourthExArray = this.generateArray(this.fourthExArraylength, -100);
  }

  getSolutionFourtEx() {
    this.fourthExAnswerVisible = true;
    const sum = this.getSumOfMultipleOfSevenOdd();
    const productOf = this.getProductOfNegativeOdd();
    const maxOf = this.getMaxOfNegative();
    this.fourthExAnswer = { sum, productOf, maxOf }
  }

  getSumOfMultipleOfSevenOdd() {
    const evenMultipleOfSeven = this.fourthExArray.filter(item => !(item%2) && !(item%7));
    const sum = evenMultipleOfSeven.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  getProductOfNegativeOdd() {
    const negativeOdd = this.fourthExArray.filter(item => (item%2) && (item<0));
    const productOf = negativeOdd.reduce((acc, curr) => acc * curr, 1);
    return productOf;
  }

  getMaxOfNegative() {
    const negative = this.fourthExArray.filter(item => (item<0));
    const maxOf = Math.max(...negative);
    return maxOf;
  }

  generateArray(length: number, min: number = 1, max: number = 100) {
    const template = new Array(length).fill(null);
    return template.map(_ => this.getRandomInt(min, max));
  }

  generateArrayUnique(length: number) {
    const template = new Array(length).fill(null);
    const min = 1;
    const max = 100;
    let arr: number[] = [];
    template.forEach((_) =>{
      arr.push(this.getRandomInt(min, max, arr))
    },[]);
    return arr;
  }

  getRandomInt(min: number, max: number, arr: number[] = []): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.includes(rand)) return this.getRandomInt(min, max, arr)
    return rand;
  }

}
