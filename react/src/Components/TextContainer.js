import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextContainer({title}) {



  return (
    <>
    <Box>
      <Typography> {title} </Typography>
    </Box>
    </>
  )
}
export default TextContainer;