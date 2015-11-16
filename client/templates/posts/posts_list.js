let postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'https://www.meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
    posts: postsData
});
