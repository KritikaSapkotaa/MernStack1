import path from "path";
import url from "url";

const filePath = "codeit/course/mern/day1/video.mp4";

//basename() - filename
console.log(path.nbasename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname
console.log(path.extreme(filePath));

//parse
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);