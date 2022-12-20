const layout = require('./layout');

module.exports = ({ req }) => {
    return layout({
        req, 
        content: `
            <div class="main" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h1 class="mb-4">About</h1>
                <h5>
                    Sequel is an e-commerce webshop where you can find movies you love, find out more about them, and purchase original 
                    CDs of them. 
                    This is a newly created e-commerce website and we are always looking forward to hearing your feedback so that we can 
                    further improve our service, add new features, make it much easier to use, and provide seamlessly good experience for 
                    out customers and clients. Please give this a go and if you have any questions, don't hesitate to reach out to us. 
                    <br><br>
                    Share our webshop with your friends and help us expand more as we are so keen to build a big community of movie lovers 
                    and provide them a best service out there. 
                    <br><br>
                    Oh, and, don't forget to sign up for our weekly newsletter as we are quite sure you are going to love 
                    weekly news and updates from us!
                    <br><br>
                    Cheers, <br>
                    The Sequel Team
                </h5>
            </div>
        `
    });
};