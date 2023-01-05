"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let array = fio.split(' ');
    return array[1] + ' ' + array[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if(!array.length) return false;
    let max = array.reduce(function(max, item){
        if(item > max) return item;
        else return max;

    })
    let min = array.reduce(function(min, item){
        if(item < min) return item;
        else return min;
    })
    return max/min;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.words = new Map();
    }
    addItem(word, description){
        if(word != null && typeof(word) === "string" && typeof(word) !== "undefined" && description != null && typeof(description) === "string" && typeof(description) !== "undefined"){
            this.words.set(word, description);
            return true;
        }        
        return false;
    }
    getItem(word){
        if(word != null && typeof(word) === "string" && typeof(word) !== "undefined"){
            if(this.words.has(word)) return this.words.get(word);
            return false;
        }
        return false;
    }
    deleteItem(word){
        if(word != null && typeof(word) === "string" && typeof(word) !== "undefined"){
            if(this.words.has(word)){
                this.words.delete(word);
                return true;
            }
            return false;
        }
        return false;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};