import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TrailerComp from "../TrailerComp/TrailerComp";
import { Video } from '@/interfaces/IVideo';
import { Image } from '@/interfaces/IImages';

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
  description: string | null;
  videos: Video[];
  images: Image[] | undefined;
}

const TabsPanel: React.FC<TabsPanelProps> = ({ description, videos, images }) => {
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
        <Typography variant="body1">{description || 'Нет описания'}</Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box
          display="flex"
          gap={2}
          sx={{ overflowX: 'auto' }}
        >
          {videos?.length > 0
            ? videos.map((video, index) => (
                <Box key={index} textAlign="center">
                  <TrailerComp videoUrl={video.url} width="150" height="100" />
                  <Typography variant="caption">{video.name}</Typography>
                </Box>
              ))
            : <Typography>Нет видео</Typography>}
        </Box>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={2}>
  {images && images.length > 0 ? (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={1}
      sx={{ overflowX: 'auto', paddingBottom: '10px' }} // добавляем прокрутку если нужно
    >
      {images.map((image, index) => (
        <Box key={index} sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
          <img
            src={image.url}
            style={{
              width: '100%', // адаптивная ширина
              height: 'auto',
              objectFit: 'cover', // для сохранения пропорций изображения и корректной обрезки
            }}
            alt="Film Image"
          />
        </Box>
      ))}
    </Box>
  ) : (
    <Typography>Нет изображений</Typography>
  )}
</CustomTabPanel>

    </Box>
  );
};

export default TabsPanel;
