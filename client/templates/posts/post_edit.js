Template.postEdit.events({
	'submit form': function(event) {
		event.preventDefault();

		let currentPostId = this._id;
		let postProperties = {
			url: $(event.target).find('[name=url]').val(),
			title: $(event.target).find('[name=title]').val()
		};

		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if (error) {
				// 向用户显示错误信息
				alert(error.reason);
			}
			else {
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},

	'click .delete': function(event) {
		event.preventDefault();

		if (confirm('Delete this post?')) {
			let currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	}
});