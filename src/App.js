import { Button, Typography, styled } from "@mui/material";
import { Delete, Send } from "@mui/icons-material";

function App() {

  const RedButton = styled(Button)({
    backgroundColor: "red",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "orange"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  });

  return (
    <div>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<Send />} sx={{
        backgroundColor: "red",
        color: "white",
        margin: 5,
        "&:hover": {
          backgroundColor: "orange"
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white"
        }
      }}>
        Send
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading p tag
      </Typography>
      <h1>
        hello
      </h1>
      <RedButton>
        new Button
      </RedButton>
    </div>
  );
}

export default App;
