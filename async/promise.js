import fs from "fs/promise";

// promise type
// 3 states: 1. Pending (Loading), 2. Resolved (Success), 3. Rejected (Error)

fs.readFiles("data.txt", "utf8")
.then((data) => {
    //success
    console.log(data);
})
.catch((error) => {
    //error
    console.log(error);
})
.finally(() => {
    console.log("Final code");
});

fs.readFiles("users.json", "utf8")
.then((users) => {
    console.log(users);

    return fs.readFile("posts.json", "utf8");
})
.then((posts) => {
    console.log(posts);

    return fs.readFiles("comments.json", "utf8");
})
.then((comments) => console.log(comments))
.catch((error) => console.log(error));