import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./ContactPage.css";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PageHeader from "./PageHeader";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    color: "white"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});
class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className="contact-container">
        <div className="contact-bg">
          <PageHeader centerBox={true} title="CONTACT US" />
          <div className="c-form">
            <div className="c-form-hdr">
              Ready to grow your business? Email us{" "}
              <a className="eml" href="">
                here
              </a>{" "}
              or fill out the form below with your requirements.
            </div>

            <FormControl>
              <FormControl
                style={{ margin: "10px 0" }}
                className="form-ipt form-name"
              >
                <InputLabel
                  style={{
                    marginLeft: "5px",
                    color: "white"
                  }}
                  ref={ref => {
                    this.labelRef = ReactDOM.findDOMNode(ref);
                  }}
                  htmlFor="form-name"
                >
                  Name
                </InputLabel>
                <OutlinedInput
                  id="form-name"
                  style={{ color: "white", border: "1px solid white" }}
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
              </FormControl>

              <FormControl
                style={{ margin: "10px 0" }}
                className="form-ipt form-services"
              >
                <InputLabel
                  style={{ marginLeft: "5px", color: "white" }}
                  ref={ref => {
                    this.labelRef = ReactDOM.findDOMNode(ref);
                  }}
                  htmlFor="form-company"
                >
                  Company
                </InputLabel>
                <OutlinedInput
                  id="form-company"
                  style={{ border: "1px solid white" }}
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                />
              </FormControl>

              <FormControl
                style={{ margin: "10px 0", color: "white" }}
                className="form-ipt form-services"
              >
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows="10"
                  style={{ color: "white" }}
                  label="Which services do you need?"
                  variant="outlined"
                />
              </FormControl>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
