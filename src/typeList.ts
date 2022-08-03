/* eslint-disable @typescript-eslint/no-unused-vars */

/** 基本の型 */
let bool: boolean = true;
let num: number = 0;
let str: string = "A";
let arr1: Array<number> = [0, 1];
let arr2: number[] = [0, 1];

let tuple: [number, string] = [0, "A"];

let any1: any = false; // なんでもOK、なるべく使わない

const funcA = () => {
  const test = "TEST";
};

let null1: null = null;

let undefined1: undefined = undefined;

let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
