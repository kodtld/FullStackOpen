import React from "react";
import { Entry, HospitalEntry, OccupationalHealthcareEntry } from "../../types";
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WorkIcon from "@mui/icons-material/Work";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

interface EntryDetailsProps {
  entry: Entry;
}

const EntryDetails: React.FC<EntryDetailsProps> = ({ entry }) => {
  const classes = useStyles();

  switch (entry.type) {
    case "Hospital":
      const hospitalEntry = entry as HospitalEntry;
      return (
        <List className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText
              primary={hospitalEntry.date}
              secondary={`Discharge: ${hospitalEntry.discharge.date} - ${hospitalEntry.discharge.criteria}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={hospitalEntry.description} />
          </ListItem>
        </List>
      );

    case "OccupationalHealthcare":
      const occupationalEntry = entry as OccupationalHealthcareEntry;
      return (
        <List className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={occupationalEntry.date} secondary={`Specialist: ${occupationalEntry.specialist}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={occupationalEntry.description} />
          </ListItem>
        </List>
      );

    default:
      return (
        <Typography variant="body1" color="textSecondary">
          Unknown entry type
        </Typography>
      );
  }
};

export default EntryDetails;
