import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid, Link, styled, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent';

import TimerIcon from '@mui/icons-material/Timer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import IcecreamIcon from '@mui/icons-material/Icecream';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import NightlifeIcon from '@mui/icons-material/Nightlife';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            sx={{p:0}}
        >
            {value === index && <Container sx={{ p: 3 }}>{children}</Container>}
        </Container>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function HomePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container aria-label='tabs-container'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', borderRadius: '25px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="home tabs" variant="scrollable" scrollButtons={true} allowScrollButtonsMobile>
                    <Tab label="Schedule" {...a11yProps(0)} />
                    <Tab label="Getting there" {...a11yProps(1)} />
                    <Tab label="Honeymoon fund" {...a11yProps(2)} />
                    <Tab label="Q&A" {...a11yProps(3)} />
                    <Tab label="RSVP" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Schedule />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2} columns={2}>
                    <Grid size={1}>
                        <Typography><Link href='https://dorothyclivegarden.co.uk/'>Dorothy Clive Garden</Link> lives in the woodland quarter of Staffordshire.<br/>
                        It's on Nantwich Road, 
                        </Typography>
                    </Grid>
                    <Grid size={1}>
                        <iframe width="100%" height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=-2.3700052499771123%2C52.954455501498%2C-2.3663574457168584%2C52.95852090457078&amp;layer=mapnik&amp;marker=52.95648673726256%2C-2.3681812500000206" style={{ border: '1px solid black' }}></iframe>
                        <Link href="https://www.openstreetmap.org/?mlat=52.956487&amp;mlon=-2.368181#map=18/52.956487/-2.368181">View Larger Map</Link>
                        <Typography sx={{pt: 2}} >
                            Dorothy Clive Garden<br/>
                            Willoughbridge<br/>
                            Market Drayton<br/>
                            Shropshire<br/>
                            TF9 4EU<br/>
                            Phone: 01630 647 237
                        </Typography>
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Typography>Honeymoon fund</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Qa />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Typography>RSVP</Typography>
            </CustomTabPanel>
        </Container>
    )
}

function Qa() {
    return <Container>
        <QuestionAndAnswer question="Dress code?" answer="The groom, groomsmen and bridesmaids will be wearing blue, so please avoid blue and white. The ceremony and the path up to it aren't paved which you may want to bear in mind." />
        <QuestionAndAnswer question="Is the wedding outdoors?" answer="Hopefully yes! There is a contingency plan in case the weather doesn't like us" />
        <QuestionAndAnswer question="Where do I park?" answer="Dorothy Clive Garden has on-site parking near the entrance. Accessible parking is up the hill to the right after the entrance booth for guests who have notified that they need it." />
        <QuestionAndAnswer question="Can I take pictures on the day?" answer="A photographer and videographer will be there to capture the day. We will enforce a no-phones rule for the ceremony but you are free to take pictures during the reception." warning='Note that there will be flash photography.' />
        <QuestionAndAnswer question="Can I bring a plus-one?" answer='Sorry, unless explicitly invited you may not bring an extra guest.' />
        <QuestionAndAnswer question="I still have more questions!" answer='Get in touch with Ben at xxxxxxxx or however else is convenient.' />
    </Container>
}
interface QAProps {
    question: string;
    answer: string;
    warning?: string;
}
function QuestionAndAnswer(props: QAProps) {
    let warningText = props.warning ?
        <Warning variant='h6' align='center'>{props.warning}</Warning> : null;
    return <Box paddingBlockEnd={3}>
        <Question>{props.question}</Question>
        <Answer align='center'>{props.answer}</Answer>
        {warningText}
    </Box>
}
const Question = styled(Typography, {
  name: 'MuiQuestion',
  slot: 'value',
})(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 'bolder',
  textAlign: 'center'
}));
const Answer = styled(Typography, {
  name: 'MuiAnswer',
  slot: 'value',
})(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center'
}));
export const Warning = styled(Typography, {
  name: 'MuiWarning',
  slot: 'value',
})(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '16pt'
}));

function Schedule() {
    return <Timeline aria-label='timeline' sx={(theme) => ({
        [`& .${timelineOppositeContentClasses.root}`]: {
          [theme.breakpoints.down("lg")]: {
            flex: 0.05
          },
          flex: 0.5
        },
        p: 0,
      })}>
        <ScheduleItem time='2:45pm' event='Guest Arrival' icon={<TimerIcon />}>
        </ScheduleItem>
        <ScheduleItem time='3:30pm' event='Ceremony begins' icon={<NotificationsIcon />}>
        </ScheduleItem>
        <ScheduleItem time='4:15pm' event='Drinks & photos' icon={<PhotoCameraIcon />}>
            <Typography variant='body2'>Enjoy a glass of prosecco in the gardens</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:00pm' event='Ice cream' icon={<IcecreamIcon />}>
            <Typography variant='body2'>An ice cream cart will be set up near the tea room</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:30pm' event='Afternoon tea' icon={<EmojiFoodBeverageIcon />}>
            <Typography>Ahh, nothing like a nice cuppa tea!</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:00pm' event='Cake cutting' icon={<CakeIcon />}>
            <Typography variant='body2'>Nothing like cake after tea and cake</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:15pm' event='First dance' icon={<NightlifeIcon />}>
            <Typography variant='body2'>Join us in the tea room!</Typography>
        </ScheduleItem>
        <ScheduleItem time='7:30pm' event='Pizza time' icon={<LocalPizzaIcon />}>
            <Typography variant='body2'>Jordy's Pizza will be available near the Bryan Mayer Pavilion</Typography>
        </ScheduleItem>
        <LastScheduleItem time='12:00am' event='Carriages' icon={<LocalTaxiIcon />}>
            <Typography variant='body2'>Music stops at 11:30 & everyone must be gone by midnight</Typography>
        </LastScheduleItem>
    </Timeline>
}

interface ScheduleItemProps {
    children?: React.ReactNode
    icon: React.ReactNode
    time: string,
    event: string
}
function ScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color='primary'>{props.icon}</TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6'>{props.time} - {props.event}</Typography>
            {props.children}
            </TimelineContent>
    </TimelineItem>
}
function LastScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color='primary'>{props.icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6'>{props.time} - {props.event}</Typography>
            {props.children}
        </TimelineContent>
    </TimelineItem>
}