const { onRequest } = require("firebase-functions/v2/https");
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({ origin: true }));



const slider = [
    { id: 1, title: 'If I Were a Mother', category:'Books', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2021/01/If-I-Were-A-Mother.png', summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.'},
    { id: 1, title: 'Bible Study ', category: 'Events', date: 'Every 1st & 2nd Thursday in the Month', time: '7:30pm GMT+1', location: 'Zoom', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/09/bible-study-.jpg'},
    { id: 1, title: 'You are Christ\s Ambassador', category: 'Magazines', author: 'Chukie Morsi', image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/06/Screenshot-2024-06-13-112439.png', summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' }

]
const books = [
    { id: 1, title: 'If I Were a Mother', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2021/01/If-I-Were-A-Mother.png', summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.'},
    { id: 2, title: 'Being Established In The Faith', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2023/06/beitf-1.png', summary: 'Our ability to being established in the faith is in the Holy Spirit who enables us to be obedient to the faith as well as to communicate the faith. Being obedient to the faith helps to live a fulfilling Christian life and to enjoy the goodness of the faith; while communicating the faith is how you would deal with life issues to advance the kingdom causes of God and to keep the enemy at bay. This book is set out in a didactic way to teach using the Word of God, how as children of God, we can thrive and be victorious in our day to day lives. When you are established in the faith, you can have and to take a stand against erroneous winds of doctrine as well as traditions and creations of man. When you are rooted in the faith of Jesus Christ, you live with heightened spiritual sensitivity and are always led and in all things by the Holy Spirit. Carnal senses take a back seat.'},
    { id: 3, title: 'Faith In God\'s Anointed', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2021/01/Faith-In-Gods-Anointed.png', summary: 'This practical handbook serves for the good of Church Members and Pastoral Leadership. It is not a book you conjure but an informative and transformative book to give you enlightenment and illumination in the kingdom walk and work of God, in relationship to mankind and divinity. Chukie E. F. Morsi had the desire to be a part of restoring and reinstating knowledge and understanding of spiritual leadership in the Christian faith, as it affects leaders and those who look up to spiritual leadership as followers and members in most cases. Hence in the book – “FAITH IN GOD’S ANOINTED” – he shares his wisdom of truth gathered over time as a Christian FAITH spiritual leader.' },
    { id: 4, title: 'Triumph In Reading The Word', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2021/01/TIRTW-Triumph-In-Reading-The-WORD.png', summary: 'This book is a teaching and instructional manual on how to live affectively through reading the Word of God. The intention is to inspire and empower the reader to hunger to know what the Word of God says about person they are, and how they are able to triumph and have dominion over their worlds. A man’s ignorance is his own mountain; but the knowledge and understanding of the truth which is based on the living Word of God, birthed and breathed by the Holy Spirit, will always deliver, direct and prosper to give your life meaningful success with fulfilment.' },
    { id: 5, title: 'Being Divinely Led By The Lord', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2023/06/BDLBTL.png', summary: 'The book – BEING DIVINELY LED BY THE LORD! “A Biblical Guide TOWARDS Divine Guidance” – is to help you to BE ON GOD’S LEAD AND GUIDE – as an instructional book that’s free from all forms of sentiments, prejudice and dissimulation – a pure written information for your transformation in life and grace as written: “I will INSTRUCT thee and TEACH thee in the WAY which thou shalt GO: I will GUIDE thee with mine eye. 9 Be ye not as the HORSE, or as the MULE, which have no UNDERSTANDING: whose MOUTH must be HELD in with BIT and BRIDLE, lest they come near unto thee” Psalms 32:8-9. This book, BEING DIVINELY LED BY THE LORD, is meant to be a guide to DIVINE GUIDANCE and to address the fundamentals of God’s sovereignty through the ages and in the present world.'},
    { id: 2, title: 'The Realm of Revelation', author: 'Chukie Morsi', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2023/06/TROR-1.png', summary: 'The Book, THE REALM OF REVELATION speaks about the state in which we as individual Christians and the Church as a whole need to live to be effective in the whole need to live to be effective in the world in which we live. It ought to be a way of life, in the way that we speak and in the way that we relate to those around us. Living in the REALM OF REVELATION is foundational and fundamental to the Christian walk, the Church was founded on revelation. Unfortunately, today – the Church has become a place of religious traditions of man that work against the revealed word of God and that do not reflect the God that we serve.' }
];

const events = [
    { id: 1, title: 'Bible Study ', category: 'Bible Study ',date: 'Every 1st & 2nd Thursday in the Month', time: '7:30pm GMT+1', location: 'Zoom', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/09/bible-study-.jpg'},
    { id: 2, title: 'Bible Teaching ', category: 'Bible Teaching ', date: 'Every last Thursday in the Month', time: '7:30pm GMT+1', location: 'Zoom', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-12.11.16_168282b1.jpg'  }
];

const videos = [
    { id: 1, category: 'Bible Study ', title: 'Every 1st & 2nd Thursday in the Month', source: '', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/09/bible-study-.jpg'},
    { id: 2, category: 'Bible Teaching ', title: 'Every last Thursday in the Month', source: '', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-12.11.16_168282b1.jpg'  }
];

const episodes = [
    { id: 1, category: 'Bible Study ', title: 'Every 1st & 2nd Thursday in the Month', source: '', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/09/bible-study-.jpg'},
    { id: 2, category: 'Bible Teaching ', title: 'Every last Thursday in the Month', source: '', image: 'https://cefmorsiministriesinternational.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-12.11.16_168282b1.jpg'  }
];
const magazines = [
    { id: 1, title: 'You are Christ\s Ambassador', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/06/Screenshot-2024-06-13-112439.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 2, title: 'Abounding In Faith, Hope & Love', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/AFD-February-2020-Edition-pdf.jpg', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 3, title: 'Faith that Works', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/06/Screenshot-2024-06-13-120614.png',
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 4, title: 'God Is Faithful', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/06/Screenshot-2024-06-13-115958.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 5, title: 'The Path to August Your Life', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/Screenshot-2024-07-15-112705.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 6, title: 'God\'s Battle Axe', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/06/Screenshot-2024-06-13-114736.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 7, title: 'Born In Our Hearts..Emmanuel', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/AFD-DECEMBER-2021-pdf.jpg', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 8, title: 'Dare to Triumph In Every Place', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/Screenshot-2024-07-15-115342.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 9, title: 'Soaring as an Eagle', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/Screenshot-2024-07-15-115257.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },
    { id: 10, title: 'The Power of the Cross', author: 'Chukie Morsi', 
        image: 'https://www.42ndgenerationfoundation.com/achieversfaithdigest/wp-content/uploads/2024/07/Screenshot-2024-07-15-114618.png', 
        summary: 'This book is looking at Motherhood from a Biblical perspective. What the Bible teaches on motherhood and how to be a better parent. It’s a way for those who are not mothers or women even, to appreciate the mothers in their lives by understanding the enormous challenges that they may go through or be going through. It has a clear concise topics and written in a didactic way. There is an opportunity to do further study using the Bible Study outlines on the book.' },

];

// API routes
app.get('/slider', (req, res) => {
    res.json(slider);
});
app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/videos', (req, res) => {
    res.json(videos);
});

app.get('/events', (req, res) => {
    res.json(events);
});

app.get('/videos/episodes', (req, res) => {
    res.json(episodes);
});

app.get('/magazines', (req, res) => {
    res.json(magazines);
});

// Export the API
exports.api = onRequest(app);
