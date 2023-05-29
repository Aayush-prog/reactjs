// ReactDOM.render(<h1>Hi</h1>,document.getElementById("root"));
// ReactDOM.render(<ul>
//     <li>Aayush</li>
//     <li>Tamang</li>
// </ul>,document.getElementById("root"))\

// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li>Home</li>
//                 <li>ContaCT</li>
//                 <li>aBOUT</li>
//             </ul>
//         </nav>
//     )
// }

// function MainContent(){
//     return(
//         <h1>This is main</h1>
//     )
// }//defining component

// const elem=(<div>
//     <Navbar />
//     <MainContent />

// </div>)//jsx in a variable
// ReactDOM.render(elem,document.querySelector("#root"))//using component
// const nav=(
//     <nav>
//         <ul>
//             <li>Home</li>
//             <li>Contact</li>
//             <li>About</li>
//         </ul>
//     </nav>)
// ReactDOM.render(nav,document.querySelector("#root"))//jsx and its variable
// const page=(
//     <div>
//         <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" width="100px"/>
//     </div>
// )
// ReactDOM.render(page,document.querySelector("#root"))
// function Reasons() {
//   return (
//     <div>
//
//       <h1>Just trying React</h1>
//       <ol>
//         <li>Aayush</li>
//         <li>Tamang</li>
//       </ol>
//       <footer>
//         <small>@BombhuDevelops</small></footer>
//     </div>
//   );
// }
// ReactDOM.render(<Reasons />, document.querySelector("#root")); //90% of component
import Header from "./Header"

function Main() {
  return (
    <ol>
      <li>Anish</li>
    </ol>
  );
}

function Reason() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
} //composability
ReactDOM.render(<Reason />, document.querySelector("#root"));
