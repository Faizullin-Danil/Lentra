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
  images: string[]
}

const TabsPanel: React.FC<TabsPanelProps> = ({description, videos, images}) => {
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
          <Tab label="Изображения" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {description !== null ? (
            <h1>{description}</h1>
          ) : (
            <div>нет описания</div>
          )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='flex gap-2'>
          
          {videos.length > 0 
            ? (videos?.map((video, index) => (
                <TrailerComp key={index} videoUrl={video.url} site={video.site} width='150' height='100'/>
              ))
            ) : (
              <h1>Нет видео</h1>
            )}
            
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
          {images.length > 0 ? ( 
            <div className='flex flex-wrap gap-1 justify-center'>
              {images.map((image, index) => (
                <img key={index} src={image.url} width="30%" height="auto" />
              ))}
            </div>
            
          ) : (
            <h1>Нет изображений</h1>
          )}
      </CustomTabPanel>
    </Box>
  );
}

export default TabsPanel;
