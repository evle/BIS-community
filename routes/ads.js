const router = require('koa-router')();

router.get('/ads', async (ctx, next) => {
    await ctx.render('ads/bis-ads', {
        
      })
    
  })

//   router.get('/create', sign.isLogin, async (ctx, next) => {
//   await ctx.render('topic/edit', {
//     title: '发表话题',
//     tags: config.tags
//   });
// });

// /**
  
  module.exports = router;