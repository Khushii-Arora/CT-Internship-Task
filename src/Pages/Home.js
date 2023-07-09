import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
  return( 
    <div style={{textAlign:'center'}}>
  <h1>Celebal Internship Tasks</h1>
  <h2 >BY</h2>
  <h1>Khushi Arora</h1>
  <h2>CT-CSI23/RJ0605</h2>
  <br/>
  <br/>
  <h3> ⬅ ⬅ Checkout tasks from sidebar ⬅ ⬅</h3>
  </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
