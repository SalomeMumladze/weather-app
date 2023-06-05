import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "action";
import { fetchName } from "apis";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const CustomTextField = styled(TextField)({
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before": {
    border: "none",
  },
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    border: "none",
  },
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
    border: "none",
  },
  "& .MuiInputBase-root": {
    border: "none",
    fontSize: "14px !important",
    background: " rgb(241 245 249)",
    borderRadius: "10px",
    padding: "5px",
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
    borderRadius: "10px",
  },
});

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleSearch = async () => {
    const fetchData = async () => {
      try {
        const forecastData = await fetchName(query);
        dispatch(setLocation(forecastData.city.coord.lat, forecastData.city.coord.lon));
        setOpen(false);
      } catch (error) {
        setOpen(true);
        console.error("Error fetching hourly forecast:", error);
      }
    };

    fetchData();
  };

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="w-full m-auto text-center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              error
            </Typography>
            <Typography
              className="w-full m-auto text-center"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              The country you entered was not found. Please try again.
            </Typography>
          </Box>
        </Modal>
      )}

      <CustomTextField
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        value={query}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for places ..."
        variant="standard"
        InputProps={{
          startAdornment: <SearchOutlinedIcon className="mr-2 !w-8 !text-slate-400" />,
        }}
      />
    </>
  );
};
export default SearchBar;
