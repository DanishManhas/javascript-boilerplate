import path from "path";

export default {
//   debug: true,
mode:'development',
  devtool: "inline-source-map",
//   noinfo: false,
  entry: [path.resolve(__dirname, "src/index")],
  target: "web",
  output: {
      path:path.resolve(__dirname, "src"),
      publicPath: "/",
      filename: "bundle.js"
  },
  plugins:[],
  module:{
      rules:[
          {test:/\.js$/, exclude:/node_modules/, loader:['babel-loader']},
          {test:/\.css/, use: ['style-loader', 'css-loader']}
      ]
}
};