import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TrailerComp from "../TrailerComp/TrailerComp"


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabsPanelProps {
  description: string | null
  videos: [] | null
}

const TabsPanel: React.FC<TabsPanelProps> = ({description, videos}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Описание" {...a11yProps(0)} />
          <Tab label="Видео" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>{description}</h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='flex gap-2'>
          
          {videos.length > 0 
            ? (videos?.map((video) => (
                <TrailerComp videoUrl={video.url}/>
              ))
            ) : (
              <div></div>
            )}
            
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

export default TabsPanel;
