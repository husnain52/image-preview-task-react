import React from "react";
// css file import
import "./App.css";
// material ui imports
import { Paper, Typography, Button } from "@material-ui/core";
// user image import
import UserImage from "./assets/img/default-user.png";
// material icon import
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";



function App() {

  // useState
  const [state, setstate] = React.useState({
    fileURL: UserImage,
  });

  // image handler func
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setstate({ ...state, fileURL: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="app-main">
      <Paper className="paper">

        <Typography variant="h5" className="heading">
          My Task
        </Typography>
        
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={imageHandler}
        />

        {/* image */}
        <img src={state.fileURL} alt="user" className="user-image" />

        <Typography variant="p" className="text-p">
          Select new image.
        </Typography>

        <label htmlFor="contained-button-file">
          <Button
            variant="outlined"
            color="primary"
            component="span"
            className="btn-upload"
            endIcon={<PhotoCameraIcon />}
          >
            Upload
          </Button>
        </label>
      </Paper>
    </div>
  );
}

export default App;
