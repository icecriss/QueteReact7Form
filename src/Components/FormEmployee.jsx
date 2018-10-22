import React, { Component } from "react";
import "./FormEmployee.css";

export default class FormEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  submitForm(e) {
    e.preventDefault();
    const url = "http://92.175.11.66:3001/api/quests/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Your opinion has been saved somewhere.`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un employé");
      });
  }
  // submitForm = e => e.preventDefault();

  render() {
    return (
      <div className="test">
        <div className="FormMovie">
          <h1>What is your favorite movie?</h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Movie Information</legend>
              <div className>
                <label htmlFor="name">Title</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div>
                <label htmlFor="poster">Poster url</label>
                <br />
                <input
                  type="url"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div>
                <label htmlFor="comment">Review</label>
                <br />
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Let us know what you think of this movie..."
                  onChange={this.onChange}
                  value={this.state.comment}
                />
              </div>
              <hr />
              <div>
                <input type="submit" value="Submit" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
