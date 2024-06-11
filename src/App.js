import { Button, Typography } from "@mui/material";
import { Delete, Send } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading p tag
      </Typography>
      <h1>
        hello
      </h1>
    </div>
  );
}

export default App;
