// $(document).ready(() => {
//     const submitBtn = document.getElementsByClassName('createArticleBtn')[0];
//     console.log(submitBtn);
//     const submitBtn2 = $(".createArticleBtn");
//     console.log(submitBtn2);


//     submitBtn.addEventListener("click", createArticle);

//     function createArticle() {
//         const title = document.getElementsByClassName('inputTitle')[0].value;
//         console.log(title);
//         const articleBody = document.getElementsByClassName('articleBody')[0].value;
//         console.log(articleBody);
//         const imageUrl = $(".imageUrl")[0].value;
//         console.log(imageUrl);

//         const requestData = {
//             user_id: 6,
//             Title: title,
//             body: articleBody,
//             img: imageUrl
//         }

//         $.ajax({
//             url: "https://speakprogramming.ro/template/DEV/PHP/VIEW/addArticle.php",
//             method: "POST",
//             data: requestData,
//             success: function(response) {

//                 const articles = getArticlesByuserID(6);
//                 console.log(articles);

//             },
//             error: function(a, status, error) {
//                 console.log(error);



//             }
//         });
//     }

//     function getArticlesByuserID(userID) {
//         $.ajax({
//             type: 'GET',
//             url: "https://speakprogramming.ro/template/DEV/PHP/VIEW/getArticles.php?user_id=" + userID,
//             success: function(data) {
//                 return data;
//             },
//             error: function(a, status, error) {
//                 console.log(error);
//             }
//         });
//     }


// });