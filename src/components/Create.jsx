import React from "react";

function Create() {
  return (
    <form>
      <h1>Create New User</h1>
      <section>
        <div className="box-name">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="box-gender">
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value="Male" />
          <input type="radio" name="gender" value="Female" />
        </div>
        <div className="box-age">
          <label htmlFor="age">Age: </label>
          <input type="text" />
        </div>
        <div className="box-file">
          <label htmlFor="file">Upload File</label>
          <input type="file" name="file" id="file" />
        </div>
      </section>
      <section>
        <button>Cancel</button>
        <button>Add Anime</button>
      </section>
    </form>
  );
}

export default Create;
