import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextContainer({title}) {



  return (
    <>
    <Box>
      <Typography variant="h2"> {title} </Typography>
      <Typography variant="body1" gutterBottom >lorem ipsum</Typography>
    </Box>
    </>
  )
}
export default TextContainer;