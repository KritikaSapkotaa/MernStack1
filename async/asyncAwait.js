import fs from "fs/promise";

async function getData() {
    try {
        const users = await fs.readFile("users.json", "utf8");
        console.log(users);

        const posts = await fs.readFile("posts.json", "utf8");
        console.log(posts);

        const comments = await fs.readFile("comments.json", "utf8");
        console.log(comments);
    } catch (error) {
        console.log(error);
    }
}

getData();