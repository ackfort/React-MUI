import { Button } from "@mui/material";
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
    </div>
  );
}

export default App;
