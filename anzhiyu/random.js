var posts=["wenzhang/标题：探索数字货币世界：如何选择最佳交易平台并获得10000元奖励/","wenzhang/全球监管风暴席卷数字货币市场：比特币价格大跳水，未来何去何从？/","wenzhang/掌握数字货币投资：揭秘四大交易所的独特优势和奖励/","wenzhang/选择最佳数字货币交易所：获取10000元奖励的指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };