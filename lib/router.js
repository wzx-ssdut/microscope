Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});

// :_id这个特殊的标记告诉路由器两件事：
// 1. 去匹配任何符合/posts/xxxx/格式的url
// 2. 把xxxx的值放到路由器的params数组中的_id属性里面
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});
