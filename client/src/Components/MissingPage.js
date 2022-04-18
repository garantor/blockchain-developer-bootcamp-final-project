import { Link } from "react-router-dom";
import { Container, Box } from "@mui/material";


function MissingPage() {
  return (
    <Box sx={{ display: "flex" }}>
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </main>
    </Box>
  );
};

export default MissingPage;
