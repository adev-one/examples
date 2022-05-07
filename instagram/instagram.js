const Instagram = require('instagram-web-api');

const username = 'adevone__';
const password = 'cursodeprogramacao';

const storyFilePath = './assets/story.png';
const feedFilePath = './assets/feed.png';

const client = new Instagram({ username, password });

(async () => {
    await client.login();

    const { media: story } = await client
        .uploadPhoto({ photo: storyFilePath, caption: '', post: 'story' })
        .catch(function (e) {
            console.log('ERRO:', e);
        });
    console.log(`https://www.instagram.com/p/${story.code}/`);

    const { media: feed } = await client
        .uploadPhoto({ photo: feedFilePath, caption: '', post: 'story' })
        .catch(function (e) {
            console.log('ERRO:', e);
        });
    console.log(`https://www.instagram.com/p/${feed.code}/`);
})();
