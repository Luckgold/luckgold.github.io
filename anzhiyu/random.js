var posts=["wenzhang/标题：探索数字货币世界：如何选择最佳交易平台并获得10000元奖励/","wenzhang/以太坊2-0全面升级完成，区块链性能进入新纪元/","wenzhang/全球央行数字货币竞赛加速，数字人民币领跑国际舞台/","wenzhang/加密货币世界震动：新法规出台，市场何去何从？/","wenzhang/全球监管风暴席卷数字货币市场：比特币价格大跳水，未来何去何从？/","wenzhang/掌握数字货币投资：揭秘四大交易所的独特优势和奖励/","wenzhang/选择最佳数字货币交易所：获取10000元奖励的指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };