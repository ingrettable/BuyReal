import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextContainer({title, body}) {



  return (
    <Box padding={2} >
      <Typography variant="h2"> {title} </Typography>
      <Typography variant="h6" gutterBottom >{body}</Typography>
    </Box>
  )
}
export default TextContainer;