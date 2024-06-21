import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Container, Stack } from "@mui/material";

function App() {

  return (
    <Box sx={{backgroundColor:"red"}}>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
