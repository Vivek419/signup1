import React, { Component } from 'react';

export default class signup extends Component {

  state = {
    errorno: "",
    errorem: "",
    isValid: false,
    isValidE: false
  }
  handelClick() {
    if (this.state.isValid === true && this.state.isValidE === true) {
      alert("data submitted")
    }
    else {
      alert("enter valid data")
    }
  }
  handleChangeMail(event) {
    let email = event.target.value;
    if (typeof (email !== "undefined")) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
      if (!pattern.test(email)) {
        this.setState({ errorem: "please valid email." })
        this.setState({ isValidE: false })
      }
      else {
        this.setState({ isValidE: true })
        this.setState({ errorem: "" })
      }
    }

  }
  handleChange(event) {
    let number = event.target.value;
    if (typeof (number) !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(number)) {
        this.setState({ errorno: "please only no." })
        this.setState({ isValid: false })
      }
      else if (number.length !== 10) {
        this.setState({ errorno: "please enter valid no." })
        this.setState({ isValid: false })
      }
      else {
        this.setState({ isValid: true })
        this.setState({ errorno: "" })
      }
    }



  }


  render() {


    return (
      <div >
        <div class="container" style={{ marginTop: "10%", marginLeft: "20%", }}>
          <div class="row" style={{ marginLeft: "0px", marginRight: "0px", }}>



            <div class="col-4 " style={{ paddingLeft: "0px", paddingRight: "0px", backgroundColor: "#00bfff" }}>
              <div style={{ color: "white", marginTop: "10%", marginLeft: "10%" }}>
                <h4> Here's some amazing copy <br />Doesn't this copy just make<br />you excited</h4>
                <h5>Wow, You really built this form in 2-3<br />hour? You're awesome.</h5><br />
                <p>1 First Section</p>
                <p>2 Second Section</p>
                <p>3 Third Section</p>
              </div>
            </div>


            <div class=" col-5" style={{ paddingLeft: "0px", paddingRight: "0px", backgroundColor: "transparent" }}>
              <div  >
                <form onSubmit={() => { this.handelClick() }} style={{ padding: "35px" }}>
                  <div >
                    <h5>Create an account</h5>
                  </div>
                  <div class="form-group">

                    <input type="text" class="form-control" placeholder="First Name" />
                  </div>
                  <div class="form-group">

                    <input type="text" class="form-control" placeholder="Last Name" />
                  </div>
                  <div class="form-group">

                    <input type="Email" class="form-control" placeholder="Email" onChange={(e) => this.handleChangeMail(e)} />
                  </div>
                  <div><p>{this.state.errorem}</p></div>
                  <div class="form-group">

                    <input type="text" class="form-control" placeholder="Phone Number" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div><p>{this.state.errorno}</p></div>
                  <div>
                    <p><input type="radio" name="checkbox" />&nbsp;&nbsp;
 		              	I agree to write Excellent Code &nbsp;&nbsp;<a href="#">Terms and Conditions</a></p>


                  </div>
                  <div class="form-group">
                    <button id="signupSubmit" type="submit" style={{}} class="btn btn-info btn-block" >Continue</button>
                  </div>
                  <div><p>Already a member ?&nbsp;&nbsp;<a href="#">sign-in</a></p></div>

                </form>
              </div>

            </div>


          </div>
        </div>

      </div>
    );
  }
}

