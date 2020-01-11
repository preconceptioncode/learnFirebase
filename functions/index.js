const glob = require("glob");
const camelCase = require("camelcase");
// const admin = require("firebase-admin");
// const serviceAccount = require();
// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "Your database URL"
//   });
// } catch (e) {
//   console.log(e);
// }

const files = glob.sync("./**/*.f.js", { cwd: __dirname });
for (let f = 0, fl = files.length; f < fl; f++) {
  const file = files[f];
  const functionName = camelCase(file.slice(0, -5).split("/"));
  if (
    !process.env.FUNCTION_NAME ||
    process.env.FUNCTION_NAME === functionName
  ) {
    exports[functionName] = require(file);
  }
}
