const { RTMClient } = require('@slack/client');
const token = 'xoxb-720750890420-721223602885-wSUI4GkPPFkvYwiTcKpgLLJC';
const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  var text = message.text;

  if(text.includes('밥')) {
    var lunchList = ['[돈까스]하루엔소쿠', '[국밥]국고집', '연안식당', '한솥', '[한식]정금식당', '[한식]옛날농장', '[칼국수]오향절면', '[분식]작은공간', '[분식]국미당', '[분식]엽떡', '제레미버거', '[중식]일품향', '버거킹', 'KFC', '서브웨이', '에그드랍'];

    var resultArr = [];
    while(resultArr.length < 3) {
      var randomRecommend = lunchList[Math.floor(Math.random() * lunchList.length)];

      if(!resultArr.includes(randomRecommend)) {
        resultArr.push(randomRecommend);
        randomRecommend = '';
      }
    }

    var result = resultArr.join(', ');
    
    rtm.sendMessage(result, message.channel);
  } else if(text.includes('바보')) {
    rtm.sendMessage('반사', message.channel);
  }
});

// function getRandomList() {
//   var lunchList = ['[돈까스]하루엔소쿠', '[국밥]국고집', '연안식당', '한솥', '[한식]정금식당', '[한식]옛날농장', '[칼국수]오향절면', '[분식]작은공간', '[분식]국미당', '[분식]엽떡', '제레미버거', '[중식]일품향', '버거킹', 'KFC', '서브웨이', '에그드랍'];
//   var resultArr = [];
//   while(resultArr.length === 3) {
//     var randomRecommend = lunchList[Math.floor(Math.random() * lunchList.length)];

//     if(!resultArr.includes(randomRecommend)) {
//       resultArr.push(randomRecommend);
//     }
//   }

//   return resultArr;
// }
