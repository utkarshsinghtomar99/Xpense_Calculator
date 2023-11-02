
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";
import BalDisplay from "./components/BalDisplay";
import IncomeDisplay from "./components/IncomeDisplay";
import CurrentXpense from "./components/CurrentXpense";
import Form from "./components/Form";


const App = () =>
{

  return (
    <>
      <Navbar />
      <section className="container-fluid p-4">
        <div className="row g-0">
          <div className="col-sm-12  col-md-6  col-12" style={{ padding: '0 2%' }}>
            <BalDisplay />
            <div className="row">
              <div className="col-sm-12  col-md-6  col-12">
                <IncomeDisplay />
              </div>
              <div className="col-sm-12  col-md-6  col-12 mt-sm-3 mt-md-0 mt-lg-0">
                <CurrentXpense />
              </div>
            </div>
            <Form />
          </div>
          <div className="col-sm-12  col-md-6  col-12">
            <ListGroup />
          </div>
        </div>
      </section>
    </>
  )
}

export default App