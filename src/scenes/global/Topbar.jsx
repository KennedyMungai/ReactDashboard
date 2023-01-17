import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { colorModeContext, tokens } from '../../theme'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search';


const Topbar = () =>
{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(colorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px">

                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            </Box>
            <IconButton sx={{ display: "flex" }}></IconButton>
        </Box >
    )
}

export default Topbar
