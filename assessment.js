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
   let country = "";
 if (result.includes("アメリカ合衆国です")) {country ="アメリカ合衆国";}
 else if (result.includes("イギリスです")) {country = "イギリス";}
 else if (result.includes("フランスです")) {country = "フランス";}
else if (result.includes("ドイツです")) {country = "ドイツ";}
else if (result.includes("イタリアです")) {country = "イタリア";}
else if (result.includes("カナダです")) {country = "カナダ";}
else if (result.includes("オーストラリアです")) {country = "オーストラリア";}
else if (result.includes("スペインです")) {country = "スペイン";}
else if (result.includes("ポルトガルです")) {country = "ポルトガル";}
else if (result.includes("アイルランドです")) {country = "アイルランド";}
else if (result.includes("トルコです")) {country = "トルコ";}
else if (result.includes("ロシアです")) {country = "ロシア";}
else if (result.includes("中華人民共和国です")) {country = "中華人民共和国";}
else if (result.includes("台湾です")) {country = "台湾";}
else if (result.includes("メキシコです")) {country = "メキシコ";}
else if (result.includes("日本です")) {country = "日本";}

 const countryColors = {
  "アメリカ合衆国": "#3C3B6E",
  "イギリス": "#012169",
  "フランス": "#0055A4",
  "ドイツ": "#000000",
  "イタリア": "#008C45",
  "カナダ": "#FF0000",
  "オーストラリア": "#00247D",
  "スペイン": "#C60B1E",
  "ポルトガル": "#006600",
  "アイルランド": "#169B62",
  "トルコ": "#E30A17",
  "ロシア": "#D52B1E",
  "中華人民共和国": "#DE2910",
  "台湾": "#000099",
  "メキシコ": "#006847",
  "日本": "#BC002D",
 };
 document.body.style.backgroundColor =
  countryColors[country] || "#FFFFFF";


 
    
    paragraph.innerHTML = result.replace(userName, `<span class="highlight">${userName}</span>`);
    resultDivision.appendChild(paragraph);
  


    // TODO ツイートエリアの作成
   tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
      'https://twitter.com/intent/tweet?button_hashtag=' +
      encodeURIComponent('PerfectCountry') +
      '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #PerfectCountry';

    tweetDivision.appendChild(anchor);


    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
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

