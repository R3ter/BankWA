import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "@apollo/client";
import { DEPOSIT } from "../../API/Mutation";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import IResultMsg from "../../Interfaces/IResultMsg";

export default ({
  userPassport,
  refetch,
}: {
  userPassport: string;
  refetch: () => {};
}) => {
  const [open, setOpen] = React.useState(false);
  const [mutate, { loading, data }] = useMutation<IResultMsg>(DEPOSIT);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const amount = React.useRef(0);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!data}
        message={data?.Deposit.msg}
      />
      <Button onClick={handleClickOpen} variant="outlined" color="secondary">
        Deposit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deposit</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            onChange={(e) => {
              amount.current = +e.target.value;
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            fullWidth
            variant="standard"
            type={"number"}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            disabled={loading}
            onClick={() => {
              mutate({
                variables: { amount: amount.current, userPassport },
                onCompleted() {
                  handleClose();
                  refetch();
                },
              });
            }}
          >
            {loading ? <CircularProgress color="secondary" /> : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
