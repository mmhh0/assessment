'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // 診断結果表示エリアの作成
    resultDivision.innerText = '';
    const header = document.createElement('h3');
    header.innerText = 'Your Match';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

    // TODO ツイートエリアの作成
  }
);

const answers = [
  '###userName###におすすめの国はアメリカ合衆国です。###userName###に自分の自由と夢の大切さを教えてくれるでしょう。',
  '###userName###におすすめの国はイギリスです。###userName###に広い世界と波の乗り方を教えてくれるでしょう。お気に入りのティーカップも見つけて。',
  '###userName###におすすめの国はフランスです。芸術が###userName###の背中を押すでしょう。',
  '###userName###におすすめの国はドイツです。規律と緩さが###userName###に何がしたいのかをいつの間にか感じさせてくれるでしょう。',
  '###userName###におすすめの国はイタリアです。こだわっていい、何も無くてもいい、###userName###に感じさせてくれるでしょう。',
  '###userName###におすすめの国はカナダです。###userName###に愛は良いものだと知らせてくれるでしょう。',
  '###userName###におすすめの国はオーストラリアです。人々の作る町と自然のエネルギーを目の当たりにした###userName###にありのままで居られることを教えてくれるでしょう。',
  '###userName###におすすめの国はスペインです。溢れる###userName###のエネルギーの出し方を教えてくれるでしょう。',
  '###userName###におすすめの国はポルトガルです。きっと###userName###も思わず詩う。',
  '###userName###におすすめの国はアイルランドです。悩める###userName###の耳入るケルト音楽が美しい現実を思い出させてくれるでしょう。',
  '###userName###におすすめの国はトルコです。###userName###に自己ではない他者との付き合い方と楽しさを教えてくれるでしょう。',
  '###userName###におすすめの国はロシアです。この国の強さとささやかな幸せは###userName###に生きる強さを教えてくれるでしょう。',
  '###userName###におすすめの国は中華人民共和国です。多種多様なこの広い大地は###userName###に確かな自己を与えてくれるでしょう。',
  '###userName###におすすめの国は台湾です。###userName###に隣人や友人への愛を深めてくれるでしょう。',
  '###userName###におすすめの国はメキシコです。色彩豊かなこの国が###userName###の持つ色に、さらなる発色を加えてくれるでしょう。',
  '###userName###におすすめの国は日本です。###userName###のまだ見ぬこの国があなた自身を深めるでしょう。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}

// テストを行う関数
function test() {
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
  console.assert(
    assessment('太郎') ===
      '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎');
  console.assert(
    assessment('次郎') ===
      '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子') ===
      '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  
  console.log('診断結果の文章のテスト終了');

  console.log('同じ名前なら、同じ結果を出力することのテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}

test();