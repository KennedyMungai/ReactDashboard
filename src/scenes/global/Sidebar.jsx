import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ProSidebarProvider, Menu, MenuItem } from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'


const Sidebar = () =>
{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item:active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebarProvider>
                <Menu>
                    <MenuItem>

                    </MenuItem>
                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={"https://randomuser.me/api/portraits/men/46.jpg"}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{
                                        m: "10px 0 0 0"
                                    }}
                                >Kijana Mang'aa</Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >Some guy that works here</Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebarProvider>
        </Box >
    )
}

export default Sidebar
