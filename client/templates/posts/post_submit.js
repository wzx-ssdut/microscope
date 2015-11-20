Template.postSubmit.events({
    'submit form': function(event) {
        // 确保浏览器不会再继续尝试提交表单
        event.preventDefault();

        let post = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            // 显示错误信息并退出
            if (error) {
                return alert(error.reason);
            }

            Router.go('postPage', {_id: result._id});
        });
    }
});
