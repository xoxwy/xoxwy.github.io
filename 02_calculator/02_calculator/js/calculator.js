'use strict';
//ページ上の要素（Element）を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");

//イベントを登録
    elementSelect.addEventListener("change",update);

    elementNum1.addEventListener("change",update);

    elementNum2.addEventListener("change",update);

//関数を「update」を作り、処理をまとめる
    function update(){
        //計算結果を求める
        const result = calulate(
            Number(elementNum1.value),//一番目のテキスト入力フォームの値
            Number(elementNum2.value),//二番目のテキスト入力フォームの値
            elementSelect.value//セレクトボックスの値（計算の種類）
        );
           //画面に表示
           elementResult.innerHTML = result;//テキストを代入
         }

/**計算します */
    function calulate(num1,num2,calcType){
        let result;
        switch(calcType){
            case "type-add":
                result = num1 + num2
                break;
            case "type-substract":
                result = num1 - num2
                break;
            case "type-multiply":
                 result = num1 * num2
                 break;
            case "type-divide":
                 result = num1 / num2
                break;
        }
        return result;
    }
