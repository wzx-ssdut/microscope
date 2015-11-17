Template.postSubmit.events({
    'submit form': function(event) {
        // 确保浏览器不会再继续尝试提交表单
        event.preventDefault();

        let post = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        };

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});
