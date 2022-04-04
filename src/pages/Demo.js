import { Box, Typography } from '@mui/material';
import { ButtonConfirm } from 'components/Button';
// import useLocalStorage from "hooks/useLocalStorage";

export default function Demo() {
  // const [auth, setAuth] = useLocalStorage("auth", {});

  return (
    <>
      <Box component="div">
        <Typography variant="subtitle1">Framework: React ver 17.0.2</Typography>
        <Typography variant="subtitle1">UI: Mui UI 5.0.0-alpha.57</Typography>
        <ButtonConfirm
          variant="contained"
          title="Are you sure post comment?"
          description="This action will not be undone"
        >
          Confirm
        </ButtonConfirm>
      </Box>
    </>
  );
}
