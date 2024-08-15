import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import RefreshIcon from '@mui/icons-material/Refresh';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';





export const ListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/boxes">
            <ListItemIcon>
                <CheckBoxOutlineBlankIcon />
            </ListItemIcon>
            <ListItemText primary="Boxes" />
        </ListItemButton>
        <ListItemButton component={Link} to="/tables">
            <ListItemIcon>
                <BackupTableIcon />
            </ListItemIcon>
            <ListItemText primary="Tables" />
        </ListItemButton>
        <ListItemButton component={Link} to="/progress">
            <ListItemIcon>
                <RefreshIcon />
            </ListItemIcon>
            <ListItemText primary="Progress" />
        </ListItemButton>
        <ListItemButton component={Link} to="/cards">
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Cards" />
        </ListItemButton>
        <ListItemButton component={Link} to="/charts">
            <ListItemIcon>
                <InsertChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
Others
        </ListSubheader>
        <ListItemButton component={Link} to="/dates">
            <ListItemIcon>
                <DateRangeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Date Pickers" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);